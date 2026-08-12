# prospect-web

[![site](https://github.com/Pixnop/prospect-web/actions/workflows/site.yml/badge.svg)](https://github.com/Pixnop/prospect-web/actions/workflows/site.yml)
[![Quality gate](https://sonarcloud.io/api/project_badges/measure?project=Pixnop_prospect-site&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Pixnop_prospect-site)

Presentation website and user documentation for
[Prospect](https://github.com/Pixnop/Prospect), a Vintage Story launcher. Built
with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

The site is bilingual: English is the default locale at the root, and the full
French version, the product's original voice, lives under `/fr/`. Doc slugs are
shared across locales, so the language switcher maps pages one to one.

Live site: <https://leonfvt.fr/prospect-web/>

## Development

Requires Node.js 22+ and pnpm.

```sh
pnpm install
pnpm dev        # local dev server
pnpm check      # type-check the project
pnpm build      # production build to ./dist
pnpm preview    # preview the production build
```

## Deployment

`.github/workflows/site.yml` builds every pull request, and additionally deploys
to GitHub Pages on every push to `main`.

## License

Code is licensed under [GPL-3.0](LICENSE), consistent with the main Prospect
repository. Written content (the documentation and the landing page copy) is
licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
