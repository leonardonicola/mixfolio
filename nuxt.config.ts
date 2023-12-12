// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-icon',
    '@vueuse/nuxt',
    '@vee-validate/nuxt',
    '@nuxt/image',
  ],
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE,
    },
  },
  devtools: { enabled: false },
  googleFonts: {
    families: {
      Inter: [200, 400, 500, 600, 700, 800],
      Lora: [200, 400, 500, 600, 700, 800],
    },
    preconnect: true,
  },
  app: {
    head: {
      title: 'Mixfolio',
    },
  },
  ssr: false,
})
