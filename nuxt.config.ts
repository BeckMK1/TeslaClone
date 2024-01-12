// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
    app:{
      pageTransition: { name: 'page', mode: 'out-in' }
    },
    css: [
      '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    plugins: [
      '~/plugins/fontawesome.js',
    ],
    modules:[
      '@pinia/nuxt',
      ['@nuxtjs/robots',{UserAgent: '*', Disallow: '/'}]
    ],
    build: {
      transpile: ['@fortawesome/vue-fontawesome']
    },
})
