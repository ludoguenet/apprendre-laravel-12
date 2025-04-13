<template>
  <div class="min-h-screen">
    <div class="container mx-auto px-4 py-12">
      <!-- Hero Section avec gradient inspiré du style Nuxt -->
      <section class="relative rounded-2xl bg-gradient-to-br from-lime-400 via-lime-500 to-emerald-500 animate-gradient-x p-8 sm:p-12 shadow-xl mb-16 overflow-hidden">
        <div class="absolute right-0 bottom-0 opacity-10">
          <svg
            width="350"
            height="350"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));"
          >
            <polygon
              points="50,0 65,35 100,50 65,65 50,100 35,65 0,50 35,35"
              fill="white"
            />
            <polygon
              points="50,15 60,40 85,50 60,60 50,85 40,60 15,50 40,40"
              fill="white"
              transform="rotate(45,50,50)"
            />
            <circle
              cx="50"
              cy="50"
              r="10"
              fill="#84cc16"
            />
          </svg>
        </div>

        <div class="relative max-w-4xl">
          <!-- Badge de nouveauté avec design amélioré -->
          <div class="flex items-center mb-6">
            <span class="bg-white text-lime-600 text-xs font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wide">
              Nouveau
            </span>
            <span class="text-white/80 text-sm ml-3">Mis à jour {{ currentMonth }} {{ currentYear }}</span>
          </div>

          <!-- Titre principal avec style Nuxt-like -->
          <h1 class="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
            Apprenez Laravel <span class="text-lime-200">12</span>
            <span class="block text-2xl md:text-3xl mt-3 font-medium text-white/90">Le Framework PHP moderne</span>
          </h1>

          <!-- Description revue -->
          <p class="text-white/90 text-lg mb-8 max-w-3xl leading-relaxed">
            Formation complète avec tutoriels vidéo professionnels conçue par
            <span class="font-bold text-white">Laravel Jutsu</span>.
            Du code source aux projets pratiques, apprenez dans les meilleures conditions.
          </p>

          <!-- Badges avec design inspiré de Nuxt -->
          <div class="flex flex-wrap gap-3 mb-8">
            <span class="bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2">
              <UIcon
                name="i-lucide-rocket"
                class="text-lime-200"
              />
              Laravel 12
            </span>
            <span class="bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2">
              <UIcon
                name="i-lucide-globe"
                class="text-lime-200"
              />
              100% en Français
            </span>
            <span class="bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2">
              <UIcon
                name="i-lucide-code"
                class="text-lime-200"
              />
              Code Source Inclus
            </span>
            <span class="bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2">
              <UIcon
                name="i-lucide-refresh-ccw"
                class="text-lime-200"
              />
              {{ currentMonth }} {{ currentYear }}
            </span>
          </div>

          <!-- CTA principale -->
          <div class="mt-10 flex flex-col sm:flex-row gap-4">
            <UButton
              to="/videos/premiers-pas-structure-laravel-12"
              variant="solid"
              size="xl"
              class="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/20"
              icon="i-lucide-play"
            >
              Démarrer la formation
            </UButton>
            <UButton
              to="https://github.com/ludoguenet/l12"
              variant="outline"
              size="xl"
              class="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/20 text-white"
              icon="i-lucide-github"
            >
              Code sur GitHub
            </UButton>
          </div>
        </div>
      </section>

      <div
        v-if="videos.length"
        class="animate-fade-in"
      >
        <!-- Barre de recherche améliorée + Stats -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div class="relative w-full md:max-w-md">
            <UInput
              v-model="searchQuery"
              placeholder="Rechercher un tutoriel..."
              icon="i-lucide-search"
              class="w-full"
              size="lg"
              color="primary"
            />
            <UBadge
              v-if="searchQuery && filteredVideos.length"
              color="primary"
              class="absolute -top-2 -right-2"
            >
              {{ filteredVideos.length }}
            </UBadge>
          </div>

          <div class="flex items-center gap-4">
            <div class="flex items-center gap-2 px-4 py-2 bg-lime-50 rounded-full">
              <UIcon
                name="i-lucide-video"
                class="text-lime-600"
              />
              <span class="font-medium text-lime-700">
                {{ videos.length }} tutoriel<span v-if="videos.length > 1">s</span>
              </span>
            </div>
          </div>
        </div>

        <!-- Grille de vidéos avec design amélioré -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          <VideoCard
            v-for="video in filteredVideos"
            :key="video.path"
            :video="video"
          />
        </div>

        <!-- Réinitialisation de recherche -->
        <div
          v-if="filteredVideos.length !== videos.length"
          class="flex flex-col items-center gap-4 my-12"
        >
          <p class="text-zinc-500">
            <span class="font-medium">{{ filteredVideos.length }}</span> résultat<span v-if="filteredVideos.length > 1">s</span> trouvé<span v-if="filteredVideos.length > 1">s</span> pour "{{ searchQuery }}"
          </p>
          <UButton
            icon="i-lucide-rotate-ccw"
            variant="ghost"
            size="lg"
            class="rounded-full font-medium"
            @click="searchQuery = ''"
          >
            Afficher tous les tutoriels
          </UButton>
        </div>
      </div>

      <!-- Alerte en cas d'absence de vidéos -->
      <UAlert
        v-else
        title="Tutoriels en préparation !"
        color="primary"
        icon="i-lucide-hourglass"
        class="mt-8 bg-white border border-lime-200 shadow-md rounded-xl p-6"
      >
        <template #description>
          <p class="text-zinc-600">
            Nos tutoriels Laravel 12 sont en production. Recevez une notification dès leur disponibilité.
          </p>
        </template>

        <div class="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-2">
          <UInput
            v-model="email"
            placeholder="Votre email"
            type="email"
            class="max-w-sm w-full"
          />
          <UButton
            color="primary"
            class="w-full sm:w-auto font-medium"
            icon="i-lucide-bell"
          >
            Me notifier
          </UButton>
        </div>
      </UAlert>

      <!-- Features Grid - Style Nuxt -->
      <section class="mt-20 mb-16">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-zinc-800 mb-4">
            Pourquoi cette formation Laravel 12 ?
          </h2>
          <p class="text-zinc-600 max-w-2xl mx-auto">
            Découvrez ce qui rend notre approche unique pour maîtriser le framework PHP le plus populaire.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Feature 1 -->
          <div class="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
            <div class="p-3 bg-lime-50 rounded-lg inline-flex mb-4">
              <UIcon
                name="i-lucide-code"
                class="text-lime-600 w-6 h-6"
              />
            </div>
            <h3 class="text-xl font-bold text-zinc-800 mb-2">
              Code source complet
            </h3>
            <p class="text-zinc-600">
              Accédez à tous les exemples de code via GitHub pour adapter facilement les concepts à vos projets.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div class="p-3 bg-lime-50 rounded-lg inline-flex mb-4">
              <UIcon
                name="i-lucide-layers"
                class="text-lime-600 w-6 h-6"
              />
            </div>
            <h3 class="text-xl font-bold text-zinc-800 mb-2">
              Projets complets
            </h3>
            <p class="text-zinc-600">
              Apprenez en construisant des applications réelles: API, dashboards, e-commerce et bien plus encore.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div class="p-3 bg-lime-50 rounded-lg inline-flex mb-4">
              <UIcon
                name="i-lucide-rocket"
                class="text-lime-600 w-6 h-6"
              />
            </div>
            <h3 class="text-xl font-bold text-zinc-800 mb-2">
              Dernières fonctionnalités
            </h3>
            <p class="text-zinc-600">
              Maîtrisez les nouvelles fonctionnalités de Laravel 12 avec des explications claires et détaillées.
            </p>
          </div>

          <!-- Feature 4 -->
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div class="p-3 bg-lime-50 rounded-lg inline-flex mb-4">
              <UIcon
                name="i-lucide-book-open"
                class="text-lime-600 w-6 h-6"
              />
            </div>
            <h3 class="text-xl font-bold text-zinc-800 mb-2">
              Tous niveaux
            </h3>
            <p class="text-zinc-600">
              Du débutant au développeur expérimenté, notre formation s'adapte à votre niveau de compétence.
            </p>
          </div>

          <!-- Feature 5 -->
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div class="p-3 bg-lime-50 rounded-lg inline-flex mb-4">
              <UIcon
                name="i-lucide-globe"
                class="text-lime-600 w-6 h-6"
              />
            </div>
            <h3 class="text-xl font-bold text-zinc-800 mb-2">
              100% en français
            </h3>
            <p class="text-zinc-600">
              Apprenez dans votre langue avec des explications claires et une terminologie adaptée.
            </p>
          </div>

          <!-- Feature 6 -->
          <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div class="p-3 bg-lime-50 rounded-lg inline-flex mb-4">
              <UIcon
                name="i-lucide-refresh-ccw"
                class="text-lime-600 w-6 h-6"
              />
            </div>
            <h3 class="text-xl font-bold text-zinc-800 mb-2">
              Mises à jour régulières
            </h3>
            <p class="text-zinc-600">
              Notre contenu évolue avec le framework pour vous garantir des connaissances toujours actuelles.
            </p>
          </div>
        </div>
      </section>

      <!-- FAQ avec style amélioré -->
      <section class="mt-16 mb-12">
        <div class="text-center mb-10">
          <h2 class="text-3xl font-bold text-zinc-800 mb-3">
            Questions fréquentes
          </h2>
          <p class="text-zinc-600 max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur notre formation Laravel 12
          </p>
        </div>

        <div class="max-w-3xl mx-auto space-y-4">
          <!-- FAQ 1 -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <details class="group">
              <summary class="flex items-center justify-between cursor-pointer p-6 text-zinc-800 font-medium group-open:text-lime-600 transition-colors">
                Quelles sont les nouveautés de Laravel 12 ?
                <UIcon
                  name="i-lucide-chevron-down"
                  class="text-zinc-400 group-open:rotate-180 transition-transform w-5 h-5"
                />
              </summary>
              <div class="px-6 pb-6 text-zinc-600 leading-relaxed border-t border-gray-100 pt-4">
                <p>
                  Laravel 12 introduit des améliorations majeures :
                </p>
                <ul class="mt-2 list-disc list-inside space-y-1">
                  <li>Performances optimisées avec le nouveau moteur Vite</li>
                  <li>Gestion d'exceptions améliorée</li>
                  <li>Outils de développement modernisés</li>
                  <li>Compatibilité PHP 8.2+</li>
                  <li>Nouvelle API pour les interactions avec la base de données</li>
                </ul>
                <p class="mt-2">
                  Nos tutoriels couvrent toutes ces nouveautés en détail.
                </p>
              </div>
            </details>
          </div>

          <!-- FAQ 2 -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <details class="group">
              <summary class="flex items-center justify-between cursor-pointer p-6 text-zinc-800 font-medium group-open:text-lime-600 transition-colors">
                Ces tutoriels conviennent-ils aux débutants ?
                <UIcon
                  name="i-lucide-chevron-down"
                  class="text-zinc-400 group-open:rotate-180 transition-transform w-5 h-5"
                />
              </summary>
              <div class="px-6 pb-6 text-zinc-600 leading-relaxed border-t border-gray-100 pt-4">
                <p>
                  Absolument ! Notre formation Laravel 12 est conçue pour tous les niveaux, du débutant à l'expert.
                </p>
                <p class="mt-2">
                  Nous décomposons chaque concept progressivement, avec des explications claires et des exemples concrets. Les débutants peuvent commencer par les bases et avancer à leur rythme.
                </p>
              </div>
            </details>
          </div>

          <!-- FAQ 3 -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <details class="group">
              <summary class="flex items-center justify-between cursor-pointer p-6 text-zinc-800 font-medium group-open:text-lime-600 transition-colors">
                Puis-je télécharger le code source des tutoriels ?
                <UIcon
                  name="i-lucide-chevron-down"
                  class="text-zinc-400 group-open:rotate-180 transition-transform w-5 h-5"
                />
              </summary>
              <div class="px-6 pb-6 text-zinc-600 leading-relaxed border-t border-gray-100 pt-4">
                <p>
                  Oui, chaque tutoriel inclut l'accès au code source complet via GitHub, permettant de suivre facilement et d'adapter les exemples à vos propres projets.
                </p>
                <p class="mt-2">
                  Les repositories sont organisés par chapitre et contiennent des tags pour chaque étape importante, vous permettant de suivre l'évolution du code.
                </p>
              </div>
            </details>
          </div>

          <!-- FAQ 4 (Ajouté) -->
          <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <details class="group">
              <summary class="flex items-center justify-between cursor-pointer p-6 text-zinc-800 font-medium group-open:text-lime-600 transition-colors">
                À quelle fréquence ajoutez-vous de nouveaux tutoriels ?
                <UIcon
                  name="i-lucide-chevron-down"
                  class="text-zinc-400 group-open:rotate-180 transition-transform w-5 h-5"
                />
              </summary>
              <div class="px-6 pb-6 text-zinc-600 leading-relaxed border-t border-gray-100 pt-4">
                <p>
                  Nous publions de nouveaux tutoriels chaque semaine. Notre objectif est de couvrir l'ensemble de l'écosystème Laravel 12 avec une approche systématique et approfondie.
                </p>
                <p class="mt-2">
                  Abonnez-vous à notre chaîne YouTube pour être notifié de chaque nouvelle publication.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <!-- CTA moderne & épuré -->
      <section class="mt-24 rounded-2xl bg-white/80 backdrop-blur-md border border-zinc-200 p-10 sm:p-16 shadow-lg text-center overflow-hidden relative">
        <h2 class="text-3xl sm:text-4xl font-semibold text-neutral-900 mb-4">
          Prêt à maîtriser Laravel 12 ?
        </h2>

        <p class="text-neutral-500 max-w-xl mx-auto mb-8 text-base sm:text-lg">
          Des milliers de développeurs ont déjà progressé avec nos formations. Rejoignez la communauté et passez au niveau supérieur.
        </p>

        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <UButton
            to="/videos/premiers-pas-structure-laravel-12"
            color="primary"
            size="xl"
            class="font-medium shadow-sm px-6 py-3"
            icon="i-lucide-play-circle"
          >
            Commencer maintenant
          </UButton>

          <UButton
            to="https://discord.gg/invite/cuFxTjH"
            target="_blank"
            rel="noopener noreferrer"
            variant="soft"
            color="primary"
            size="xl"
            class="font-medium px-6 py-3"
            icon="i-lucide-message-circle"
          >
            Rejoindre le Discord
          </UButton>
        </div>

        <p class="text-neutral-400 text-sm mt-6">
          Par <span class="font-medium text-neutral-600">Laravel Jutsu</span>, le Samouraï du PHP depuis 2016
        </p>
      </section>
    </div>
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
