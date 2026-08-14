// Vérification du build : chaque chemin interne du dist/ doit mener quelque part.
//
// Quatre garanties, mesurées sur les fichiers du dist/ (jamais sur une impression) :
//   1. tout lien interne (href, src, srcset, meta refresh, url() des CSS) résout vers
//      un fichier du dist/, ancre comprise quand il en porte une ;
//   2. aucune RESSOURCE ne vient d'un autre domaine : scripts, styles, images,
//      icônes, préchargements. Les <a> vers GitHub ou le ModDB restent des liens de
//      navigation, pas des requêtes, et les <link rel="alternate|canonical"> sont des
//      métadonnées ;
//   3. chaque page a sa jumelle dans l'autre langue (le sélecteur de langue ne peut
//      pas tomber dans le vide) ;
//   4. les pages de redirection comptent comme les autres : leur cible est vérifiée,
//      ancre comprise.
//
// Aucune dépendance : le script lit le dist/ et sort en erreur au premier manquement
// (code 1), avec la liste complète de ce qui ne va pas.

import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, relative, posix } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const BASE = '/prospect-web/';

if (!existsSync(DIST)) {
	console.error(`dist/ introuvable (${DIST}) : lancer « pnpm build » d'abord.`);
	process.exit(1);
}

/** Tous les fichiers sous dist/, chemins relatifs en séparateurs POSIX. */
function walk(dir) {
	const out = [];
	for (const entry of readdirSync(dir)) {
		const full = join(dir, entry);
		if (statSync(full).isDirectory()) {
			out.push(...walk(full));
		} else {
			out.push(posix.join(...relative(DIST, full).split('/')));
		}
	}
	return out;
}

const files = new Set(walk(DIST));
const htmlFiles = [...files].filter((f) => f.endsWith('.html'));
const cssFiles = [...files].filter((f) => f.endsWith('.css'));

const errors = [];
let linksChecked = 0;
let anchorsChecked = 0;

/** Les id d'un document HTML (cibles d'ancres), mémorisés par fichier. */
const idsByFile = new Map();
function idsOf(file) {
	if (!idsByFile.has(file)) {
		const html = readFileSync(join(DIST, file), 'utf8');
		const ids = new Set();
		for (const m of html.matchAll(/\sid=["']([^"']+)["']/g)) {
			ids.add(m[1]);
		}
		idsByFile.set(file, ids);
	}
	return idsByFile.get(file);
}

