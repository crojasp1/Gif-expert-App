import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,               // Para poder usar describe, test, expect sin importar
    environment: 'jsdom',        // Simula navegador
    setupFiles: './vitest.setup.js', // Opcional para configuración global
  },
});