import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig(({ command }) => ({
  // Gunakan relative path saat production build
  // dan root path saat development.
  base: command === 'build' ? './' : '/',

  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@src': path.resolve(__dirname, './src'),
    },
  },

  server: {
    host: '0.0.0.0',
    port: 3000,

    // Mendukung environment AI Studio / development environment
    hmr: process.env.DISABLE_HMR !== 'true',

    watch: {
      usePolling: process.env.DISABLE_HMR === 'true',
      interval: 1000,
    },
  },

  preview: {
    host: '0.0.0.0',
    port: 4173,
  },

  build: {
    target: 'es2022',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
  },
}));
