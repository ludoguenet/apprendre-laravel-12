import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const linkSchema = z.object({
  name: z.string(),
  icon: z.string(),
  url: z.string().url(),
})

export default defineContentConfig({
  collections: {
    content: defineCollection({
      source: '**/*.md',
      type: 'page',
      schema: z.object({
        title: z.string(),
        order: z.number(),
        slug: z.string(),
        description: z.string(),
        date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
        duration: z.string().regex(/^\d{2}:\d{2}$/),
        youtubeId: z.string(),
        repository: z.string().url(),
        thumbnail: z.string(),
        level: z.enum(['débutant', 'intermédiaire', 'avancé']),
        isNew: z.boolean(),
        tags: z.array(z.string()),
        links: z.array(linkSchema),
      }),
    }),
  },
})
