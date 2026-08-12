// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// GitHub Pages, dépôt de projet, servi sous le domaine personnalisé du compte
	// (leonfvt.fr, configuré côté GitHub Pages au niveau du compte) : le site vit
	// sous /prospect-web/.
	site: 'https://leonfvt.fr',
	base: '/prospect-web',

	integrations: [
		starlight({
			title: 'Prospect',
			description: 'Le launcher d’instances pour Vintage Story, inspiré de Prism Launcher.',
			logo: {
				src: './src/assets/logo.svg',
				alt: 'Prospect',
			},
			favicon: '/favicon.png',

			// Français à la racine dès aujourd'hui. Pour ajouter l'anglais plus tard :
			// déclarer `en: { label: 'English', lang: 'en' }` ci-dessous et créer les
			// pages correspondantes sous src/content/docs/en/ (même structure de
			// fichiers que la racine française).
			defaultLocale: 'root',
			locales: {
				root: { label: 'Français', lang: 'fr' },
			},

			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Pixnop/Prospect' }],

			customCss: ['./src/styles/fonts.css', './src/styles/custom.css'],

			sidebar: [
				{
					label: 'Démarrer',
					items: [{ label: 'Premiers pas', slug: 'premiers-pas' }],
				},
				{
					label: 'Utiliser Prospect',
					items: [
						{ label: 'Les instances', slug: 'instances' },
						{ label: 'Les versions du jeu', slug: 'versions' },
						{ label: 'Les mods', slug: 'mods' },
						{ label: 'Les modpacks', slug: 'modpacks' },
					],
				},
				{
					label: 'Migration',
					items: [{ label: 'Migrer depuis VS Launcher', slug: 'migration-vslauncher' }],
				},
				{
					label: 'Aide',
					items: [{ label: 'FAQ', slug: 'faq' }],
				},
			],
		}),
	],
});
