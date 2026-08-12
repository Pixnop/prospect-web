// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// GitHub Pages : le compte porte un domaine personnalisé (leonfvt.fr), les pages de
	// projet sont donc servies dessous. Le site vit sous /prospect-web/.
	site: 'https://leonfvt.fr',
	base: '/prospect-web',

	// Les sept URLs françaises publiées avant l'arrivée de l'anglais redirigent vers
	// leur nouvelle adresse sous /fr/ (slugs anglais, identiques dans les deux langues).
	redirects: {
		'/premiers-pas/': '/prospect-web/fr/getting-started/',
		'/instances/': '/prospect-web/fr/instances/',
		'/versions/': '/prospect-web/fr/game-versions/',
		'/mods/': '/prospect-web/fr/mods/',
		'/modpacks/': '/prospect-web/fr/modpacks/',
		'/migration-vslauncher/': '/prospect-web/fr/migrate-from-vs-launcher/',
		'/faq/': '/prospect-web/fr/faq/',
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
						{ label: 'Modpacks', translations: { fr: 'Les modpacks' }, slug: 'modpacks' },
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
