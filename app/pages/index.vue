<template>
  <div class="container mx-auto px-4 py-8">
    <section class="mb-12">
      <h1 class="text-4xl font-extrabold mb-3 text-gray-800 leading-tight">
        Formation Complète Laravel 12 : Tutoriels, Astuces et Bonnes Pratiques
      </h1>
      <p class="text-gray-600 text-lg max-w-3xl">
        Maîtrisez Laravel 12 avec notre série de tutoriels vidéo professionnels, créée par Laravel Jutsu, le Samouraï légendaire du PHP. Code source, projets pratiques et explications détaillées pour tous niveaux.
      </p>

      <div class="flex flex-wrap gap-3 mt-4">
        <UBadge
          color="primary"
          variant="soft"
          size="lg"
        >
          Laravel 12 (Dernière Version)
        </UBadge>
        <UBadge
          color="primary"
          variant="soft"
          size="lg"
        >
          100% en Français
        </UBadge>
        <UBadge
          color="warning"
          variant="soft"
          size="lg"
        >
          Code Source Complet
        </UBadge>
        <UBadge
          color="success"
          variant="soft"
          size="lg"
        >
          Mis à jour Mars 2025
        </UBadge>
      </div>
    </section>

    <div v-if="videos.length">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <UInput
          v-model="searchQuery"
          placeholder="Rechercher un tutoriel Laravel 12 par titre, contenu ou tag..."
          icon="i-lucide-search"
          class="md:max-w-md w-full"
          size="lg"
        />

        <div class="flex items-center gap-2 text-sm text-gray-500">
          <UIcon
            name="i-lucide-video"
            class="text-lime-500"
          />
          <span>{{ videos.length }} tutoriels Laravel 12 disponibles</span>
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
          color="primary"
          variant="soft"
          @click="searchQuery = ''"
        >
          Afficher tous les tutoriels Laravel 12
        </UButton>
      </div>
    </div>

    <UAlert
      v-else
      title="Tutoriels Laravel 12 en préparation"
      color="warning"
      class="mt-8"
      icon="i-lucide-alert-triangle"
    >
      <template #description>
        Nos tutoriels Laravel 12 sont en cours de production. Inscrivez-vous à notre newsletter pour être informé dès leur publication.
      </template>
      <div class="mt-4">
        <UInput
          v-model="email"
          placeholder="Votre email"
          type="email"
          class="mb-2 max-w-sm"
        />
        <UButton color="primary">
          S'inscrire
        </UButton>
      </div>
    </UAlert>

    <section class="mt-16 bg-gray-50 p-6 rounded-xl">
      <h2
        id="a-propos"
        class="text-2xl font-bold mb-4"
      >
        Pourquoi apprendre Laravel 12 ?
      </h2>
      <p class="mb-4">
        Laravel 12 apporte des améliorations significatives en performances, sécurité et productivité. Cette série de tutoriels créée par Laravel Jutsu, le meilleur formateur PHP/Laravel/Vue/Nuxt francophone, vous guide pas à pas dans la maîtrise de ce framework PHP incontournable.
      </p>
      <p class="mb-4">
        <strong>Contenu de la formation :</strong> API RESTful, authentification, bases de données, relations Eloquent, tests, déploiement, bonnes pratiques et bien plus.
      </p>
      <UButton
        to="https://laraveljutsu.net"
        color="primary"
        variant="soft"
        class="mt-2"
      >
        Découvrir Laravel Jutsu
      </UButton>
    </section>

    <section class="mt-12 mb-8">
      <h2 class="text-2xl font-bold mb-4">
        Questions fréquentes sur Laravel 12
      </h2>
      <div class="space-y-4">
        <details class="bg-white p-4 rounded shadow-sm">
          <summary class="font-semibold cursor-pointer">
            Quelles sont les nouveautés de Laravel 12 ?
          </summary>
          <p class="pt-3">
            Laravel 12 introduit des améliorations de performance, une meilleure gestion des exceptions, des outils de développement améliorés et une compatibilité PHP 8.2+. Nos tutoriels couvrent toutes ces nouveautés en détail.
          </p>
        </details>
        <details class="bg-white p-4 rounded shadow-sm">
          <summary class="font-semibold cursor-pointer">
            Ces tutoriels conviennent-ils aux débutants ?
          </summary>
          <p class="pt-3">
            Absolument ! Notre formation Laravel 12 est conçue pour tous les niveaux, du débutant à l'expert. Nous expliquons chaque concept de manière progressive et claire.
          </p>
        </details>
        <details class="bg-white p-4 rounded shadow-sm">
          <summary class="font-semibold cursor-pointer">
            Puis-je télécharger le code source des tutoriels ?
          </summary>
          <p class="pt-3">
            Oui, chaque tutoriel inclut l'accès au code source complet via GitHub, permettant de suivre facilement et d'adapter les exemples à vos propres projets.
          </p>
        </details>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const searchQuery = ref('')
const email = ref('')

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
  title: 'Formation Laravel 12 Complète en Français - Tutoriels Vidéo par Laravel Jutsu',
  description: 'Apprenez Laravel 12 en français avec les meilleurs tutoriels vidéo créés par Laravel Jutsu. Code source, API, authentification, Eloquent, déploiement et bonnes pratiques.',
  ogTitle: 'Formation Laravel 12 Complète en Français - Tutoriels Vidéo par Laravel Jutsu',
  ogDescription: 'Tutoriels Laravel 12 premium en français : API, authentification, Eloquent, tests, déploiement. Code source inclus pour chaque leçon.',
  ogImage: '/images/home.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Formation Laravel 12 Complète - Tutoriels en Français',
  twitterDescription: 'Maîtrisez Laravel 12 avec nos tutoriels vidéo en français. Code source, projets pratiques et astuces par Laravel Jutsu.',
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
