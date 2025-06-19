import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/link-shortener/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
