import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/qmate-demo/',  // 👈 questo è il nome del repo su GitHub
  plugins: [react()],
});