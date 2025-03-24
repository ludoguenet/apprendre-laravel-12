<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <UBreadcrumb
      :items="breadcrumbs"
      :variants="{
        icon: 'i-lucide-chevron-right',
        class: 'mb-6',
      }"
      class="mb-6"
    />

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Main Content Column -->
      <div class="lg:col-span-2">
        <!-- Video Player with aspect ratio wrapper -->
        <div class="relative overflow-hidden rounded-xl shadow-lg bg-gray-900">
          <VideoPlayer
            :youtube-id="video.meta.youtubeId"
            class="w-full"
          />
        </div>

        <!-- Video Info -->
        <div class="mt-6">
          <h1 class="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
            {{ video.title }}
          </h1>
          <div class="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <div class="flex items-center">
              <UIcon
                name="i-lucide-calendar-days"
                class="mr-1.5"
              />
              <span>{{ formatDate(video.meta.date) }}</span>
            </div>
            <div class="flex items-center">
              <UIcon
                name="i-lucide-clock-fading"
                class="mr-1.5"
              />
              <span>{{ video.meta.duration }}</span>
            </div>
            <div
              v-if="video.meta.level"
              class="flex items-center"
            >
              <UIcon
                name="i-lucide-graduation-cap"
                class="mr-1.5"
              />
              <span>{{ video.meta.level }}</span>
            </div>
          </div>

          <!-- Social Share Buttons -->
          <div class="flex space-x-2 mb-6">
            <UButton
              color="secondary"
              variant="soft"
              size="sm"
              icon="i-lucide-twitter"
              :to="`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(video.title)}`"
              target="_blank"
              rel="noopener noreferrer"
            >
              Partager
            </UButton>
            <UButton
              color="secondary"
              variant="soft"
              size="sm"
              icon="i-mdi-linkedin"
              :to="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`"
              target="_blank"
              rel="noopener noreferrer"
            >
              Partager
            </UButton>
          </div>
        </div>

        <!-- Tabs for Description and Links -->
        <UTabs
          :items="items"
          color="primary"
          class="mt-6"
        >
          <template #description>
            <div class="max-w-none pt-4">
              <ContentRenderer :value="video" />
            </div>
          </template>

          <template #links>
            <div class="pt-4">
              <div
                v-if="video.meta.links && video.meta.links.length > 0"
                class="space-y-4"
              >
                <UCard
                  v-for="link in video.meta.links"
                  :key="link.url"
                  class="border-l-4 border-l-lime-200"
                  :ui="{ body: { padding: 'p-4' } }"
                >
                  <div class="flex items-center">
                    <UIcon
                      :name="'i-lucide-external-link'"
                      class="mr-3 text-primary flex-shrink-0"
                    />
                    <div>
                      <a
                        :href="link.url"
                        class="text-primary hover:underline font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {{ link.name }}
                      </a>
                      <p
                        v-if="link.description"
                        class="text-sm text-gray-600 dark:text-gray-400 mt-1"
                      >
                        {{ link.description }}
                      </p>
                    </div>
                  </div>
                </UCard>
              </div>
              <div
                v-else
                class="text-gray-500 italic py-4"
              >
                Aucun lien disponible pour cette vidéo.
              </div>
            </div>
          </template>
        </UTabs>
      </div>

      <!-- Sidebar -->
      <div class="mt-8 lg:mt-0">
        <div class="sticky top-24">
          <h3 class="text-lg font-semibold mb-4 flex items-center">
            <UIcon
              name="i-lucide-list-video"
              class="mr-2 text-primary"
            />
            Vidéos de la playlist
          </h3>

          <div class="space-y-3">
            <a
              v-for="(relatedVideo, index) in relatedVideos"
              :key="relatedVideo.meta.order || index"
              :href="`/videos/${relatedVideo.meta.slug}`"
              class="block transition-all duration-200"
            >
              <UCard
                :key="relatedVideo._path"
                :ui="{
                  base: 'transition-all duration-200 hover:shadow-md',
                  body: { padding: 'p-3' },
                }"
                :to="`/videos${relatedVideo._path}`"
                :class="[
                  relatedVideo.meta.slug === slug
                    ? 'bg-primary-50 border-primary dark:bg-primary-900/20 dark:border-primary-500'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-800/50',
                ]"
              >
                <div class="flex gap-3">
                  <div class="flex-shrink-0 w-24 h-16 relative rounded-lg overflow-hidden">
                    <img
                      :src="relatedVideo.meta.thumbnail"
                      :alt="relatedVideo.title"
                      class="w-full h-full object-cover"
                      loading="lazy"
                    >
                    <div
                      class="absolute inset-0 flex items-center justify-center"
                      :class="relatedVideo.meta.slug === slug ? 'bg-primary/60' : 'bg-black/30'"
                    >
                      <UIcon
                        :name="relatedVideo.meta.slug === slug ? 'i-lucide-circle-play' : 'i-lucide-play'"
                        class="text-white text-lg"
                      />
                    </div>
                    <div
                      v-if="relatedVideo.meta.order"
                      class="absolute top-1 left-1 bg-black/70 text-white text-xs rounded px-1.5 py-0.5"
                    >
                      {{ relatedVideo.meta.order }}
                    </div>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p
                      class="font-medium text-sm line-clamp-2"
                      :class="relatedVideo.meta.slug === slug ? 'text-primary-700 dark:text-primary-400' : ''"
                    >
                      {{ relatedVideo.title }}
                    </p>
                    <div class="flex items-center text-xs text-gray-500 mt-1.5 space-x-2">
                      <span>{{ relatedVideo.meta.duration || '00:00' }}</span>
                      <span
                        v-if="isWatched(relatedVideo.meta.slug)"
                        class="flex items-center text-green-600"
                      >
                        <UIcon
                          name="i-lucide-circle-check"
                          class="mr-0.5"
                        />
                        Vu
                      </span>
                    </div>
                  </div>
                </div>
              </UCard>
            </a>
          </div>

          <!-- CTA Card -->
          <UCard class="mt-6 bg-primary-50 dark:bg-primary-900/20 border-primary">
            <template #header>
              <div class="font-semibold">
                Besoin d'aide avec Laravel ?
              </div>
            </template>
            <p class="text-sm mb-4">
              Réservez une session de mentorat personnalisée pour accélérer votre apprentissage et résoudre vos problèmes techniques.
            </p>
            <UButton
              block
              color="primary"
              to="https://cal.com/laraveljutsu"
              target="_blank"
              rel="noopener noreferrer"
              icon="i-lucide-calendar-check-2"
            >
              Réserver une session de mentorat
            </UButton>
          </UCard>
        </div>
      </div>
    </div>

    <!-- Related Content Section -->
    <section
      v-if="recommendedVideos && recommendedVideos.length > 0"
      class="mt-12 pt-8 border-t"
    >
      <h2 class="text-2xl font-bold mb-6">
        D'autres tutoriels qui pourraient vous intéresser
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <UCard
          v-for="rec in recommendedVideos.slice(0, 3)"
          :key="rec._path"
          class="hover:shadow-lg transition-all duration-200"
          :to="`/videos${rec._path}`"
        >
          <div class="aspect-video rounded-t-lg overflow-hidden relative">
            <img
              :src="rec.meta.thumbnail"
              :alt="rec.title"
              class="w-full h-full object-cover"
              loading="lazy"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
              <span class="text-white font-medium">{{ rec.meta.duration || '00:00' }}</span>
            </div>
          </div>
          <div class="p-4">
            <h3 class="font-semibold mb-2 line-clamp-2">
              {{ rec.title }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              {{ rec.description }}
            </p>
          </div>
        </UCard>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()
const slug = route.params.slug

const video = await queryCollection('content').path('/' + slug).first()

const relatedVideos = await queryCollection('content').all()

const items = [
  { label: 'Description', icon: 'i-lucide-book-open-text', slot: 'description' },
  { label: 'Liens utiles', icon: 'i-lucide-link-2', slot: 'links' },
]

const breadcrumbs = computed(() => {
  return [
    { label: 'Accueil', icon: 'i-lucide-house', to: '/' },
    { label: video.title, icon: 'i-lucide-play-circle', to: route.fullPath },
  ]
})

// Format date to French locale
function formatDate(dateString: string) {
  if (!dateString) return ''
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

// Track watched videos (simplified - would use localStorage or API)
function isWatched(videoSlug: string) {
  if (import.meta.client) {
    const watched = localStorage.getItem('watched-videos')
    return watched ? JSON.parse(watched).includes(videoSlug) : false
  }
  return false
}

// Page URL for sharing
const pageUrl = computed(() => {
  return import.meta.client ? window.location.href : `${config.public.siteUrl}/videos/${slug}`
})

useSeoMeta({
  title: video.title,
  description: video.description,
  ogTitle: video.title,
  ogDescription: video.description,
  ogImage: video.meta.thumbnail,
  ogType: 'video.episode',
  twitterCard: 'summary_large_image',
  articlePublishedTime: video.date,
})

useHead({
  titleTemplate: title => `${title} | Tutoriels Laravel 12`,
})

onMounted(() => {
  if (video) {
    const watched = JSON.parse(localStorage.getItem('watched-videos') || '[]')

    if (!watched.includes(slug)) {
      watched.push(slug)
      localStorage.setItem('watched-videos', JSON.stringify(watched))
    }
  }
})
</script>
