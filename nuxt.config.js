
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'LASUBEB SITE',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },

    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/webclip.png' },
    ],
    script: [
      { hid: 'twitter', type: 'text/javascript', src: 'https://platform.twitter.com/widgets.js', async: true, defer: true },
      {
        src: "https://www.google.com/recaptcha/api.js",
        type: "text/javascript"
      },
      {
        src:'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
        type: "text/javascript"
      },
      {
        src: 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js',
        type: "text/javascript"
      },
      {
        src: '/js/hplugin1.js',
        type: "text/javascript"
      },
      {
        src: '/js/hplugin2.js',
        type: "text/javascript"
      },
      {
        src: 'https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js?site=5eff351b1692982c192ff95b',
        type: "text/javascript",
        body: true
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js',
        type: "text/javascript",
        body: true
      },
      {
        src: '/js/bplugin1.js',
        type: "text/javascript",
        body: true
      },
      {
        src: '/js/lasubeb.js',
        type: "text/javascript",
        body: true
      },
      {
        src: '/js/owl/owl.carousel.min.js',
        type: "text/javascript",
        body: true
      }
    ],
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/style/components.css',
    '~assets/style/lasubeb.css',
    '~assets/style/normalize.css',
    '~static/js/owl/assets/owl.carousel.min.css',
    '~static/js/owl/assets/owl.theme.default.min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/recaptcha'
  ],

  recaptcha: {
    hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
    siteKey: '6Lcmk9IZAAAAAP6_JrHVHumrGfv9ApT9AfJW0rjO', // Site key for requests
    version: 2, // Version
    size: 'invisible' // Size: 'compact', 'normal', 'invisible' (v2)
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
