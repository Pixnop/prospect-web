// Mesure des contrastes du carnet de prospection (et de ses surfaces de verre).
//
// La méthode est celle des passes précédentes, rendue exécutable : chaque surface
// est le composite sRGB de ses couches réelles (voile de thème, vitre, bande de
// rangée) sur les pixels du fond photographique embarqué, et chaque encre est
// confrontée à ce composite pixel par pixel. Deux chiffres par couple : la
// moyenne de l'image, et le PIRE pixel. Le pire pixel est volontairement mesuré
// sans le flou des vitres (le flou resserre les extrêmes) : c'est une borne
// prudente. Plancher AA petit texte : 4.5:1.
//
// Usage : node scripts/measure-contrast.mjs (sharp est déjà en devDependency).

import sharp from 'sharp';

const SOURCE = new URL('../src/assets/backdrop.jpg', import.meta.url).pathname;
const FLOOR = 4.5;
/** Largeur d'analyse : assez fine pour les zones sombres, assez petite pour l'instant. */
const WIDTH = 1280;

/** [r, g, b, a] depuis « rgba(r, g, b, a) » ou « #rrggbb ». */
function parseColor(text) {
	const rgba = text.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
	if (rgba) {
		return [Number(rgba[1]), Number(rgba[2]), Number(rgba[3]), Number(rgba[4])];
	}
	const hex = text.match(/^#([0-9a-f]{6})$/i);
	if (hex) {
		const value = Number.parseInt(hex[1], 16);
		return [(value >> 16) & 255, (value >> 8) & 255, value & 255, 1];
	}
	throw new Error(`Couleur illisible : ${text}`);
}

/** Composite « source over » d'une couche translucide sur un fond opaque, en sRGB. */
function over(base, layer) {
	const [lr, lg, lb, la] = layer;
	return [lr * la + base[0] * (1 - la), lg * la + base[1] * (1 - la), lb * la + base[2] * (1 - la)];
}

function channelLinear(value) {
	const c = value / 255;
	return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}

function luminance([r, g, b]) {
	return 0.2126 * channelLinear(r) + 0.7152 * channelLinear(g) + 0.0722 * channelLinear(b);
}

function contrast(a, b) {
	const [hi, lo] = a > b ? [a, b] : [b, a];
	return (hi + 0.05) / (lo + 0.05);
}

// ── Tokens copiés de src/styles/custom.css (les valeurs, pas les noms) ──────────
const themes = {
	sombre: {
		layers: {
			veil: 'rgba(20, 16, 13, 0.72)',
			item: 'rgba(17, 16, 16, 0.5)',
			itemFull: 'rgba(20, 18, 16, 0.82)',
			rowOdd: 'rgba(43, 39, 36, 0.3)',
			rowEven: 'rgba(17, 16, 16, 0.3)',
			hover: 'rgba(213, 162, 117, 0.07)',
			selected: 'rgba(213, 162, 117, 0.14)',
		},
		// En sombre, les filons impairs posent leurs relevés sur la vitre nue.
		// Les survols gardent leur bande et reçoivent le lavis par-dessus.
		surfaces: {
			'relevés, filon impair (vitre nue)': ['veil', 'item'],
			'relevés, filon pair (bande paire)': ['veil', 'item', 'rowEven'],
			'relevé survolé (bande impaire + lavis)': ['veil', 'item', 'rowOdd', 'hover'],
			'bandeau de filon (bande impaire)': ['veil', 'item', 'rowOdd'],
			'bandeau survolé (bande impaire + lavis)': ['veil', 'item', 'rowOdd', 'selected'],
			'tampon du total (bande paire)': ['veil', 'item', 'rowEven'],
			'repli étroit (vitre pleine)': ['veil', 'itemFull'],
		},
		inks: {
			'text-1 (intitulés, nom de filon)': '#ede6dd',
			'text-2 (relevés, plage, tampon)': '#b3a99e',
			'copper-300 (numéros, survol)': '#e3b489',
		},
	},
	clair: {
		layers: {
			veil: 'rgba(240, 233, 224, 0.54)',
			item: 'rgba(255, 255, 255, 0.48)',
			itemFull: 'rgba(255, 255, 255, 0.82)',
			rowOdd: 'rgba(255, 255, 255, 0.32)',
			rowEven: 'rgba(247, 242, 235, 0.24)',
			hover: 'rgba(126, 82, 48, 0.06)',
			selected: 'rgba(126, 82, 48, 0.12)',
		},
		// En clair, la vitre nue laissait text-2 sous le plancher : chaque filon
		// porte une bande de rangée (impaire pour les impairs, paire pour les
		// pairs), et les pires cas mesurés ici en tiennent compte.
		surfaces: {
			'relevés, filon impair (bande impaire)': ['veil', 'item', 'rowOdd'],
			'relevés, filon pair (bande paire)': ['veil', 'item', 'rowEven'],
			'relevé survolé (pire cas : pair + bande + lavis)': ['veil', 'item', 'rowEven', 'rowOdd', 'hover'],
			'bandeau de filon (bande impaire)': ['veil', 'item', 'rowOdd'],
			'bandeau survolé (pire cas : pair + bande + lavis)': ['veil', 'item', 'rowEven', 'rowOdd', 'selected'],
			'tampon du total (bande paire)': ['veil', 'item', 'rowEven'],
			'repli étroit (vitre pleine)': ['veil', 'itemFull'],
		},
		inks: {
			'text-1 (intitulés, nom de filon)': '#231e1a',
			'text-2 (relevés, plage, tampon)': '#5b5249',
			'copper-800 (numéros, survol)': '#563723',
		},
	},
};

/** Les surfaces d'un thème, résolues en piles de couleurs prêtes à composer. */
function surfacesOf(theme) {
	const layers = Object.fromEntries(Object.entries(theme.layers).map(([name, text]) => [name, parseColor(text)]));
	return Object.fromEntries(
		Object.entries(theme.surfaces).map(([name, stack]) => [name, stack.map((layer) => layers[layer])]),
	);
}

const { data, info } = await sharp(SOURCE).resize({ width: WIDTH }).raw().toBuffer({ resolveWithObject: true });
const pixelCount = info.width * info.height;

let failures = 0;
for (const [themeName, theme] of Object.entries(themes)) {
	console.log(`\nThème ${themeName}`);
	for (const [surfaceName, layers] of Object.entries(surfacesOf(theme))) {
		for (const [inkName, inkText] of Object.entries(theme.inks)) {
			const inkLum = luminance(parseColor(inkText));
			let sum = 0;
			let worst = Number.POSITIVE_INFINITY;
			for (let i = 0; i < pixelCount; i++) {
				let pixel = [data[i * info.channels], data[i * info.channels + 1], data[i * info.channels + 2]];
				for (const layer of layers) {
					pixel = over(pixel, layer);
				}
				const ratio = contrast(luminance(pixel), inkLum);
				sum += ratio;
				if (ratio < worst) {
					worst = ratio;
				}
			}
			const mean = sum / pixelCount;
			const ok = worst >= FLOOR;
			if (!ok) {
				failures += 1;
			}
			console.log(
				`  ${ok ? 'OK ' : 'KO '} ${surfaceName} × ${inkName} : moyenne ${mean.toFixed(2)}:1, pire pixel ${worst.toFixed(2)}:1`,
			);
		}
	}
}

console.log(`\nPlancher : ${FLOOR}:1 sur le pire pixel, sans compter le flou des vitres.`);
if (failures > 0) {
	console.log(`${failures} couple(s) sous le plancher.`);
	process.exit(1);
}
