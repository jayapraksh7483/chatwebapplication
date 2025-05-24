import { defineConfig } from 'vite';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    port:5173,
    proxy: {
      // Forward API requests to Express
      "/api": {
        target:'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      }
    },
  },
});