export default defineNuxtConfig({
  // Core configuration

  // Modules
  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/ui'],

  // Development tools
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Apprendre Laravel 12',
      meta: [
        { name: 'description', content: 'Tutoriels et ressources pour apprendre Laravel 12' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/favicon.png' },
        { rel: 'icon', sizes: '192x192', href: '/favicon-192x192.png' },
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
    colorMode: false,
  },

  // Compatibility and future features
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',

  // ESLint configuration
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