/** Résout une URL interne vers un fichier du dist/, ou explique pourquoi elle échoue. */
function checkInternal(url, fromFile, what) {
	linksChecked += 1;
	const fromPath = '/' + fromFile;
	let resolved;
	try {
		resolved = new URL(url, `https://site${BASE}${fromPath.replace(/^\//, '')}`);
	} catch {
		errors.push(`${fromFile} : ${what} illisible « ${url} »`);
		return;
	}
	const path = decodeURIComponent(resolved.pathname);
	if (!path.startsWith(BASE)) {
		errors.push(`${fromFile} : ${what} « ${url} » sort de la base ${BASE} (il finirait en 404 sur Pages)`);
		return;
	}
	const rel = path.slice(BASE.length);
	// La page 404 n'a pas d'adresse propre : GitHub Pages la sert pour tout chemin
	// inconnu, donc ses liens vers « 404/ » (générés par Starlight, sélecteur de
	// langue compris) répondent bien... par elle-même.
	if (rel === '404/' || rel === 'fr/404/' || rel === '404.html') {
		if (!files.has('404.html')) {
			errors.push(`${fromFile} : ${what} « ${url} » vise la page 404, absente du dist/`);
		}
		return;
	}
	let target;
	if (rel === '' || rel.endsWith('/')) {
		target = rel + 'index.html';
	} else if (files.has(rel)) {
		target = rel;
	} else if (files.has(rel + '/index.html')) {
		// Adresse de page sans slash final : GitHub Pages redirige, on l'accepte.
		target = rel + '/index.html';
	} else {
		errors.push(`${fromFile} : ${what} « ${url} » ne correspond à aucun fichier du dist/`);
		return;
	}
	if (!files.has(target)) {
		errors.push(`${fromFile} : ${what} « ${url} » ne correspond à aucun fichier du dist/`);
		return;
	}
	const fragment = decodeURIComponent(resolved.hash.replace(/^#/, ''));
	if (fragment && target.endsWith('.html')) {
		anchorsChecked += 1;
		if (!idsOf(target).has(fragment)) {
			errors.push(`${fromFile} : ${what} « ${url} » vise l'ancre #${fragment}, absente de ${target}`);
		}
	}
}

const isExternal = (url) => /^(https?:)?\/\//i.test(url) || /^[a-z][a-z0-9+.-]*:/i.test(url);

/** Les URLs d'un srcset (avant chaque descripteur de taille). */
function srcsetUrls(value) {
	return value
		.split(',')
		.map((part) => part.trim().split(/\s+/)[0])
		.filter(Boolean);
}

/* ── Pages HTML ─────────────────────────────────────────────────────────── */

// rel qui déclenchent une requête ; alternate, canonical et compagnie ne sont que
// des métadonnées et ont le droit de viser l'extérieur.
const FETCHING_REL = /stylesheet|icon|preload|modulepreload|prefetch|manifest|apple-touch-icon/i;

for (const file of htmlFiles) {
	const html = readFileSync(join(DIST, file), 'utf8');

	for (const tagMatch of html.matchAll(/<(a|link|script|img|source|iframe|video|audio|object|embed|form)\b[^>]*>/gi)) {
		const [tag, name] = [tagMatch[0], tagMatch[1].toLowerCase()];
		const attr = (n) => tag.match(new RegExp(`\\s${n}=["']([^"']*)["']`, 'i'))?.[1];

		if (name === 'a') {
			const href = attr('href');
			if (href && !isExternal(href)) checkInternal(href, file, 'lien');
			continue;
		}
		if (name === 'link') {
			const href = attr('href');
			const rel = attr('rel') ?? '';
			if (!href) continue;
			if (FETCHING_REL.test(rel)) {
				if (isExternal(href)) {
					errors.push(`${file} : ressource externe <link rel="${rel}"> vers « ${href} »`);
				} else {
					checkInternal(href, file, `<link rel="${rel}">`);
				}
			}
			continue;
		}
		if (name === 'form') {
			const action = attr('action');
			if (action && isExternal(action)) {
				errors.push(`${file} : formulaire vers l'extérieur « ${action} »`);
			}
			continue;
		}
		// Tout le reste charge une ressource : src, srcset, poster, data.
		for (const attrName of ['src', 'poster', 'data']) {
			const value = attr(attrName);
			if (!value || value.startsWith('data:')) continue;
			if (isExternal(value)) {
				errors.push(`${file} : ressource externe <${name} ${attrName}> vers « ${value} »`);
			} else {
				checkInternal(value, file, `<${name} ${attrName}>`);
			}
		}
		const srcset = attr('srcset');
		if (srcset) {
			for (const url of srcsetUrls(srcset)) {
				if (isExternal(url)) {
					errors.push(`${file} : ressource externe dans un srcset « ${url} »`);
				} else {
					checkInternal(url, file, 'srcset');
				}
			}
		}
	}

	// Le sélecteur de langue est un <select> : ses <option> portent les URLs jumelles.
	for (const m of html.matchAll(/<option\b[^>]*\svalue=["'](\/[^"']*)["']/gi)) {
		checkInternal(m[1], file, 'option du sélecteur de langue');
	}

	// Redirections : la cible du meta refresh se vérifie comme un lien.
	for (const m of html.matchAll(/http-equiv=["']refresh["'][^>]*content=["'][^"']*url=([^"']+)["']/gi)) {
		checkInternal(m[1], file, 'redirection');
	}
}

/* ── CSS : url() et @import ─────────────────────────────────────────────── */

for (const file of cssFiles) {
	const css = readFileSync(join(DIST, file), 'utf8');
	const refs = [
		...[...css.matchAll(/url\(\s*(?:"([^"]+)"|'([^']+)'|([^)'"\s]+))\s*\)/g)].map((m) => m[1] ?? m[2] ?? m[3]),
		...[...css.matchAll(/@import\s+["']([^"']+)["']/g)].map((m) => m[1]),
	];
	for (const ref of refs) {
		if (!ref || ref.startsWith('data:') || ref.startsWith('#')) continue;
		if (isExternal(ref)) {
			errors.push(`${file} : ressource externe en CSS « ${ref} »`);
		} else {
			checkInternal(ref, file, 'url() CSS');
		}
	}
}

/* ── Jumelles de langue ─────────────────────────────────────────────────── */

// La jumelle doit être une vraie page : un fichier de redirection au même chemin
// signifierait qu'une entrée `redirects` maquille la page de l'autre langue.
const isRedirect = (file) => /http-equiv=["']refresh["']/i.test(readFileSync(join(DIST, file), 'utf8'));
const pages = htmlFiles.filter((f) => f.endsWith('index.html') && !isRedirect(f));
const pageSet = new Set(pages);
for (const page of pages) {
	const twin = page.startsWith('fr/') ? page.slice('fr/'.length) : 'fr/' + page;
	if (!pageSet.has(twin)) {
		errors.push(`${page} : pas de jumelle de langue (${twin} absent du dist/ ou réduit à une redirection)`);
	}
}

/* ── Verdict ────────────────────────────────────────────────────────────── */

if (errors.length > 0) {
	console.error(`${errors.length} manquement(s) :\n`);
	for (const error of errors) console.error(`  ${error}`);
	process.exit(1);
}
console.log(
	`Liens du dist/ vérifiés : ${htmlFiles.length} pages HTML, ${cssFiles.length} CSS, ` +
		`${linksChecked} liens internes (${anchorsChecked} ancres), ${pages.length} pages appariées ` +
		`dans les deux langues, aucune ressource externe.`,
);
