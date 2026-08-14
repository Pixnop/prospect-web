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
	nav: { docs: string; github: string; theme: string };
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
		items: { icon: 'layers' | 'hardDrive' | 'play' | 'package' | 'activity'; title: string; text: string }[];
	};
	gallery: {
		eyebrow: string;
		title: string;
		lead: string;
		zoom: string;
		close: string;
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
	nav: { docs: 'Documentation', github: 'GitHub', theme: 'Switch between light and dark theme' },
	hero: {
		eyebrow: 'For Vintage Story',
		tagline:
			'The launcher that digs in the right place: one instance per world, game versions side by side, the official ModDB built in. In the spirit of Prism Launcher.',
		github: 'View on GitHub',
		docs: 'Read the docs',
		status: 'Developed in the open · pre-release available',
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
				text: 'Prospect knows which .NET each game version needs and names what is missing before launch, instead of letting the game fail cryptically. After a session, it reads the launch log back: a mod that failed is flagged by name.',
			},
			{
				icon: 'package',
				title: 'The ModDB, dependencies included',
				text: 'Search the official ModDB, read a mod’s page as its author wrote it, and pick the exact version you install. The Mods tab then says what mods expect of each other: “works with Carry On”, or “expects content from” a mod that is missing. When a mod needs another one, Prospect proposes it, and never installs anything behind your back.',
			},
			{
				icon: 'activity',
				title: 'The instance checkup',
				text: 'One click reads what is already on your disk: game version complete, .NET present, every mod dependency satisfied. No network call, and each finding carries its own fix.',
			},
		],
	},
	gallery: {
		eyebrow: 'On screen',
		title: 'The interface',
		lead: 'Eight screens from today’s builds, in both themes. The ModDB screens show the real catalog, not a mock-up. The glass is mined from the same vein as the game (copper, stone, linen) and sits on a backdrop you pick from eleven in-game captures. The interface speaks English and French; each page of this site shows its own.',
		zoom: 'View full size:',
		close: 'Close',
		items: [
			{
				src: 'accueil.png',
				caption: 'Home: the instance grid',
				alt: 'Home screen: the instance grid with version badges, search, and the Play button',
			},
			{
				src: 'instance-mods.png',
				caption: 'An instance, Mods tab (what works with what)',
				alt: 'Instance page on its Mods tab: three real ModDB mods, Primitive Survival badged “works with Carry On” and Expanded Matter badged “expects content from purposefulstorage”, next to the Worlds, Log and Options tabs',
			},
			{
				src: 'navigateur-moddb.png',
				caption: 'The mod browser (ModDB)',
				alt: 'Mod browser: the official ModDB in a fluid card grid, one-line summaries and per-instance compatibility badges',
			},
			{
				src: 'fiche-mod.png',
				caption: 'A mod’s page (Carry On)',
				alt: 'Carry On’s ModDB page inside Prospect: the author’s description with its headings and images, the one-line summary at the top',
			},
			{
				src: 'versions.png',
				caption: 'Game versions',
				alt: 'Versions screen: installed and available game versions, with the test versions toggle',
			},
			{
				src: 'wizard-instance.png',
				caption: 'The new instance wizard',
				alt: 'New instance wizard: naming the instance, first step of four',
			},
			{
				src: 'docteur.png',
				caption: 'The instance checkup',
				alt: 'Instance checkup dialog: each finding named with its own fix, here a game version to install and a missing mod dependency',
			},
			{
				src: 'reglages-fonds.png',
				caption: 'Settings: pick your backdrop',
				alt: 'General settings: the grid of eleven in-game backdrops, the selected one highlighted',
			},
		],
	},
	download: {
		badge: 'Pre-release',
		title: 'Download',
		body: 'The first pre-release is out: a Linux archive (tar.gz, with a ready-to-run Prospect binary) and a Windows archive (zip), with SHA-256 sums alongside. The Windows binary is not code-signed yet, so SmartScreen will call it an unknown publisher: choose "More info", then "Run anyway". Building from source remains an option.',
		github: 'Download the pre-release',
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
	nav: { docs: 'Documentation', github: 'GitHub', theme: 'Basculer entre thème clair et sombre' },
	hero: {
		eyebrow: 'Pour Vintage Story',
		tagline:
			'Le launcher qui creuse au bon endroit : une instance par monde, les versions du jeu côte à côte, le ModDB officiel intégré. Dans l’esprit de Prism Launcher.',
		github: 'Voir sur GitHub',
		docs: 'Lire la documentation',
		status: 'Développé à ciel ouvert · pré-release disponible',
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
				text: 'Prospect sait quel .NET chaque version du jeu exige et te nomme ce qui manque avant de lancer, plutôt que de laisser le jeu échouer sans explication. Après la partie, il relit le journal de lancement : un mod qui a échoué est signalé par son nom.',
			},
			{
				icon: 'package',
				title: 'Le ModDB, dépendances comprises',
				text: 'Cherche sur le ModDB officiel, lis la fiche d’un mod telle que son auteur l’a écrite, et choisis la version exacte que tu installes. L’onglet Mods dit ensuite ce que les mods attendent les uns des autres : « fonctionne avec Carry On », ou « attend du contenu de » un mod absent. Quand un mod en réclame un autre, Prospect le propose, et n’installe jamais rien dans ton dos.',
			},
			{
				icon: 'activity',
				title: 'Le diagnostic d’instance',
				text: 'Un clic lit ce qui est déjà sur ton disque : version du jeu complète, .NET présent, dépendances des mods satisfaites. Aucun appel réseau, et chaque constat vient avec son geste de réparation.',
			},
		],
	},
	gallery: {
		eyebrow: 'En images',
		title: 'L’interface',
		lead: 'Huit écrans des builds du jour, dans les deux thèmes. Les écrans ModDB montrent le vrai catalogue, pas une maquette. Le verre sort du même filon que le jeu (cuivre, pierre, lin) et repose sur un fond d’écran à choisir parmi onze captures du jeu. L’interface parle français et anglais ; chaque page de ce site montre la sienne.',
		zoom: 'Voir en grand :',
		close: 'Fermer',
		items: [
			{
				src: 'accueil.png',
				caption: 'L’accueil : la grille d’instances',
				alt: 'Écran d’accueil : la grille d’instances avec badges de version, recherche et bouton Jouer',
			},
			{
				src: 'instance-mods.png',
				caption: 'Une instance, onglet Mods (qui fonctionne avec qui)',
				alt: 'Page d’instance, onglet Mods : trois vrais mods du ModDB, Primitive Survival portant la pastille « fonctionne avec Carry On » et Expanded Matter la pastille « attend du contenu de purposefulstorage », à côté des onglets Mondes, Journal et Options',
			},
			{
				src: 'navigateur-moddb.png',
				caption: 'Le navigateur de mods (ModDB)',
				alt: 'Navigateur de mods : le ModDB officiel en grille fluide, résumés d’une ligne et badges de compatibilité par instance',
			},
			{
				src: 'fiche-mod.png',
				caption: 'La fiche d’un mod (Carry On)',
				alt: 'Fiche ModDB de Carry On dans Prospect : la description de l’auteur avec ses titres et ses images, le résumé d’une ligne en tête',
			},
			{
				src: 'versions.png',
				caption: 'Les versions du jeu',
				alt: 'Écran Versions : versions du jeu installées et disponibles, avec l’interrupteur des versions de test',
			},
			{
				src: 'wizard-instance.png',
				caption: 'L’assistant de création',
				alt: 'Assistant de création d’instance : saisie du nom, première étape sur quatre',
			},
			{
				src: 'docteur.png',
				caption: 'Le diagnostic d’instance',
				alt: 'Dialogue de diagnostic : chaque constat nommé avec son geste de réparation, ici une version du jeu à installer et une dépendance de mod manquante',
			},
			{
				src: 'reglages-fonds.png',
				caption: 'Réglages : le choix du fond',
				alt: 'Réglages Général : la grille des onze fonds tirés du jeu, la vignette choisie mise en avant',
			},
		],
	},
	download: {
		badge: 'Pré-release',
		title: 'Télécharger',
		body: 'La première pré-release est en ligne : une archive Linux (tar.gz, binaire Prospect prêt à lancer) et une archive Windows (zip), sommes SHA-256 fournies à côté. Le binaire Windows n’est pas encore signé : SmartScreen parlera d’un éditeur inconnu, passe par « Informations complémentaires » puis « Exécuter quand même ». Compiler depuis les sources reste possible.',
		github: 'Télécharger la pré-release',
		build: 'Compiler depuis les sources',
	},
	footer: {
		license: 'Prospect est un logiciel libre sous licence',
		licenseLinkLabel: 'GPL-3.0',
		docs: 'Documentation',
		moddb: 'ModDB officiel',
	},
};
