require('dotenv').config()
import webpack from 'webpack'
import axios from 'axios'

export default {
  //target: 'static',
  // transition: 'fade',
  loading: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'portalink',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'google-site-verification', content: 'T5HAZJYQTRcte3pkZePdOe-SXDYGNkwfLlqArs3D4B4' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=3' },
      { rel: 'stylesheet', href: 'https://cdn.lineicons.com/4.0/lineicons.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css' },
    ],
    script: [
      { src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js", type: "text/javascript", defer: true },
      { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js", type: "text/javascript", defer: true }, 
      { src: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.0/slick.min.js", type: "text/javascript", defer: true }, 
      { src: "https://code.jquery.com/ui/1.12.1/jquery-ui.min.js", type: "text/javascript", defer: true },
      { src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js", type: "text/javascript", defer: true },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js", type: "text/javascript", defer: true },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/bootstrap.css',
    '@/assets/css/plugin/font-awesome/fontawesome.css',
    '@/assets/css/plugin/jquery-ui/jquery-ui.css',
    '@/assets/css/vue-slick-carousel.css',
    '@/assets/css/vue-slick-carousel-theme.css',
    '@/assets/css/custom.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue',
    '~/plugins/outsideClick',
    '~/plugins/globalMixinsPlugin',
    '~/plugins/globalComponentsPlugin',
    { src: '~/plugins/main.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/robots',
    '@nuxtjs/auth-next',
    ['nuxt-lazy-load', {
      directiveOnly: true,
      defaultImage: '/images/dd_loader2.gif',
    }],
    ['@nuxtjs/google-gtag', {
      id: 'G-MPBD24EEG2',
      config:{
        anonymize_ip: true,
        send_page_view: true,
        linker:{
          domains:['portalink.com']
        }
      },
      debug: true,
      disableAutoPageTrack: false,
      additionalAccounts:[
        {
          id: 'G-MPBD24EEG2',
        }
      ]
    }],
    '@nuxtjs/sitemap'
  ],

  axios: {
    baseURL:  process.env.BASE_URL,
    credentials: true,
    headers: {
      common: {
        'Accept': 'application/json',
      },
    }
  },

  auth: {
    strategies: {
      local: {
        url: process.env.BASE_URL_WITHOUT_API,
        user: {
          property: 'data',
          //autoFetch: true,
        },
        token: {
          property: 'access_token',
          maxAge: 60 * 60 * 12,
          global: true,
          type: 'Bearer'
        },
        endpoints: {
          login: { url: '/login', method: 'post' },
          logout: { url: '/logout', method: 'post' },
          user: { url: '/user', method: 'get' },
        }
      },
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    minimize: true,
    plugins: [
      new webpack.ProvidePlugin({
        _: 'lodash',
      })
    ],
  },

  robots: {
    UserAgent: '*',
    Sitemap: 'https://portalink.com/sitemap',
    Disallow: ['/checkout', '/cart', '/register', '/login', '/search'],
  },

  sitemap: {
    path: '/sitemap',
    hostname: 'https://portalink.com',
    gzip: true,
    sitemaps: [
      {
        path: '/sitemap-category.xml',
        routes: async (callback) => {
          let routes = [];

          axios.get(process.env.BASE_URL + '/categories')
            .then(res => {
              res.data.data.forEach(category => {
                routes.push('/category/' + category.slug)

                category.sub_categories.forEach(sub => {
                  routes.push('/category/' + category.slug + '/' + sub.slug)
                })
              })

              callback(null, routes)
            })
            .catch(callback)
        },
        exclude: [
          '/cart',
          '/checkout',
          '/checkout/**',
          '/login',
          '/page/look-book',
          '/reset-password',
          '/search',
          '/register',
          '/register/**',
          '/user',
          '/user/**',
          '/',
        ],
      },
      {
        path: '/sitemap-product.xml',
        routes: async (callback) => {
          let routes = [];

          axios.get(process.env.BASE_URL + '/products')
            .then(res => {
              res.data.data.forEach(product => {
                routes.push('/product/' + product.slug)
              })

              callback(null, routes)
            })
            .catch(callback)
        },
        exclude: [
          '/cart',
          '/checkout',
          '/checkout/**',
          '/login',
          '/page/look-book',
          '/reset-password',
          '/search',
          '/register',
          '/register/**',
          '/user',
          '/user/**',
          '/',
        ],
      },
      {
        path: '/sitemap-static.xml',
        routes: [
          '/',
          '/category/new',
          '/category/pre-order',
          '/category/best',
          '/page/billing-shipping-info',
          '/page/return-policy',
          '/page/page/size-guide',
          '/page/cookies-policy',
          '/page/privacy-policy',
          '/page/terms-condition',
          '/page/contact-us',
          '/page/terms-conditions',
          '/page/faq',
          '/page/about-us',
          '/blog',
        ],
        exclude: [
          '/cart',
          '/checkout',
          '/checkout/**',
          '/login',
          '/page/look-book',
          '/reset-password',
          '/search',
          '/register',
          '/register/**',
          '/user',
          '/user/**',
          '/',
        ],
      }
    ],
  },
}
