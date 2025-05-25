import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // used during local development
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
  preview: {
    allowedHosts: ['chatwebapplication-5.onrender.com'], // allows this host during vite preview
  },
});
