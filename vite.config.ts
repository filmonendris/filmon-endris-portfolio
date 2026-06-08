// @lovable.dev/vite-tanstack-config bundles: tanstackStart, viteReact, tailwindcss,
// tsConfigPaths, nitro, componentTagger, VITE_* env injection, @ path alias, and more.
// Do NOT add those manually — it will break the build with duplicate plugins.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
});
