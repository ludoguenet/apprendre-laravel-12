import type { NuxtConfig } from 'nuxt/config'

interface ExtendedNuxtConfig extends NuxtConfig {
  image?: {
    quality: number
    format: string[]
    screens: Record<string, number>
    provider: string | undefined
  }
}

export default defineNuxtConfig({
  // Core configuration

  // Modules
  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/ui', '@nuxt/image'],

  // Development tools
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Apprendre Laravel 12',
      htmlAttrs: {
        lang: 'fr'
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

  // Image module configuration
  image: {
    quality: 80,
    format: ['webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    provider: 'ipx',
  },

  // Performance optimization
  nitro: {
    compressPublicAssets: true,
    minify: true,
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

  // ESLint configuration
  eslint: {
    config: {
      stylistic: true,
    },
  },
} as ExtendedNuxtConfig)
