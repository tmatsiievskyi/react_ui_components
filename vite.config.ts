/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    setupFiles: ['./src/setupTest.ts'],
    environment: 'jsdom',
  },
  plugins: [react()],
});
