import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home:          resolve(__dirname, 'home/index.html'),
        blog:          resolve(__dirname, 'home/blog/index.html'),
        projects:      resolve(__dirname, 'home/projects/index.html'),
        generativeArt: resolve(__dirname, 'home/projects/generative-art-js-svg/index.html'),
        helloSvg:      resolve(__dirname, 'home/projects/generative-art-js-svg/01-hello-svg/index.html'),
      },
    },
  },
});
