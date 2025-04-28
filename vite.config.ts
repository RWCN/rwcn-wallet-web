import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: [
        resolve(__dirname, 'src/lib.tsx'),
        resolve(__dirname, 'src/web-component.tsx'),
      ],
      output: {
        entryFileNames: '[name].min.js',
        preserveModules: false,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: [solid()],
})
