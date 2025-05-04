export default defineNuxtConfig({
  // Core configuration

  // Modules
  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/ui'],

  // Development tools
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Apprendre Laravel 12',
      htmlAttrs: {
        lang: 'fr',
      },
      meta: [
        { name: 'description', content: 'Tutoriels et ressources pour apprendre Laravel 12' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },

  // Styling
  css: ['~/assets/css/main.css'],

  // Content module configuration
  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'catppuccin-frappe',
          langs: ['json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'mdc', 'md', 'yaml', 'php'],
        },
      },
    },
  },

  // Nuxt UI configuration
  ui: {
    colorMode: true,
  },

  // Compatibility and future features
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',

  // Performance optimization
  nitro: {
    compressPublicAssets: true,
    minify: true,
  },

  // ESLint configuration
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
