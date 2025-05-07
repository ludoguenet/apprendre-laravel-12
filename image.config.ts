export default {
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
  modifiers: {
    format: 'webp',
    quality: 75,
    loading: 'lazy',
  },
  presets: {
    avatar: {
      modifiers: {
        format: 'webp',
        width: 100,
        height: 100,
        quality: 75,
      },
    },
    thumbnail: {
      modifiers: {
        format: 'webp',
        width: 375,
        height: 210,
        quality: 75,
      },
    },
    hero: {
      modifiers: {
        format: 'webp',
        width: 1920,
        height: 1080,
        quality: 75,
      },
    },
  },
}
