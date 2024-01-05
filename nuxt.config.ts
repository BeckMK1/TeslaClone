// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
    css: [
      '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    build: {
      transpile: [
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg',
        '@fortawesome/free-brands-svg-icons'
      ]
    }
})
