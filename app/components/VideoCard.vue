<template>
  <NuxtLink
    :to="`/videos/${video.slug}`"
    class="group"
    :aria-label="`Voir la vidéo: ${video.title}`"
  >
    <UCard
      class="h-full border-0 dark:bg-zinc-800 overflow-hidden"
      role="article"
    >
      <div class="flex flex-col h-full">
        <div class="aspect-video bg-gray-100 dark:bg-zinc-900 relative">
          <img
            :src="video.thumbnail"
            :alt="`Miniature de la vidéo: ${video.title}`"
            class="w-full h-full object-cover"
            loading="lazy"
          >
          <div
            class="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded flex items-center gap-1"
            aria-label="Durée de la vidéo"
          >
            <UIcon
              name="i-lucide-clock"
              size="xs"
              aria-hidden="true"
            />
            <span>{{ video.duration || '00:00' }}</span>
          </div>
          <div
            v-if="video.isNew"
            class="absolute top-2 left-2 bg-rose-500 dark:bg-red-600 text-white text-sm px-2 py-0.5 rounded flex items-center gap-1"
            aria-label="Nouveau contenu"
          >
            <UIcon
              name="i-lucide-badge-alert"
              class="text-white"
            />
            Nouveauté
          </div>
          <div
            class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/30 transition-opacity"
            aria-hidden="true"
          >
            <div class="w-8 h-8 bg-lime-500 dark:bg-lime-600 rounded-full flex items-center justify-center">
              <UIcon
                name="i-lucide-play"
                class="text-white"
              />
            </div>
          </div>
        </div>

        <div class="p-4 flex-1 flex flex-col">
          <h3 class="text-base font-medium line-clamp-2 group-hover:text-lime-500 dark:text-zinc-100 dark:group-hover:text-lime-400">
            {{ video.title }}
          </h3>

          <p class="text-gray-600 dark:text-zinc-400 text-sm line-clamp-2 mt-1 mb-2">
            {{ video.description }}
          </p>

          <div
            class="flex flex-wrap gap-2 mt-auto"
            aria-label="Tags"
          >
            <UBadge
              v-for="tag in video.tags"
              :key="tag"
              variant="soft"
              size="sm"
              color="neutral"
              class="dark:bg-zinc-700 dark:text-zinc-200 px-3 py-1.5 font-medium"
            >
              {{ tag }}
            </UBadge>
          </div>

          <div class="mt-3 pt-3 border-t border-gray-100 dark:border-zinc-700 flex justify-between items-center">
            <p
              class="text-xs text-gray-500 dark:text-zinc-500 flex items-center gap-1"
              aria-label="Date de publication"
            >
              <UIcon
                name="i-lucide-calendar"
                size="xs"
                aria-hidden="true"
              />
              {{ formatDate(video.date) }}
            </p>
            <UBadge
              v-if="video.level"
              size="sm"
              :color="difficultyColor"
              :aria-label="`Niveau: ${video.level}`"
              class="px-3 py-1.5 font-medium dark:text-white"
            >
              {{ video.level }}
            </UBadge>
          </div>
        </div>
      </div>
    </UCard>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  video: {
    type: Object,
    required: true,
  },
})

function formatDate(dateString: string): string {
  if (!dateString) return ''
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

const difficultyColor = computed(() => {
  switch (props.video.level) {
    case 'débutant': return 'primary'
    case 'intermédiaire': return 'secondary'
    case 'avancé': return 'warning'
    case 'expert': return 'error'
    default: return 'gray'
  }
})
</script>
