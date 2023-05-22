import { defineConfig } from 'vite'
import svg from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  //gif

  plugins: [
    react(),
    svg(),
  ],
  server: {
    port: 4444,
  },
  css: {
    devSourcemap: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})
