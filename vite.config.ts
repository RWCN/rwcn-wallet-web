import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    lib: {
      name: 'RwcnWalletWeb',
      entry: ['src/lib.tsx', 'src/web-component.tsx'],
      fileName: (format, entry) => {
        switch (format) {
          case 'es':
          case 'esm':
            return `${entry}.js`
          default:
            return `${entry}.js`
        }
      },
      formats: ['es'],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: [solid()],
})
