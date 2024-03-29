import { defineConfig } from 'astro/config';

export default defineConfig({
  root: './site',
  srcDir: './site/src',
  publicDir: './site/public',
  site: 'https://onokumus.github.io',
  base: '/elektron/',
  markdown: {
    syntaxHighlight: 'prism'
  }
});
