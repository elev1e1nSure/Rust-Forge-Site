import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Rust-Forge-Site/',
  server: {
    port: 5175,
    host: true, // Позволяет подключаться с других устройств в сети
    strictPort: false,
    open: false // Не открывать браузер автоматически
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    minify: 'esbuild',
    cssMinify: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})
