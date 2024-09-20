// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/test-utils/module", "@nuxt/fonts", "nuxt-svgo"],
  css: ["~/assets/styles/_main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    compressPublicAssets: { gzip: true, brotli: true },
    preset: "netlify-static",
    static: true,
  },
  app: {
    head: {
      title: "Paradnight Studio | Indie game studio",
      meta: [
        {
          name: "description",
          content: "Crafting weird retro inspired horror games",
        },
      ],
    },
  },
});
