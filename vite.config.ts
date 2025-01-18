import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: '/src/app',
      assets: '/src/assets',
      components: '/src/components',
      config: '/src/config',
      context: '/src/context',
      utils: '/src/utils',
      services: '/src/services',
      styles: '/src/styles',
    },
  },
});
