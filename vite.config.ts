/// <reference types="vitest" />

// Lib config

import {defineConfig} from 'vite';
import pkg from './package.json';

export default defineConfig({
  build: {
    lib: {
      entry: pkg.main,
      formats: ['es'],
    },
  },
  test: {
    globals: true,
    include: ['src/**/*.test.ts'],
  },
});

// React config

// import {defineConfig, splitVendorChunkPlugin} from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react(), splitVendorChunkPlugin()],
//   test: {
//     globals: true,
//     environment: 'jsdom',
//     setupFiles: './test/setup.ts',
//     include: ['src/**/*.test.{ts,tsx}'],
//   },
// });
