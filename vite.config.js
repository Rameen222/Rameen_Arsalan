import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: '/Rameen_Arsalan/',
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      ignored: ["**/public/Images/**"],
    },
  },
});