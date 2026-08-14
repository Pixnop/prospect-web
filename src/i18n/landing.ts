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
	/**
	 * Le carnet de prospection : l'inventaire exhaustif, groupé par filons. Chaque
	 * entrée est un relevé d'une ligne, vérifié contre les écrans du launcher ; la
	 * numérotation continue (01, 02, …) est calculée par le composant.
	 */
	notes: {
		eyebrow: string;
		title: string;
		lead: string;
		/** Unité du décompte final : « 51 relevés » / « 51 entries ». */
		tallyUnit: string;
		/** Unité des groupes : « 6 filons » / « 6 veins ». */
		veinUnit: string;
		/** La signature du tampon de bas de carnet. */
		stamp: string;
		veins: { name: string; entries: { term: string; detail: string }[] }[];
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
	notes: {
		eyebrow: 'Field notes',
		title: 'All of it, vein by vein',
		lead: 'The five cards above are the shop window; this is the inventory. Everything the launcher does today, verified screen by screen against the current builds: nothing planned, nothing promised. Six veins, from the everyday down to the quiet details; the total sits at the bottom of the log.',
		tallyUnit: 'entries',
		veinUnit: 'veins',
		stamp: 'nothing else to declare',
		veins: [
			{
				name: 'Instances',
				entries: [
					{
						term: 'One folder per instance.',
						detail: 'Its game version, its mods, its worlds: everything lives together, apart from every other instance.',
					},
					{
						term: 'A four-step wizard.',
						detail: 'Name, version, icon, summary: the folder is created right away, ready for mods and worlds.',
					},
					{
						term: 'Creation installs when it must.',
						detail: 'Pick a version you do not have yet: the wizard states its download size, fetches it and installs it before the instance is created.',
					},
					{
						term: 'Rename, duplicate, delete.',
						detail: 'The copy suggests its own name, deletion counts its files and owns up to anything it could not finish.',
					},
					{
						term: 'Cards that state the essentials.',
						detail: 'Version and channel, last launch, time played, and the update count once a check has found some.',
					},
					{
						term: 'Filter and sort.',
						detail: 'Find an instance by name, sort by last launched or alphabetically.',
					},
					{
						term: 'The Worlds tab.',
						detail: 'Every world in the instance, with its size and its last change.',
					},
					{
						term: 'Options per instance.',
						detail: 'Arguments appended after --dataPath, KEY=value environment variables, mesa_glthread on Linux: applied at the next launch.',
					},
				],
			},
			{
				name: 'Game versions',
				entries: [
					{
						term: 'Side by side.',
						detail: 'Versions install into one shared folder: several instances use the same one without downloading anything twice.',
					},
					{
						term: 'Stable, test, previews.',
						detail: 'The official catalog filtered by channel; test versions stay behind their own switch.',
					},
					{
						term: 'An honest install bar.',
						detail: 'Download, check, install; on Windows the progress is estimated, and labeled as an estimate.',
					},
					{
						term: 'A guard for the Windows installer.',
						detail: 'The game’s own setup sometimes shows an uninstall prompt that nothing can suppress. Prospect installs into its own folder, checks the game truly landed there, and tells you what to answer.',
					},
					{
						term: 'Uninstalling that names names.',
						detail: 'Before a version goes, the list of instances that rely on it.',
					},
					{
						term: 'Broken installs, shown.',
						detail: 'An install cut short or unreadable is listed apart, with its reason.',
					},
					{
						term: 'The catalog, offline.',
						detail: 'When it cannot be reached it says so, and the versions you already installed stay on screen.',
					},
				],
			},
			{
				name: 'Mods',
				entries: [
					{
						term: 'The official ModDB, built in.',
						detail: 'Search, categories, sorting by downloads, last updated, trending or name.',
					},
					{
						term: 'The page as published.',
						detail: 'The author’s description, a one-line summary on top, and their links: source code, issues, wiki, website.',
					},
					{
						term: 'The logo wherever the data exists.',
						detail: 'A mod’s artwork follows it onto every screen that names it.',
					},
					{
						term: 'The exact version, your call.',
						detail: 'Every published release can be picked, with its notes and the game versions its author declares.',
					},
					{
						term: 'Compatibility, labeled.',
						detail: '“Assumed compatibility” when only the series matches, “not declared compatible” otherwise: you install knowing what you are doing.',
					},
					{
						term: 'Dependencies proposed, never imposed.',
						detail: 'The install plan lists what is missing and leaves the decision to you: nothing installs behind your back.',
					},
					{
						term: 'Verdicts that tell things apart.',
						detail: 'Not found on ModDB, no release published for your game version, present but disabled: three cases, three different messages, each with what to do.',
					},
					{
						term: 'Replace and downgrade, cleanly.',
						detail: 'Changing a mod’s version goes through the same plan, which says which one replaces which.',
					},
					{
						term: 'Update checks with a verdict.',
						detail: '“Everything is up to date”, or the exact count, newer releases not declared for your game version included.',
					},
					{
						term: 'Update everything in one move.',
						detail: 'With a closing tally that names whatever failed, if anything did.',
					},
					{
						term: '“Works with”, “expects content from”.',
						detail: 'The Mods tab says what your mods bring each other, and what is missing.',
					},
					{
						term: 'The log read back after the session.',
						detail: 'A mod whose launch wrote errors carries a badge on its row, sample lines included.',
					},
					{
						term: 'Removal that warns.',
						detail: 'Uninstalling names the mods that depend on the one you are removing.',
					},
					{
						term: 'Hand-dropped zips, recognized.',
						detail: 'A mod dropped into the Mods folder is identified, and can be enabled or disabled without removing it; unreadable, it is marked unidentified, with its reason.',
					},
					{
						term: 'Offline without pretending.',
						detail: 'When ModDB is unreachable, the list in memory serves if fresh enough, otherwise the screen admits it is too old; your installed mods keep working.',
					},
				],
			},
			{
				name: 'Trust and diagnostics',
				entries: [
					{
						term: 'Launching that checks first.',
						detail: 'Version installed, .NET required: what is missing is named before the game can fail without a word.',
					},
					{
						term: 'The instance checkup.',
						detail: 'Five local checks (game version, .NET, dependencies, compatibility, disk space), no network call, and every finding comes with its own fix.',
					},
					{
						term: 'Backups per instance.',
						detail: 'A full archive of the data folder, kept outside it, never carried along by a duplicate.',
					},
					{
						term: 'The pre-launch net.',
						detail: 'An automatic backup before every session if you turn it on; a failure never blocks the launch, and says so.',
					},
					{
						term: 'Restoring that covers itself.',
						detail: 'Restore backs up the current state first, then brings worlds, configs and mods back to the chosen date.',
					},
					{
						term: 'The instance log, on board.',
						detail: 'The last launch’s log reads inside the app, even while the game is running.',
					},
					{
						term: 'The Logs page, export included.',
						detail: 'Prospect’s own log re-reads itself while the page is open, and exports as a zip, ready for a bug report.',
					},
					{
						term: 'Downloads in plain sight.',
						detail: 'A history with each line’s outcome (done, failed, canceled), cancelation midway, a smoothed speed readout, and the file checked on arrival whenever upstream publishes a checksum.',
					},
					{
						term: 'Broken states, never hidden.',
						detail: 'An instance that would not load is listed apart with its reason, instead of vanishing.',
					},
				],
			},
			{
				name: 'Customization',
				entries: [
					{
						term: 'Eleven backdrops under glass.',
						detail: 'In-game captures behind the interface’s panes; the change applies on the spot.',
					},
					{
						term: 'Dark, light, or system.',
						detail: 'The theme follows your choice and remembers it.',
					},
					{
						term: 'French and English.',
						detail: 'Deduced from the system on first start, changeable after; each language is written as an original, not traced from the other.',
					},
					{
						term: 'Built-in instance icons.',
						detail: 'Pick from the icons that ship with the app; custom ones will come later, and the app says so rather than leaving you to search.',
					},
					{
						term: 'Simultaneous downloads, adjustable.',
						detail: 'One limit, applying to game versions and mods alike.',
					},
					{
						term: 'The data folder in the open.',
						detail: 'The path is shown, the folder opens in one click; moving it is not possible yet, and that is written down.',
					},
				],
			},
			{
				name: 'At your service',
				entries: [
					{
						term: 'A guided first start.',
						detail: 'A checklist (data folder, one game version, the account if you play multiplayer), replayable from Settings, skippable with one button.',
					},
					{
						term: 'The VS Launcher import, by copy.',
						detail: 'Your folders are copied, never changed or moved: VS Launcher keeps working exactly as before. A line-by-line report at the end.',
					},
					{
						term: 'The account, for multiplayer only.',
						detail: 'The password obtains the session and is then forgotten, Prospect keeps it nowhere; the six-digit code is handled if your account requires one.',
					},
					{
						term: 'Solo without an account.',
						detail: 'Downloading, installing and playing alone never ask you to sign in.',
					},
					{
						term: 'Signing out, for real.',
						detail: 'Your session is erased from this machine; the game launches without multiplayer until you sign in again.',
					},
					{
						term: 'The verdict first.',
						detail: 'Long messages open with the conclusion; dialogs name the instance or the date, never a generic “are you sure?”.',
					},
				],
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
	notes: {
		eyebrow: 'Carnet de prospection',
		title: 'Tout y est, filon par filon',
		lead: 'Les cinq cartes au-dessus sont la vitrine ; voici l’inventaire. Tout ce que le launcher fait aujourd’hui, vérifié écran par écran dans les builds du jour : rien de prévu, rien de promis. Six filons, du plus quotidien au plus discret ; le total est au bas du carnet.',
		tallyUnit: 'relevés',
		veinUnit: 'filons',
		stamp: 'rien d’autre à déclarer',
		veins: [
			{
				name: 'Instances',
				entries: [
					{
						term: 'Un dossier par instance.',
						detail: 'Sa version du jeu, ses mods, ses mondes : tout vit ensemble, à l’écart des autres instances.',
					},
					{
						term: 'L’assistant en quatre étapes.',
						detail: 'Nom, version, icône, résumé : le dossier est créé aussitôt, prêt pour les mods et les mondes.',
					},
					{
						term: 'La création installe s’il le faut.',
						detail: 'Choisis une version absente : l’assistant annonce son poids, la télécharge et l’installe avant de créer l’instance.',
					},
					{
						term: 'Renommer, dupliquer, supprimer.',
						detail: 'La copie propose son nom, la suppression compte ses fichiers et avoue ce qu’elle n’a pas pu finir.',
					},
					{
						term: 'Des cartes qui disent l’essentiel.',
						detail: 'Version et canal, dernier lancement, temps de jeu, et le compte des mises à jour quand une vérification en a trouvé.',
					},
					{
						term: 'Filtre et tri.',
						detail: 'Retrouve une instance par son nom, trie par dernier lancement ou par ordre alphabétique.',
					},
					{
						term: 'L’onglet Mondes.',
						detail: 'Chaque monde de l’instance, avec sa taille et sa dernière modification.',
					},
					{
						term: 'Des options par instance.',
						detail: 'Arguments ajoutés après --dataPath, variables KEY=value, mesa_glthread sous Linux : appliqués au prochain lancement.',
					},
				],
			},
			{
				name: 'Versions du jeu',
				entries: [
					{
						term: 'Côte à côte.',
						detail: 'Les versions s’installent dans un dossier partagé : plusieurs instances utilisent la même sans rien retélécharger.',
					},
					{
						term: 'Stable, test, previews.',
						detail: 'Le catalogue officiel filtré par canal ; les versions de test restent derrière leur interrupteur.',
					},
					{
						term: 'Une barre d’installation franche.',
						detail: 'Téléchargement, vérification, installation ; sous Windows la progression est estimée, et affichée comme telle.',
					},
					{
						term: 'Le garde-fou de l’installeur Windows.',
						detail: 'L’installeur du jeu affiche parfois sa propre fenêtre de désinstallation, que rien ne peut supprimer. Prospect installe dans son dossier, vérifie que le jeu y est vraiment, et te dit quoi répondre.',
					},
					{
						term: 'Une désinstallation qui nomme.',
						detail: 'Avant de retirer une version, la liste des instances qui s’en servent.',
					},
					{
						term: 'Les installations cassées, montrées.',
						detail: 'Une installation interrompue ou illisible est listée à part, avec sa raison.',
					},
					{
						term: 'Le catalogue hors ligne.',
						detail: 'Injoignable, il le dit, et les versions déjà installées restent à l’écran.',
					},
				],
			},
			{
				name: 'Mods',
				entries: [
					{
						term: 'Le ModDB officiel, intégré.',
						detail: 'Recherche, catégories, tri par téléchargements, dernière mise à jour, tendance ou nom.',
					},
					{
						term: 'La fiche telle que publiée.',
						detail: 'La description de l’auteur, un résumé d’une ligne en tête, et ses liens : code source, tickets, wiki, site.',
					},
					{
						term: 'Le logo partout où la donnée existe.',
						detail: 'La vignette d’un mod l’accompagne sur chaque écran qui le nomme.',
					},
					{
						term: 'La version exacte, à toi.',
						detail: 'Chaque version publiée se choisit, avec ses notes et les versions du jeu que l’auteur déclare.',
					},
					{
						term: 'La compatibilité, étiquetée.',
						detail: '« Compatibilité supposée » quand seule la série correspond, « non déclarée compatible » sinon : tu installes en connaissance de cause.',
					},
					{
						term: 'Des dépendances proposées, jamais imposées.',
						detail: 'Le plan d’installation liste ce qui manque et te laisse décider : rien ne s’installe dans ton dos.',
					},
					{
						term: 'Des verdicts qui distinguent.',
						detail: 'Introuvable sur le ModDB, aucune version publiée pour ton jeu, présente mais désactivée : trois cas, trois messages, chacun avec quoi faire.',
					},
					{
						term: 'Remplacer et rétrograder, proprement.',
						detail: 'Changer la version d’un mod passe par le même plan, qui dit laquelle remplace laquelle.',
					},
					{
						term: 'Des mises à jour à verdict.',
						detail: '« Tout est à jour », ou le compte exact, versions plus récentes non déclarées pour ton jeu comprises.',
					},
					{
						term: 'Tout mettre à jour d’un geste.',
						detail: 'Avec un bilan final qui nomme ce qui a échoué, s’il le faut.',
					},
					{
						term: '« Fonctionne avec », « attend du contenu de ».',
						detail: 'L’onglet Mods dit ce que tes mods s’apportent les uns aux autres, et ce qui manque.',
					},
					{
						term: 'Le journal relu après la partie.',
						detail: 'Un mod dont le lancement a écrit des erreurs porte un badge sur sa ligne, exemples à l’appui.',
					},
					{
						term: 'Un retrait qui prévient.',
						detail: 'La désinstallation nomme les mods qui dépendent de celui que tu retires.',
					},
					{
						term: 'Les zips déposés à la main, reconnus.',
						detail: 'Un mod glissé dans le dossier Mods est identifié, activable et désactivable sans le supprimer ; illisible, il est marqué non identifié, avec sa raison.',
					},
					{
						term: 'Hors ligne, sans faire semblant.',
						detail: 'ModDB injoignable : la liste en mémoire sert si elle est assez fraîche, sinon l’écran avoue qu’elle est trop vieille ; tes mods installés fonctionnent toujours.',
					},
				],
			},
			{
				name: 'Confiance et diagnostics',
				entries: [
					{
						term: 'Un lancement qui vérifie d’abord.',
						detail: 'Version installée, .NET requis : ce qui manque est nommé avant que le jeu n’échoue sans un mot.',
					},
					{
						term: 'Le diagnostic d’instance.',
						detail: 'Cinq contrôles locaux (version du jeu, .NET, dépendances, compatibilité, espace disque), aucun appel réseau, et chaque constat vient avec son geste.',
					},
					{
						term: 'Des sauvegardes par instance.',
						detail: 'Une archive complète du dossier de données, gardée hors de lui, jamais embarquée dans une duplication.',
					},
					{
						term: 'Le filet d’avant-lancement.',
						detail: 'Une sauvegarde automatique avant chaque partie si tu l’actives ; un échec ne bloque jamais le lancement, et te le dit.',
					},
					{
						term: 'Une restauration qui assure ses arrières.',
						detail: 'Restaurer sauvegarde d’abord l’état courant, puis ramène mondes, configs et mods à la date choisie.',
					},
					{
						term: 'Le journal de l’instance, à bord.',
						detail: 'Le log du dernier lancement se lit dans l’app, même pendant que le jeu tourne.',
					},
					{
						term: 'La page Journaux, export compris.',
						detail: 'Le journal de Prospect se relit tant que la page est ouverte, et s’exporte en zip, prêt pour un rapport de bogue.',
					},
					{
						term: 'Les téléchargements sous les yeux.',
						detail: 'Un historique avec l’issue de chaque ligne (terminé, échoué, annulé), l’annulation en route, un débit lissé, et le fichier vérifié à l’arrivée quand l’amont publie son empreinte.',
					},
					{
						term: 'Les états cassés, jamais masqués.',
						detail: 'Une instance qui ne charge pas est listée à part avec sa raison, plutôt que de disparaître.',
					},
				],
			},
			{
				name: 'Personnalisation',
				entries: [
					{
						term: 'Onze fonds sous verre.',
						detail: 'Des captures du jeu derrière les vitres de l’interface ; le changement s’applique à chaud.',
					},
					{
						term: 'Sombre, clair, ou système.',
						detail: 'Le thème suit ton choix et s’en souvient.',
					},
					{
						term: 'Français et anglais.',
						detail: 'Déduit du système au premier démarrage, changeable ensuite ; chaque langue est écrite comme un original, pas décalquée sur l’autre.',
					},
					{
						term: 'Des icônes d’instance livrées.',
						detail: 'Choisis parmi les icônes intégrées ; les personnalisées viendront plus tard, et l’app le dit plutôt que de te laisser chercher.',
					},
					{
						term: 'Les téléchargements simultanés, réglables.',
						detail: 'Une seule limite, valable pour les versions du jeu comme pour les mods.',
					},
					{
						term: 'Le dossier de données à découvert.',
						detail: 'Le chemin est affiché, le dossier s’ouvre d’un clic ; le déplacer n’est pas encore possible, et c’est écrit.',
					},
				],
			},
			{
				name: 'Pour te servir',
				entries: [
					{
						term: 'Un premier démarrage accompagné.',
						detail: 'Une liste de contrôle (dossier de données, une version du jeu, le compte si multijoueur), rejouable depuis les réglages, ignorable d’un bouton.',
					},
					{
						term: 'L’import VS Launcher, par copie.',
						detail: 'Tes dossiers sont copiés, jamais modifiés ni déplacés : VS Launcher continue de fonctionner comme avant. Bilan ligne à ligne à la fin.',
					},
					{
						term: 'Le compte, pour le multijoueur seulement.',
						detail: 'Le mot de passe obtient la session puis est oublié, Prospect ne le garde nulle part ; le code à six chiffres est géré si ton compte l’exige.',
					},
					{
						term: 'Jouer solo sans compte.',
						detail: 'Télécharger, installer et jouer seul ne demandent jamais de se connecter.',
					},
					{
						term: 'Se déconnecter, pour de vrai.',
						detail: 'Ta session est effacée de la machine ; le jeu repart sans multijoueur jusqu’à la prochaine connexion.',
					},
					{
						term: 'Le verdict d’abord.',
						detail: 'Les messages longs commencent par la conclusion ; les dialogues nomment l’instance ou la date, jamais un « êtes-vous sûr ? » générique.',
					},
				],
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
