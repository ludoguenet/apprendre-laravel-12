<template>
  <div
    class="min-h-screen bg-white dark:bg-zinc-900 mt-10"
    role="main"
    aria-label="Contenu principal"
  >
    <div class="container mx-auto px-4 py-12">
      <SearchBarWithStats
        v-model="searchQuery"
        :total-count="videos.length"
        :filtered-count="filteredVideos.length"
        aria-label="Rechercher des vidéos"
        aria-controls="video-grid"
        aria-describedby="search-stats"
      />

      <VideoGrid
        id="video-grid"
        :videos="filteredVideos"
        aria-live="polite"
        aria-busy="false"
      />

      <SearchReset
        v-if="filteredVideos.length !== videos.length"
        :count="filteredVideos.length"
        :query="searchQuery"
        aria-label="Réinitialiser la recherche"
        aria-controls="video-grid"
        @reset="searchQuery = ''"
      />

      <FaqSection
        id="faq"
        aria-labelledby="faq-heading"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const searchQuery = ref('')

const currentMonth = ref<string>()
const currentYear = ref<number>()

const initializeDate = () => {
  const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']

  const now = new Date()

  currentMonth.value = months[now.getMonth()] as string
  currentYear.value = now.getFullYear() as number
}

initializeDate()

const { data: videos } = await useAsyncData(() => queryCollection('content').order('order', 'ASC').all())

const filteredVideos = computed(() => {
  if (!searchQuery.value) return videos.value

  const query = searchQuery.value.toLowerCase()
  return videos.value.filter(video =>
    video.title?.toLowerCase().includes(query)
    || video.description?.toLowerCase().includes(query)
    || video.tags?.some((tag: string) => tag.toLowerCase().includes(query)),
  )
})

useSeoMeta({
  title: 'Formation Laravel 12 – Tutoriels Vidéo en Français | Laravel Jutsu',
  description: 'Apprenez Laravel 12 en français avec nos tutoriels vidéo. Code source, API, authentification, Eloquent, déploiement et bonnes pratiques inclus.',
  ogTitle: 'Formation Laravel 12 – Tutoriels Vidéo en Français | Laravel Jutsu',
  ogDescription: 'Formation complète à Laravel 12 : API, Eloquent, authentification, projets réels. Tutoriels vidéo + code source inclus.',
  ogImage: '/images/home.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Formation Laravel 12 – Tutoriels Vidéo en Français | Laravel Jutsu',
  twitterDescription: 'Maîtrisez Laravel 12 avec nos tutoriels vidéo en français. Code source, projets pratiques et bonnes pratiques incluses.',
  twitterImage: '/images/home.jpg',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Course',
        'name': 'Formation Complète Laravel 12',
        'description': 'Apprenez Laravel 12 avec notre série de tutoriels vidéo professionnels, créée par Laravel Jutsu, le Samouraï légendaire du PHP.',
        'provider': {
          '@type': 'Organization',
          'name': 'Laravel Jutsu',
          'sameAs': 'https://laraveljutsu.net',
        },
        'inLanguage': 'fr',
        'teaches': 'Développement d\'applications web avec Laravel 12',
        'educationalLevel': 'Débutant à Expert',
      }),
    },
  ],
})
</script>
