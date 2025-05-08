<template>
  <div
    class="bg-white dark:bg-zinc-900 mt-20"
    role="main"
    aria-label="Contenu principal"
  >
    <div class="container mx-auto px-4 pt-24 md:pt-16">
      <VideoGrid
        id="video-grid"
        :videos="videos || []"
        aria-live="polite"
        aria-busy="false"
        role="list"
        aria-label="Liste des vidéos"
      />

      <div
        v-if="totalPages > 1"
        class="flex justify-center mt-8 mb-12"
        role="navigation"
        aria-label="Pagination"
      >
        <UPagination
          v-model:page="currentPage"
          :total="totalVideos"
          :items-per-page="itemsPerPage"
          :show-edges="true"
          :sibling-count="1"
          color="primary"
          active-color="primary"
          variant="outline"
          active-variant="subtle"
          aria-label="Navigation des pages"
        />
      </div>

      <FaqSection
        id="faq"
        aria-labelledby="faq-heading"
        class="mb-12"
        role="region"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const currentPage = ref(1)
const itemsPerPage = 9

const currentMonth = ref<string>()
const currentYear = ref<number>()

// Add watch effect for page changes
watch(currentPage, async () => {
  await nextTick()
  window.scrollTo(0, 0)
})

const initializeDate = () => {
  const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']

  const now = new Date()

  currentMonth.value = months[now.getMonth()] as string
  currentYear.value = now.getFullYear() as number
}

initializeDate()

// Fetch total count of videos
const { data: totalVideos } = await useAsyncData(() => queryCollection('content').count(), {
  default: () => 0,
})

// Fetch paginated videos
const { data: videos } = await useAsyncData(
  () => queryCollection('content')
    .order('order', 'DESC')
    .skip((currentPage.value - 1) * itemsPerPage)
    .limit(itemsPerPage)
    .all(),
  {
    watch: [currentPage],
  },
)

const totalPages = computed(() => {
  return Math.ceil((totalVideos.value || 0) / itemsPerPage)
})

useSeoMeta({
  title: 'Formation Laravel 12 – Tutoriels Vidéo en Français | Laravel Jutsu',
  description: 'Apprenez Laravel 12 en français avec nos tutoriels vidéo. Code source, API, authentification, Eloquent, déploiement et bonnes pratiques inclus.',
  ogTitle: 'Formation Laravel 12 – Tutoriels Vidéo en Français | Laravel Jutsu',
  ogDescription: 'Formation complète à Laravel 12 : API, Eloquent, authentification, projets réels. Tutoriels vidéo + code source inclus.',
  ogImage: '/images/home.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Formation Laravel 12 – Tutoriels Vidéo en Français | Laravel Jutsu',
  twitterDescription: 'Maîtrisez Laravel 12 avec nos tutoriels vidéo en français. Code source, projets pratiques et bonnes pratiques incluses.',
  twitterImage: '/images/home.png',
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
