import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Rust-Forge-Site/',
  server: {
    port: 5175,
    host: 'localhost',
    strictPort: false,
    open: false
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
