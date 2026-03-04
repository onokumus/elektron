import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const isApp = mode === 'app';

  return {
    base: '/elektron/',
    plugins: [
      tailwindcss(),
    ],
    build: isApp ? {
      // App build for GitHub Pages
      outDir: 'dist',
    } : {
      // Library build for NPM
      lib: {
        entry: './src/main.ts',
        name: 'Elektron',
        fileName: 'elektron',
        formats: ['es', 'umd']
      },
      rollupOptions: {
        external: [],
        output: {
          globals: {}
        }
      }
    }
  }
})