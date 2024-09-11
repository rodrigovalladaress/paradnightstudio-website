// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/stylelint-module", "@nuxt/test-utils/module", "@nuxt/fonts"],
  stylelint: {
    config: {
      extends: ["stylelint-config-standard-scss", "stylelint-config-standard-vue/scss"],
      rules: {
        "declaration-property-unit-allowed-list": {
          "/^border/": ["px"],
          "/^padding|^gap/": ["rem"],
        },
        "unit-allowed-list": ["%", "deg", "px", "rem", "ms", "fr", "vh", "vw"],
        "no-empty-source": null,
      },
    },
  },
});