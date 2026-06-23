import { defineConfig } from 'vitest/config';
import { loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    base: env.GITHUB_PAGES === 'true' ? '/Murdoku/' : '/',
    plugins: [react()],
    test: {
      environment: 'jsdom',
      setupFiles: './tests/setup.ts',
      globals: true
    }
  };
});
