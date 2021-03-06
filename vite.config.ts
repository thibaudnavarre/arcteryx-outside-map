import { defineConfig } from 'vite';
import { getMapsOptimizers, getMapsScripts } from 'wa-map-optimizer-vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: './index.html',
        ...getMapsScripts(),
      },
    },
  },
  plugins: [...getMapsOptimizers()],
  server: {
    host: 'localhost',
    headers: {
      'Access-Control-Allow-Origin': 'https://play.workadventu.re',
      'Access-Control-Allow-Private-Network': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    },
    open: '/',
  },
});
