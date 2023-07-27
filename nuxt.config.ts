// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      charset: "utf-16",
      title: "Yari's blog",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        { charset: "utf-16" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
      ],
    },
  },
  runtimeConfig: {
    public: {
      wpUri: process.env.WP_URI,
    },
  },
})
