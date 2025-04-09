<template>
  <div class="container mx-auto px-4 py-8">
    <section class="bg-gradient-to-br from-white to-lime-50 py-16 px-6 rounded-xl shadow-sm mb-12">
      <div class="max-w-4xl mx-auto">
        <!-- En-tête avec badge de nouveauté -->
        <div class="flex items-center mb-4">
          <span class="bg-lime-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm uppercase tracking-wide">
            Nouveau
          </span>
          <span class="text-zinc-500 text-sm ml-3">Mis à jour {{ currentMonth }} {{ currentYear }}</span>
        </div>

        <!-- Titre principal avec style amélioré -->
        <h1 class="text-4xl md:text-5xl font-extrabold mb-5 text-zinc-800 leading-tight">
          Formation Complète <span class="text-lime-600">Laravel 12</span>
          <span class="block text-2xl md:text-3xl mt-2 font-semibold text-zinc-600">Tutoriels, Astuces & Bonnes Pratiques</span>
        </h1>

        <!-- Description avec mise en forme améliorée -->
        <p class="text-zinc-600 text-lg mb-8 max-w-3xl leading-relaxed">
          Maîtrisez Laravel 12 avec notre série de tutoriels vidéo professionnels, conçue par
          <span class="font-semibold text-lime-600">Laravel Jutsu</span>, le Samouraï du PHP.
          <span class="italic text-zinc-500">Code source complet, projets pratiques, explications claires pour tous niveaux.</span>
        </p>

        <!-- Badges dans un conteneur flex avec espacement amélioré -->
        <div class="flex flex-wrap gap-3 mb-10">
          <span class="bg-lime-600 text-white px-4 py-2 rounded-lg font-medium shadow-sm flex items-center gap-2">
            <UIcon
              name="i-lucide-check"
              class="text-white"
            />
            Laravel 12 (Dernière Version)
          </span>
          <span class="bg-zinc-700 text-white px-4 py-2 rounded-lg font-medium shadow-sm flex items-center gap-2">
            <UIcon
              name="i-lucide-globe"
              class="text-white"
            />
            100% en Français
          </span>
          <span class="bg-zinc-600 text-white px-4 py-2 rounded-lg font-medium shadow-sm flex items-center gap-2">
            <UIcon
              name="i-lucide-code"
              class="text-white"
            />
            Code Source Complet
          </span>
          <span class="bg-lime-500 text-white px-4 py-2 rounded-lg font-medium shadow-sm flex items-center gap-2">
            <UIcon
              name="i-lucide-refresh-ccw"
              class="text-white"
            />
            Mis à jour {{ currentMonth }} {{ currentYear }}
          </span>
        </div>
      </div>
    </section>

    <div
      v-if="videos.length"
      class="animate-fade-in"
    >
      <!-- Barre de recherche + Compteur -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <UInput
          v-model="searchQuery"
          placeholder="Rechercher un tutoriel Laravel 12..."
          icon="i-lucide-search"
          class="w-full md:max-w-md"
          size="lg"
          color="primary"
        />

        <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <UIcon
            name="i-lucide-video"
            class="text-lime-500"
          />
          <span class="font-medium">
            {{ videos.length }} tutoriel<span v-if="videos.length > 1">s</span> dispo
          </span>
        </div>
      </div>

      <!-- Grille de vidéos -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        <VideoCard
          v-for="video in filteredVideos"
          :key="video.path"
          :video="video"
        />
      </div>

      <!-- Séparateur + Reset -->
      <USeparator v-if="filteredVideos.length !== videos.length" />

      <div
        v-if="filteredVideos.length !== videos.length"
        class="flex justify-center mt-8"
      >
        <UButton
          icon="i-lucide-rotate-ccw"
          color="primary"
          variant="ghost"
          size="lg"
          class="rounded-full"
          @click="searchQuery = ''"
        >
          Réinitialiser la recherche
        </UButton>
      </div>
    </div>

    <UAlert
      v-else
      title="Bientôt disponible !"
      color="warning"
      icon="i-lucide-alert-triangle"
      class="mt-8 bg-white border border-zinc-200 shadow-md rounded-xl p-6"
    >
      <template #description>
        Nos tutoriels Laravel 12 sont en cours de production. Renseignez votre email pour être notifié.
      </template>

      <div class="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-2">
        <UInput
          v-model="email"
          placeholder="Votre email"
          type="email"
          class="max-w-sm w-full"
        />
        <UButton
          color="primary"
          class="w-full sm:w-auto"
        >
          S'inscrire
        </UButton>
      </div>
    </UAlert>

    <section class="mt-16 bg-gradient-to-br from-white via-gray-50 to-zinc-100 p-8 rounded-xl shadow-sm">
      <h2 class="text-2xl font-bold text-zinc-800 mb-4">
        Pourquoi apprendre Laravel 12 ?
      </h2>
      <p class="text-zinc-600 mb-3">
        Laravel 12 améliore les performances, la sécurité et la productivité. Cette série de tutoriels vous guide pas à pas...
      </p>
      <p class="text-zinc-600 mb-4">
        <strong>Contenu :</strong> API, auth, Eloquent, déploiement, bonnes pratiques...
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
      <h2 class="text-2xl font-bold text-zinc-800 mb-6">
        Questions fréquentes sur Laravel 12
      </h2>
      <div class="space-y-4">
        <!-- FAQ 1 -->
        <details class="group bg-white p-5 rounded-xl shadow-sm border border-zinc-200 transition-all hover:shadow-md">
          <summary class="flex items-center justify-between cursor-pointer text-zinc-800 font-medium group-open:text-lime-600 transition-colors">
            Quelles sont les nouveautés de Laravel 12 ?
            <svg
              class="w-5 h-5 text-zinc-400 group-open:rotate-180 transition-transform"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <p class="pt-4 text-zinc-600 leading-relaxed">
            Laravel 12 introduit des améliorations de performance, une meilleure gestion des exceptions, des outils de développement améliorés et une compatibilité PHP 8.2+. Nos tutoriels couvrent toutes ces nouveautés en détail.
          </p>
        </details>

        <!-- FAQ 2 -->
        <details class="group bg-white p-5 rounded-xl shadow-sm border border-zinc-200 transition-all hover:shadow-md">
          <summary class="flex items-center justify-between cursor-pointer text-zinc-800 font-medium group-open:text-lime-600 transition-colors">
            Ces tutoriels conviennent-ils aux débutants ?
            <svg
              class="w-5 h-5 text-zinc-400 group-open:rotate-180 transition-transform"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <p class="pt-4 text-zinc-600 leading-relaxed">
            Absolument ! Notre formation Laravel 12 est conçue pour tous les niveaux, du débutant à l'expert. Nous expliquons chaque concept de manière progressive et claire.
          </p>
        </details>

        <!-- FAQ 3 -->
        <details class="group bg-white p-5 rounded-xl shadow-sm border border-zinc-200 transition-all hover:shadow-md">
          <summary class="flex items-center justify-between cursor-pointer text-zinc-800 font-medium group-open:text-lime-600 transition-colors">
            Puis-je télécharger le code source des tutoriels ?
            <svg
              class="w-5 h-5 text-zinc-400 group-open:rotate-180 transition-transform"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <p class="pt-4 text-zinc-600 leading-relaxed">
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
