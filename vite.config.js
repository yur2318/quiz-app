import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import { mainData } from './src/data/mainData';
import { SOCIAL_MENU } from './src/data/menuData/socialMenu'; // SOCIAL_MENUをインポート
import { BASIC_SOCIAL } from './src/data/menuData/socialMenu'; // BASIC_LISTをインポート
import { JAPANESE_MENU } from './src/data/menuData/japaneseMenu';
import { BASIC_JAPANESE } from './src/data/menuData/japaneseMenu'; // BASIC_LISTをインポート


import { globSync } from 'glob';
import path from 'path';

const root = 'src/pages/';

const inputFiles = globSync(`${root}/**/*.html`).reduce((entries, file) => {
  const fileNameWithoutExt = path.relative(root, file).replace(path.extname(file), '');
  entries[fileNameWithoutExt] = file;
  return entries;
}, {});

export default defineConfig({
  root: root,
  publicDir: '../../public',
  build: {
    outDir: '../../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: inputFiles,
    },
  },
  plugins: [
    ViteEjsPlugin(
      {
      ...mainData, 
      SOCIAL_MENU, // SOCIAL_MENUを渡す
      BASIC_SOCIAL, // BASIC_SOCIALを渡す
      JAPANESE_MENU, // JAPANESE_MENUを渡す
      BASIC_JAPANESE, // BASIC_JAPANESEを渡す
      },
      {
        minify: false,
        htmlTemplate: (html) => html,
      },
      {
        minify: true,
        htmlTemplate: (html) => html,
    },
    {
      ejs: {
        beautify: true,
      },
    }),
  ],
});
