import tailwindcss from "@tailwindcss/vite";


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    TINA_TOKEN: process.env.TINA_TOKEN,
    public: {
      PUBLIC_TINA_CLIENT_ID: process.env.PUBLIC_TINA_CLIENT_ID,
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  routeRules: {
    "/admin": {
      // Temporary redirect using a 307 status code
      redirect: "/admin/index.html",
    }
  },
  css: ['/assets/css/main.css'],
  vite: {
    plugins: [
      //@ts-ignore
      tailwindcss(),
    ],
  },
})
