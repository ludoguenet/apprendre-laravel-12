import type { NuxtConfig } from 'nuxt/config'

interface ExtendedNuxtConfig extends NuxtConfig {
  image?: {
    quality: number
    format: string[]
    screens: Record<string, number>
  }
}

export default defineNuxtConfig({
  // Core configuration

  // Modules
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image'
  ],

  // Development tools
  devtools: { enabled: process.env.NODE_ENV === 'development' },

  // Performance optimizations
  build: {
    transpile: ['@nuxt/ui']
  },

  app: {
    head: {
      title: 'Apprendre Laravel 12',
      htmlAttrs: {
        lang: 'fr',
      },
      meta: [
        { name: 'description', content: 'Tutoriels et ressources pour apprendre Laravel 12' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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

  // Performance optimization
  nitro: {
    compressPublicAssets: true,
    minify: true,
    routeRules: {
      '/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable',
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
          'X-XSS-Protection': '1; mode=block'
        }
      },
      '/api/**': {
        headers: {
          'Cache-Control': 'no-cache',
          'X-Content-Type-Options': 'nosniff'
        }
      }
    }
  },

  // ESLint configuration
  eslint: {
    config: {
      stylistic: true,
    },
  },

  // Image module configuration
  image: {
    presets: {
      thumbnail: {
        modifiers: {
          format: 'webp',
          width: 375,
          height: 210,
          quality: 75,
        },
      },
      logo: {
        modifiers: {
          format: 'webp',
          width: 200,
          quality: 75,
        },
      }
    },
    quality: 75,
    format: ['webp', 'avif'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },

  // Build optimization
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['@nuxt/ui'],
            'content': ['@nuxt/content']
          }
        }
      },
      chunkSizeWarningLimit: 1000,
      target: 'esnext',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: process.env.NODE_ENV === 'production',
          drop_debugger: process.env.NODE_ENV === 'production'
        }
      }
    },
    optimizeDeps: {
      include: ['@nuxt/ui'],
      exclude: ['@nuxt/kit']
    },
    ssr: {
      noExternal: ['@nuxt/ui']
    }
  }
})
