<template>
  <NuxtLink
    :to="`/videos/${video.slug}`"
    class="group"
  >
    <UCard
      class="transition-all duration-300 hover:shadow-xl h-full border-0 overflow-hidden dark:bg-zinc-800 dark:hover:shadow-zinc-900/40"
    >
      <div class="flex flex-col h-full">
        <div class="aspect-video bg-gray-100 dark:bg-zinc-900 relative overflow-hidden">
          <img
            :src="video.thumbnail"
            :alt="video.title"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          >
          <div class="absolute bottom-3 right-3 bg-black/75 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1 backdrop-blur-sm">
            <UIcon
              name="i-lucide-clock"
              size="xs"
            />
            <span>{{ video.duration || '00:00' }}</span>
          </div>
          <div
            v-if="video.isNew"
            class="absolute top-3 left-3 bg-lime-500 dark:bg-zinc-600 text-white text-xs px-2 py-1 rounded-md"
          >
            Nouveau
          </div>
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 transition-opacity duration-300">
            <div class="size-10 bg-lime-500 dark:bg-zinc-500 opacity-90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <UIcon
                name="i-lucide-play"
                size="lg"
                class="text-white"
              />
            </div>
          </div>
        </div>

        <div class="p-5 flex-1 flex flex-col">
          <div class="flex items-start justify-between mb-2 gap-2">
            <h3 class="text-lg font-bold line-clamp-2 group-hover:text-lime-500 dark:group-hover:text-zinc-400 transition-colors duration-300 dark:text-zinc-100">
              {{ video.title }}
            </h3>
          </div>

          <p class="text-gray-600 dark:text-zinc-400 text-sm line-clamp-2 mb-3">{{ video.description }}</p>

          <div class="flex flex-wrap gap-2 mt-auto">
            <UBadge
              v-for="tag in video.tags"
              :key="tag"
              variant="soft"
              size="xs"
              color="neutral"
              class="group-hover:bg-gray-200 dark:group-hover:bg-zinc-700 transition-colors duration-300 dark:bg-zinc-800"
            >
              {{ tag }}
            </UBadge>
          </div>

          <div class="mt-4 pt-4 border-t border-gray-100 dark:border-zinc-700 flex justify-between items-center">
            <p class="text-xs text-gray-500 dark:text-zinc-500 flex items-center gap-1">
              <UIcon
                name="i-lucide-calendar"
                size="xs"
              />
              {{ formatDate(video.date) }}
            </p>
            <p
              class="text-xs text-gray-500 dark:text-zinc-500 flex items-center gap-1"
            >
              <UBadge
                v-if="video.level"
                size="sm"
                :color="difficultyColor"
              >
                {{ video.level }}
              </UBadge>
            </p>
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
