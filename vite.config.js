import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// En GitHub Pages la app vive en /nombre-del-repo/. En local se sirve en la raíz.
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? '/practica-05-react-huancayo-explorer/' : '/',
})
