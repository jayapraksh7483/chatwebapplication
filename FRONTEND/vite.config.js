import React from "react";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(),react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://chatwebapplication-7.onrender.com',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
  preview: {
    allowedHosts: ['chatwebapplication-7.onrender.com',"https://chatwebapplication-9p5l.vercel.app"],
  },
});
