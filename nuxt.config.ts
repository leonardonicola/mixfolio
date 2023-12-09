// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE,
    },
  },
  devtools: { enabled: false },
  googleFonts: {
    families: {
      Inter: [200, 400, 600, 800],
    },
    preconnect: true,
  },
})
