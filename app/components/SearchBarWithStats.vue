<template>
  <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
    <div class="relative w-full md:max-w-md">
      <UInput
        v-model="model"
        placeholder="Rechercher un tutoriel..."
        icon="i-lucide-search"
        class="w-full rounded-full shadow-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 transition-all duration-200"
        size="lg"
        color="primary"
        aria-label="Rechercher dans les tutoriels"
      />
      <UBadge
        v-if="model && filteredCount"
        class="absolute -top-2 -right-2 text-xs px-2 py-0.5 font-bold bg-lime-500 text-white rounded-full shadow-[0_0_10px_rgba(163,230,53,0.8)] dark:bg-lime-600"
        aria-live="polite"
        aria-atomic="true"
      >
        {{ filteredCount }}
      </UBadge>
    </div>

    <div class="flex items-center gap-4">
      <div class="flex items-center gap-2 px-3 py-1.5 bg-lime-100 dark:bg-lime-900 text-lime-800 dark:text-lime-300 rounded-md border border-lime-200 dark:border-lime-700">
        <UIcon
          name="i-lucide-video"
          class="text-lime-600 dark:text-lime-400"
        />
        <span class="text-sm font-medium">
          {{ totalCount }} tutoriel<span v-if="totalCount > 1">s</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const model = defineModel<string>()

defineProps<{
  totalCount: number
  filteredCount: number
}>()
</script>
