// vite.config.ts
import { defineConfig } from "vite";
import { patchCssModules } from 'vite-css-modules'
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    port: 3100, // teg is on 3000
  },
  plugins: [
    patchCssModules({
      generateSourceTypes: true
    }),
    tsConfigPaths(),
    tanstackStart({
        prerender: {
        enabled: true,
        crawlLinks: true, // Discovers all linkable pages
      },
      sitemap: {
        enabled: true,
        host: 'https://portfolio.aloylks.com',
      },
    }),

    // react's vite plugin must come after start's vite plugin
    viteReact(),
  ],
  build: {
    rollupOptions: {
      external: [`./server.ts`]
    }
  }
});
