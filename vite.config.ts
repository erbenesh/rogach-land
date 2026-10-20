import fs from "node:fs";
import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

/** GitHub Pages отдаёт 404.html для неизвестных путей — копируем SPA entry. */
function spaFallback(): Plugin {
  return {
    name: "spa-fallback",
    closeBundle() {
      const indexPath = path.resolve("dist/index.html");
      const fallbackPath = path.resolve("dist/404.html");
      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, fallbackPath);
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), spaFallback()],
  base: "/rogach-land/",
});
