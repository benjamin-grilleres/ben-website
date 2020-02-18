
const env = require('dotenv').config();

module.exports = {

  env: env.parsed,

  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { hid: 'og-title', property: 'og:title', content: ''},
      { hid: 'og-description', property: 'og:description', content: ''},
      { hid: 'og-type', property: 'og:type', content: 'website'},
      { hid: 'og-url', property: 'og:url', content: ''},
      { hid: 'og-image', property: 'og:image', content: ''}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
    '@nuxtjs/axios',
  ],

  css: [
    '~/assets/scss/index.scss'
  ],

  plugins: [
    { src: '~/plugins/animations/animate.js', ssr: false },
    { src: '~/plugins/directives.js' },
    { src: '~/plugins/global-mixin.js'}
  ],

  axios: {
    baseURL: process.env.BACKEND_URL,
  },


  /*
  ** Build configuration
  */
  // build: {
  //   /*
  //   ** Run ESLint on save
  //   */
  //   extend (config, { isDev, isClient }) {
  //     if (isDev && isClient) {
  //       config.module.rules.push({
  //         enforce: 'pre',
  //         test: /\.(js|vue)$/,
  //         loader: 'eslint-loader',
  //         exclude: /(node_modules)/
  //       })
  //     }
  //   }
  // }
}

