import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/cats-pinterest/',
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
