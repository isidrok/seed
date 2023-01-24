/// <reference types="vitest" />

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
