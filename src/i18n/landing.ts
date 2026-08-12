// Chaînes des deux landings. Une seule structure, deux voix : le français est la voix
// d'origine du produit (tutoiement, verbes, registre minier sobre), l'anglais est écrit
// comme un original, pas comme une traduction.

export interface LandingStrings {
	lang: 'en' | 'fr';
	/** Préfixe des liens de doc pour cette locale, slash final compris. */
	docsPrefix: string;
	/** Chemin de la landing jumelle, pour le sélecteur de langue. */
	twinPath: string;
	twinLabel: string;
	title: string;
	description: string;
	nav: { docs: string; github: string };
	hero: {
		eyebrow: string;
		tagline: string;
		github: string;
		docs: string;
		status: string;
	};
	features: {
		eyebrow: string;
		title: string;
		lead: string;
		items: { icon: 'layers' | 'hardDrive' | 'play' | 'package' | 'upload'; title: string; text: string }[];
	};
	gallery: {
		eyebrow: string;
		title: string;
		lead: string;
		items: { src: string; caption: string; alt: string }[];
	};
	download: {
		badge: string;
		title: string;
		body: string;
		github: string;
		build: string;
	};
	footer: {
		license: string;
		licenseLinkLabel: string;
		docs: string;
		moddb: string;
	};
}

export const en: LandingStrings = {
	lang: 'en',
	docsPrefix: '',
	twinPath: 'fr/',
	twinLabel: 'Français',
	title: 'Prospect: the instance launcher for Vintage Story',
	description:
		'Prospect keeps every Vintage Story world in its own instance, installs game versions side by side, and builds the official ModDB right in. In the spirit of Prism Launcher.',
	nav: { docs: 'Documentation', github: 'GitHub' },
	hero: {
		eyebrow: 'For Vintage Story',
		tagline:
			'The launcher that digs in the right place: one instance per world, game versions side by side, the official ModDB built in. In the spirit of Prism Launcher.',
		github: 'View on GitHub',
		docs: 'Read the docs',
		status: 'Developed in the open · no release yet',
	},
	features: {
		eyebrow: 'Features',
		title: 'What Prospect already does',
		lead: 'Five foundations, laid stratum by stratum, to replace the archived VS Launcher without inheriting its gaps.',
		items: [
			{
				icon: 'layers',
				title: 'Isolated instances',
				text: 'Each instance owns its game version, its mods and its worlds, in its own folder. A stable survival world and an unstable test bench never step on each other.',
			},
			{
				icon: 'hardDrive',
				title: 'Versions side by side',
				text: 'Vintage Story versions install independently, stable or unstable. Several instances can share one installed version without downloading anything twice.',
			},
			{
				icon: 'play',
				title: 'Launching that checks first',
				text: 'Prospect reads the .NET runtime each game version actually requires and tells you exactly what is missing before launch, instead of letting the game fail cryptically.',
			},
			{
				icon: 'package',
				title: 'The ModDB, dependencies included',
				text: 'Search, install and update mods straight from the official ModDB. When a mod needs another one, Prospect proposes it, and never installs anything behind your back.',
			},
			{
				icon: 'upload',
				title: 'Portable modpacks',
				text: 'Export an instance as a modpack: game version, mods, and whether each one is enabled. Share it, or import it back into a fresh instance anywhere.',
			},
		],
	},
	gallery: {
		eyebrow: 'On screen',
		title: 'The interface',
		lead: 'Five screens, captured from the current working builds. The theme is mined from the same vein as the game: copper, stone, linen.',
		items: [
			{
				src: 'accueil.png',
				caption: 'Home: the instance grid',
				alt: 'Home screen: the instance grid with version badges, search, and the Play button',
			},
			{
				src: 'instance-mods.png',
				caption: 'An instance, Mods tab',
				alt: 'Instance page, Mods tab: installed mods with enable toggles and update actions',
			},
			{
				src: 'navigateur-moddb.png',
				caption: 'The mod browser (ModDB)',
				alt: 'Mod browser: official ModDB search with per-instance compatibility badges',
			},
			{
				src: 'versions.png',
				caption: 'Game versions',
				alt: 'Versions screen: installed and available game versions, by channel',
			},
			{
				src: 'wizard-instance.png',
				caption: 'The new instance wizard',
				alt: 'New instance wizard: naming the instance, first step of four',
			},
		],
	},
	download: {
		badge: 'Early development',
		title: 'Download',
		body: 'There is no Prospect release yet: no installer, no ready-to-run build. The project is developed in the open (the screenshots above come from its current working builds), and until a first release the way to run Prospect is to build it from source, in a few commands.',
		github: 'View on GitHub',
		build: 'Build from source',
	},
	footer: {
		license: 'Prospect is free software under the',
		licenseLinkLabel: 'GPL-3.0 license',
		docs: 'Documentation',
		moddb: 'Official ModDB',
	},
};

