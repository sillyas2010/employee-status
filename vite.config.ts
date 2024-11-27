import {dirname, resolve} from 'path';
import {fileURLToPath} from 'url';
import {defineConfig} from 'vite';

import react from '@vitejs/plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '^.*': {
        target: 'http://localhost:3001',
        changeOrigin: true
      }
    },
  },
  build: {
    outDir: 'dist/client',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@client': resolve(__dirname, './src/client')
    },
  },
})
