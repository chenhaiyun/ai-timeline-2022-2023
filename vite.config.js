import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 54706,
    cors: true
  },
  base: '/ai-timeline-2022-2023/'
})
