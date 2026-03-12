// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@/assets/scss/main.scss'],
  modules: ['@nuxt/eslint', '@nuxt/icon'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/abstracts/variables" as *;
            @use "@/assets/scss/abstracts/breakpoints" as *;
            @use "@/assets/scss/abstracts/mixins" as *;
            @use "@/assets/scss/abstracts/functions" as *;
          `
        }
      }
    }
  }
})
