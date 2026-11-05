import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        carayutyunner: resolve(__dirname, 'carayutyunner.html'),
        mermasin: resolve(__dirname, 'mermasin.html'),
        zexcher: resolve(__dirname, 'zexcher.html')
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});