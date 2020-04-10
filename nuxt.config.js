
const env = require('dotenv').config();
import Messages from './lang/index'

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
    ],
    script: [
      {src:'/js/fullpage.min.js'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
    ['nuxt-i18n', {
      defaultLocale: 'fr',
      locales: [
        {
          code: 'en',
          iso: 'en-US',
          name: 'English',
          icon: '/icons/icon-gb.png',
          domain: 'en.dev.benjamingrilleres.com'
        },
        {
          code: 'fr',
          iso: 'fr-FR',
          name: 'Français',
          icon:  '/icons/icon-france.png',
          domain: 'dev.benjamingrilleres.com'
        }
      ],
      differentDomains: (process.env.NODE_ENV === 'production'),
      vueI18n: {
        messages: Messages
      },
      //baseUrl: '',
      seo: true
    }]
  ],

  pageTransition: 'fade',

  css: [
    '~/assets/scss/index.scss'
  ],

  plugins: [
    { src: '~/plugins/animations/animate.js', ssr: false },
    { src: '~/plugins/directives.js' },
    { src: '~/plugins/global-mixin.js'},
    { src: '~/plugins/bus.js'},
    { src: '~/plugins/loadScriptsAnimation.js', ssr: false},
  ],

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

