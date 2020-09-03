
const env = require('dotenv').config();
import Messages from './lang/index'

module.exports = {

  env: env.parsed,

  target: 'static',

  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Diplômé d\'un Master en Développement Logiciel et 3 ans d\'expérience, j\'ai acquis suffisament de compétences pour réaliser des projets plus ou moins complexes.' },
      { hid: 'og-title', property: 'og:title', content: 'Benjamin Grilleres - Développeur Freelance Laravel, Vue.js, Nuxt.js'},
      { hid: 'og-description', property: 'og:description', content: 'Diplômé d\'un Master en Développement Logiciel et 3 ans d\'expérience, j\'ai acquis suffisament de compétences pour réaliser des projets plus ou moins complexes.'},
      { hid: 'og-type', property: 'og:type', content: 'website'},
      { hid: 'og-url', property: 'og:url', content: 'https://benjamingrilleres.com'},
      { hid: 'og-image', property: 'og:image', content: 'https://benjamingrilleres.com/img/ben.jpg'}
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
        },
        {
          code: 'fr',
          iso: 'fr-FR',
          name: 'Français',
          icon:  '/icons/icon-france.png',
        }
      ],
      vueI18n: {
        fallbackLocale: 'fr',
        messages: Messages
      },
      //seo: true
    }],
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/google-analytics'
  ],

  sitemap: {
    hostname: 'https://benjamingrilleres.com',
    gzip: true,
    exclude: [
      '/en/**'
    ],
  },

  googleAnalytics: {
    id: 'UA-163798379-1'
  },

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

