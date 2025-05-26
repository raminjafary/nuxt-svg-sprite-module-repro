import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/svg-sprite',
  ],

  svgSprite: {
    input: '~/app/sprite/svg',
    output: '~/app/sprite/gen',
  },

  alias: {
    '~/app/sprite/gen': join(__dirname, '/app/sprite/gen'),
    '~/app/sprite/svg': join(__dirname, '/app/sprite/svg'),
  },
  i18n: {
    restructureDir: 'app',
    langDir: 'i18n/locales',
    lazy: true,
    detectBrowserLanguage: false,
    experimental: {
      generatedLocaleFilePathFormat: 'off',
    },
    locales: [
      { code: 'en', language: 'en-US', file: 'en.json', name: 'English' },
      { code: 'ja', language: 'ja-JP', file: 'ja.json', name: 'Japanese' }
    ],
    defaultLocale: 'en',
    trailingSlash: true,
    strategy: 'prefix_except_default',
  },
});
