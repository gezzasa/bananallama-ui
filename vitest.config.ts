import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8', // Valid provider
      reporter: ['text', 'json', 'html'], // Valid reporters
    },
  },
});
