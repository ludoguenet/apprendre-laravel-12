<template>
  <div class="container mx-auto px-4 py-8">
    <section class="mb-12">
      <h1 class="text-4xl font-extrabold mb-3 text-gray-800 leading-tight">
        Une série complète de tutoriels sur Laravel 12
      </h1>
      <p class="text-gray-600 text-lg max-w-3xl">
        Apprenez Laravel 12 avec nos vidéos complètes, accompagnées de code source et d'explications détaillées.
        Parfait pour débutants et développeurs plus expérimentés.
      </p>

      <div class="flex flex-wrap gap-3 mt-4">
        <UBadge
          color="primary"
          variant="soft"
          size="lg"
        >
          Dernière Version
        </UBadge>
        <UBadge
          color="primary"
          variant="soft"
          size="lg"
        >
          Français
        </UBadge>
        <UBadge
          color="warning"
          variant="soft"
          size="lg"
        >
          Code Source Inclus
        </UBadge>
      </div>
    </section>

    <div v-if="videos.length">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <UInput
          v-model="searchQuery"
          placeholder="Rechercher un tutoriel par titre ou contenu..."
          icon="i-lucide-search"
          class="md:max-w-md w-full"
          size="lg"
        />

        <div class="flex items-center gap-2 text-sm text-gray-500">
          <UIcon
            name="i-lucide-video"
            class="text-lime-500"
          />
          <span>{{ videos.length }} tutoriels disponibles</span>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <VideoCard
          v-for="video in filteredVideos"
          :key="video._path"
          :video="video"
        />
      </div>

      <UDivider v-if="filteredVideos.length !== videos.length" />

      <div
        v-if="filteredVideos.length !== videos.length"
        class="flex justify-center mt-6"
      >
        <UButton
          icon="i-lucide-rotate-ccw"
          color="gray"
          variant="soft"
          @click="searchQuery = ''"
        >
          Afficher tous les tutoriels
        </UButton>
      </div>
    </div>

    <UAlert
      v-else
      title="Aucun tutoriel disponible"
      color="amber"
      class="mt-8"
      icon="i-lucide-alert-triangle"
    >
      <template #description>
        Aucune vidéo n'a été trouvée. Veuillez revenir ultérieurement pour découvrir nos tutoriels.
      </template>
    </UAlert>

    <section class="mt-16 bg-gray-50 p-6 rounded-xl">
      <h2 class="text-2xl font-bold mb-4">
        À propos de cette série
      </h2>
      <p class="mb-4">
        Cette série de tutoriels vous guide à travers les fonctionnalités et nouveautés de Laravel 12.
        Idéale pour les développeurs qui souhaitent maîtriser ce framework PHP populaire.
      </p>
      <UButton
        to="https://laraveljutsu.net"
        color="primary"
        variant="soft"
        class="mt-2"
      >
        En savoir plus
      </UButton>
    </section>
  </div>
</template>

<script setup lang="ts">
const searchQuery = ref('')

const { data: videos } = await useAsyncData(() => queryCollection('content').all())

const filteredVideos = computed(() => {
  if (!searchQuery.value) return videos.value

  const query = searchQuery.value.toLowerCase()
  return videos.value.filter(video =>
    video.title?.toLowerCase().includes(query)
    || video.description?.toLowerCase().includes(query)
    || video.meta?.tags?.some((tag: string) => tag.toLowerCase().includes(query)),
  )
})

useSeoMeta({
  title: 'Tutoriels Laravel 12 - Apprenez le framework PHP moderne',
  description: 'Découvrez des tutoriels complets sur Laravel 12, avec des explications détaillées, du code source et des exemples pratiques pour maîtriser ce framework PHP.',
  ogTitle: 'Tutoriels Laravel 12 - Apprenez le framework PHP moderne',
  ogDescription: 'Ressources complètes pour apprendre Laravel 12: vidéos, code source et explications détaillées.',
  ogImage: '/images/home.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Tutoriels Laravel 12 - Formation Complète',
  twitterDescription: 'Ressources complètes pour apprendre Laravel 12: vidéos, code source et explications détaillées.',
  twitterImage: '/images/home.jpg',
})
</script>
