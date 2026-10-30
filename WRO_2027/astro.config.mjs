// @ts-check
import { defineConfig } from 'astro/config';

// Hosting: GitHub Pages project site at https://honore1234.github.io/WRO_2027/
// Custom domain later: set `site` to the domain, remove `base`, add public/CNAME.
export default defineConfig({
  site: 'https://honore1234.github.io',
  base: '/WRO_2027',
  trailingSlash: 'ignore',
  output: 'static',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
