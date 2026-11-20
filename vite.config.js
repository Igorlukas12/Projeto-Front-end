import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// BASE_PATH permite publicar em subpasta (ex.: GitHub Pages em /Projeto-Front-end/).
// Localmente, na Vercel e na Netlify o padrão "/" é usado.
export default defineConfig({
  base: process.env.BASE_PATH || "/",
  plugins: [react()],
});
