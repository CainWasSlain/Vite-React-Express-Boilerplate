import dotenv from 'dotenv';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

dotenv.config();
const FPORT = process.env.FPORT || 5173; /// Frontend Port
const BPORT = process.env.BPORT || 5000; /// Backend Port

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: FPORT,
    proxy: {
      '/api': `http://localhost:${BPORT}`,
    },
  },
})
