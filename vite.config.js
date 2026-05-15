import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(fileURLToPath(new URL(".", import.meta.url)));


// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const apiTarget = env.VITE_API_URL;

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: apiTarget,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        }
      }
    },
    build: {
      rollupOptions: {
        input: {
          index: resolve(rootDir, "index.html"),
          i404: resolve(rootDir, "404.html"),

          actualites: resolve(rootDir, "actualites/index.html"),
          contact: resolve(rootDir, "contact/index.html"),
          produits: resolve(rootDir, "produits/index.html"),
          tarifs: resolve(rootDir, "tarifs/index.html"),

          banque: resolve(rootDir, "app/banque/index.html"),
          clients: resolve(rootDir, "app/clients/index.html"),
          home: resolve(rootDir, "app/home/index.html"),
          immobilier: resolve(rootDir, "app/immobilier/index.html"),
          impots: resolve(rootDir, "app/impots/index.html"),
          revenue: resolve(rootDir, "app/revenue/index.html"),
          ventes: resolve(rootDir, "app/ventes/index.html"),
        },
      },
    },
  };
})