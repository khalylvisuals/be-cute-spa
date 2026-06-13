import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/be-cute-spa/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
