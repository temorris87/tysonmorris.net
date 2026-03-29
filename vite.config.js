import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home:          resolve(__dirname, 'index.html'),
        blog:          resolve(__dirname, 'blog/index.html'),
        projects:      resolve(__dirname, 'projects/index.html'),
        generativeArt: resolve(__dirname, 'projects/generative-art-js-svg/index.html'),
        helloSvg:      resolve(__dirname, 'projects/generative-art-js-svg/01-hello-svg/index.html'),
      },
    },
  },
});
