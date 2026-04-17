import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://10.1.18.63',
        changeOrigin: true,
      },
      '/ml/api': {
        target: 'http://10.1.18.63',
        changeOrigin: true,
      },
    },
  },
})
