import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {

    return {
        base: '/elektron/',
        plugins: [
            tailwindcss(),
        ],
        publicDir: mode === 'lib' ? '' : 'public',
        build: mode === 'lib' ? {
            // Library build for NPM
            outDir: 'lib',
            lib: {
                entry: './src/elektron.ts',
                name: 'Elektron',
                fileName: 'elektron',
                formats: ['es', 'umd']
            },
            rollupOptions: {
                output: {
                    exports: 'named'
                }
            }
        } : {
            outDir: 'dist'
        }
    }
})
