import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // If testing locally comment out the line below
  base: '/',
  plugins: [react()],
})
