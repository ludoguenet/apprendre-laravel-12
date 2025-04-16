<template>
  <div class="flex flex-col md:flex-row gap-4 py-6">
    <div class="relative w-[300px] md:w-[400px]">
      <UInput
        v-model="model"
        placeholder="Rechercher un tutoriel..."
        icon="i-lucide-search"
        class="w-full rounded-md bg-white dark:bg-zinc-800"
      />
    </div>

    <div class="flex items-center">
      <div class="flex items-center gap-1 text-sm">
        <UIcon name="i-lucide-video" />
        <span>
          {{ filteredCount }} tutoriel<span v-if="filteredCount > 1">s</span>
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
