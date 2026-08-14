// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// GitHub Pages : le compte porte un domaine personnalisé (leonfvt.fr), les pages de
	// projet sont donc servies dessous. Le site vit sous /prospect-web/.
	site: 'https://leonfvt.fr',
	base: '/prospect-web',

	// Les URLs de l'ère française du site (avant l'arrivée de l'anglais) qui ont une
	// adresse À ELLES redirigent vers leur page sous /fr/. Les autres slugs de cette
	// époque (instances, mods, faq) sont les mêmes que les slugs anglais actuels : leur
	// URL appartient à la page anglaise, et une entrée ici la maquillerait en
	// redirection (une redirection statique bat la route dynamique de Starlight ; c'est
	// exactement ce qui rendait la FAQ anglaise inaccessible en ligne).
	// Les pages modpacks ont été retirées avec les écrans du launcher (les modpacks
	// reviendront) : leurs deux adresses mènent à la réponse de la FAQ, ancre comprise.
	redirects: {
		'/premiers-pas/': '/prospect-web/fr/getting-started/',
		'/versions/': '/prospect-web/fr/game-versions/',
		'/migration-vslauncher/': '/prospect-web/fr/migrate-from-vs-launcher/',
		'/modpacks/': '/prospect-web/faq/#what-about-modpacks',
		// Le tiret final de l'ancre vient de l'espace française avant « ? » dans le titre.
		'/fr/modpacks/': '/prospect-web/fr/faq/#et-les-modpacks-',
	},

	integrations: [
		starlight({
			title: 'Prospect',
			description: 'The instance launcher for Vintage Story, in the spirit of Prism Launcher.',
			logo: {
				src: './src/assets/logo.svg',
				alt: 'Prospect',
			},
			favicon: '/favicon.png',

			// Anglais à la racine (portée internationale, comme le README du launcher),
			// français complet sous /fr/ : la voix d'origine du produit.
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en' },
				fr: { label: 'Français', lang: 'fr' },
			},

			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Pixnop/Prospect' }],

			customCss: ['./src/styles/fonts.css', './src/styles/custom.css'],

			sidebar: [
				{
					label: 'Start',
					translations: { fr: 'Démarrer' },
					items: [{ label: 'Getting started', translations: { fr: 'Premiers pas' }, slug: 'getting-started' }],
				},
				{
					label: 'Using Prospect',
					translations: { fr: 'Utiliser Prospect' },
					items: [
						{ label: 'Instances', translations: { fr: 'Les instances' }, slug: 'instances' },
						{ label: 'Game versions', translations: { fr: 'Les versions du jeu' }, slug: 'game-versions' },
						{ label: 'Mods', translations: { fr: 'Les mods' }, slug: 'mods' },
					],
				},
				{
					label: 'Migration',
					translations: { fr: 'Migration' },
					items: [
						{
							label: 'Migrate from VS Launcher',
							translations: { fr: 'Migrer depuis VS Launcher' },
							slug: 'migrate-from-vs-launcher',
						},
					],
				},
				{
					label: 'Help',
					translations: { fr: 'Aide' },
					items: [{ label: 'FAQ', translations: { fr: 'FAQ' }, slug: 'faq' }],
				},
			],
		}),
	],
});
