/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    setupFiles: ['./src/setupTest.ts'],
    environment: 'jsdom',
  },
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: '@tmatsiievskyi/react_ui_components',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
