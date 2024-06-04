// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false
  },
  typescript: {
    typeCheck: true
  },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/ivan-jovkovic/' : '/',
    head: {
      meta: [
        {
          name: 'description',
          content: 'Ivan Jovkovic CV'
        },
        {
          name: 'keywords',
          content: 'HTML5, CSS3, JavaScript, Vue 3/2, Nuxt 3/2, React, React Native, Angular.js, jQuery, SCSS, Bootstrap 4'
        },
        {
          name: 'author',
          content: 'Ivan Jovkovic'
        },
        {
          name: 'theme-color',
          content: '#02be8a'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: 'favicon.ico'
        }
      ],
      noscript: [
        {
          innerHTML: 'JavaScript is required'
        }
      ]
    }
  },
  css: ['~/assets/scss/_base.scss'],
  modules: [
    '@formkit/auto-animate/nuxt',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@vite-pwa/nuxt',
    'nuxt-icon',
    'nuxt-lodash'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
                        @use '@/assets/scss/_breakpoints' as *;
                        @use '@/assets/scss/_variables.scss' as *;
                    `
        }
      }
    }
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Ivan Jovkovic PWA',
      short_name: 'IJ-PWA',
      theme_color: '#02be8a',
      icons: [
        {
          src: 'icons/icon_64x64.png',
          sizes: '64x64',
          type: 'image/png'
        },
        {
          src: 'icons/icon_144x144.png',
          sizes: '144x144',
          type: 'image/png'
        },
        {
          src: 'icons/icon_192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any maskable'
        },
        {
          src: 'icons/icon_512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ],
    },
    workbox: {
      navigateFallback: '/'
    },
    devOptions: {
      enabled: true,
      type: 'module'
    }
  },
  googleFonts: {
    families: {
      Montserrat: [400, 600, 700, 900]
    },
    display: 'swap'
  }
});
