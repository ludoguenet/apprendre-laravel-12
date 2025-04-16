<template>
  <NuxtLink
    :to="`/videos/${video.slug}`"
    class="group"
  >
    <UCard class="h-full border-0 dark:bg-zinc-800 overflow-hidden">
      <div class="flex flex-col h-full">
        <div class="aspect-video bg-gray-100 dark:bg-zinc-900 relative">
          <img
            :src="video.thumbnail"
            :alt="video.title"
            class="w-full h-full object-cover"
            loading="lazy"
          >
          <div class="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded flex items-center gap-1">
            <UIcon
              name="i-lucide-clock"
              size="xs"
            />
            <span>{{ video.duration || '00:00' }}</span>
          </div>
          <div
            v-if="video.isNew"
            class="absolute top-2 left-2 bg-lime-500 text-white text-xs px-2 py-0.5 rounded"
          >
            Nouveau
          </div>
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/30 transition-opacity">
            <div class="w-8 h-8 bg-lime-500 dark:bg-zinc-500 rounded-full flex items-center justify-center">
              <UIcon
                name="i-lucide-play"
                class="text-white"
              />
            </div>
          </div>
        </div>

        <div class="p-4 flex-1 flex flex-col">
          <h3 class="text-base font-medium line-clamp-2 group-hover:text-lime-500 dark:text-zinc-100">
            {{ video.title }}
          </h3>

          <p class="text-gray-600 dark:text-zinc-400 text-sm line-clamp-2 mt-1 mb-2">
            {{ video.description }}
          </p>

          <div class="flex flex-wrap gap-1 mt-auto">
            <UBadge
              v-for="tag in video.tags"
              :key="tag"
              variant="soft"
              size="xs"
              color="neutral"
              class="dark:bg-zinc-800"
            >
              {{ tag }}
            </UBadge>
          </div>

          <div class="mt-3 pt-3 border-t border-gray-100 dark:border-zinc-700 flex justify-between items-center">
            <p class="text-xs text-gray-500 dark:text-zinc-500 flex items-center gap-1">
              <UIcon
                name="i-lucide-calendar"
                size="xs"
              />
              {{ formatDate(video.date) }}
            </p>
            <UBadge
              v-if="video.level"
              size="xs"
              :color="difficultyColor"
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
