import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),        // enables React Fast Refresh, JSX
    tailwindcss()   // inlines your Tailwind directives
  ],
  server: {
    proxy: {
      // forward /api/* to your backend at 4001
      '/api': {
        target: 'http://localhost:4001',
        changeOrigin: true,
        secure: false,
      }
    }
  }
});
