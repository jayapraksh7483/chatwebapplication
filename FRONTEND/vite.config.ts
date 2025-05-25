import { defineConfig } from 'vite';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      }
    },
  },
  preview: {
    port: 5000, // Render uses this port from env var $PORT, you can keep static or dynamic
    host: true, // listen on all IPs
    allowedHosts: ['chatwebapplication-5.onrender.com'], // Add your Render domain here
  }
});
