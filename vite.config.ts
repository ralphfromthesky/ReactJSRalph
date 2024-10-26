import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcss from "postcss";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // const country = process.env.COUNTRY || 'japan'
  // const folderLocation = false;

  return {
    base: mode === "production" ? "/ReactJSRalph/" : "/aboutMe",
    plugins: [react()],
    css: {
      postcss: {
        plugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    server: {
      port: 5173,
    },
    build: {
      // outDir: folderLocation ? 'tae' : 'itlog';
    },
  };
});
