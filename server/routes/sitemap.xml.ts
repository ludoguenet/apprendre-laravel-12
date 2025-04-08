import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  // Fetch all contents
  const docs = await queryCollection(event, 'content').order('order', 'ASC').all()
  const sitemap = new SitemapStream({
    hostname: 'https://apprendre-laravel-12.net',
  })

  for (const doc of docs) {
    sitemap.write({
      url: doc.path,
      changefreq: 'monthly',
    })
  }
  sitemap.end()

  return streamToPromise(sitemap)
})
