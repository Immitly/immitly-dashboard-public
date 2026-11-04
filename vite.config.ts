import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base is relative so the build deploys to GitHub Pages or any static host.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