export const fr: LandingStrings = {
	lang: 'fr',
	docsPrefix: 'fr/',
	twinPath: '',
	twinLabel: 'English',
	title: 'Prospect : le launcher d’instances pour Vintage Story',
	description:
		'Prospect isole chaque monde Vintage Story dans son instance, installe les versions du jeu côte à côte et intègre le ModDB officiel. Dans l’esprit de Prism Launcher.',
	nav: { docs: 'Documentation', github: 'GitHub' },
	hero: {
		eyebrow: 'Pour Vintage Story',
		tagline:
			'Le launcher qui creuse au bon endroit : une instance par monde, les versions du jeu côte à côte, le ModDB officiel intégré. Dans l’esprit de Prism Launcher.',
		github: 'Voir sur GitHub',
		docs: 'Lire la documentation',
		status: 'Développé à ciel ouvert · pas encore de version publiée',
	},
	features: {
		eyebrow: 'Fonctionnalités',
		title: 'Ce que Prospect fait déjà',
		lead: 'Cinq fondations, posées strate par strate, pour remplacer VS Launcher, archivé, sans hériter de ses manques.',
		items: [
			{
				icon: 'layers',
				title: 'Instances isolées',
				text: 'Chaque instance possède sa version du jeu, ses mods et ses mondes, dans son propre dossier. Un monde de survie en stable et un banc d’essai en unstable ne se marchent jamais dessus.',
			},
			{
				icon: 'hardDrive',
				title: 'Versions côte à côte',
				text: 'Les versions de Vintage Story s’installent indépendamment, stable ou unstable. Plusieurs instances partagent une même version installée sans jamais rien retélécharger.',
			},
			{
				icon: 'play',
				title: 'Un lancement qui vérifie d’abord',
				text: 'Prospect lit le runtime .NET que chaque version du jeu exige réellement et te dit exactement ce qui manque avant de lancer, plutôt que de laisser le jeu échouer sans explication.',
			},
			{
				icon: 'package',
				title: 'Le ModDB, dépendances comprises',
				text: 'Cherche, installe et mets à jour tes mods depuis le ModDB officiel. Quand un mod en réclame un autre, Prospect le propose, et n’installe jamais rien dans ton dos.',
			},
			{
				icon: 'upload',
				title: 'Modpacks portables',
				text: 'Exporte une instance en modpack : version du jeu, mods, et l’état activé ou non de chacun. Partage-le, ou réimporte-le ailleurs dans une instance neuve.',
			},
		],
	},
	gallery: {
		eyebrow: 'En images',
		title: 'L’interface',
		lead: 'Cinq écrans, capturés sur les builds de travail. Le thème sort du même filon que le jeu : cuivre, pierre, lin.',
		items: [
			{
				src: 'accueil.png',
				caption: 'L’accueil : la grille d’instances',
				alt: 'Écran d’accueil : la grille d’instances avec badges de version, recherche et bouton Jouer',
			},
			{
				src: 'instance-mods.png',
				caption: 'Une instance, onglet Mods',
				alt: 'Page d’instance, onglet Mods : mods installés, interrupteurs d’activation et mises à jour',
			},
			{
				src: 'navigateur-moddb.png',
				caption: 'Le navigateur de mods (ModDB)',
				alt: 'Navigateur de mods : recherche sur le ModDB officiel avec badges de compatibilité par instance',
			},
			{
				src: 'versions.png',
				caption: 'Les versions du jeu',
				alt: 'Écran Versions : versions du jeu installées et disponibles, par canal',
			},
			{
				src: 'wizard-instance.png',
				caption: 'L’assistant de création',
				alt: 'Assistant de création d’instance : saisie du nom, première étape sur quatre',
			},
		],
	},
	download: {
		badge: 'Développement précoce',
		title: 'Télécharger',
		body: 'Il n’y a pas encore de version de Prospect à télécharger : ni installeur, ni build prêt à l’emploi. Le projet avance à ciel ouvert (les captures ci-dessus viennent de ses builds de travail), et en attendant une première version, la façon de lancer Prospect est de le compiler depuis les sources, en quelques commandes.',
		github: 'Voir sur GitHub',
		build: 'Compiler depuis les sources',
	},
	footer: {
		license: 'Prospect est un logiciel libre sous licence',
		licenseLinkLabel: 'GPL-3.0',
		docs: 'Documentation',
		moddb: 'ModDB officiel',
	},
};
