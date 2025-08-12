import { defineConfig } from 'vite';

export default defineConfig({
  // Sin especificar root, usar estructura estándar
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  server: {
    port: 3000
  }
});