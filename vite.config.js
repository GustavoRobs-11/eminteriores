import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    watch: {
      usePolling: true,
      interval: 50, // checa mudanças a cada 50ms
    },
  }
})
