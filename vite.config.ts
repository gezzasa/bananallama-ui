/// <reference types="vitest" />

import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'vue' : resolve(__dirname, './node_modules/vue'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
