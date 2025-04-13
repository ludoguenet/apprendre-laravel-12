<template>
  <div class="group bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-xl border border-zinc-100 dark:border-zinc-700 transition-all duration-300 hover:shadow-2xl hover:shadow-lime-500/5 hover:-translate-y-1">
    <div class="p-4 bg-lime-50 dark:bg-zinc-800 rounded-2xl inline-flex mb-5 shadow-sm border border-lime-100 dark:border-zinc-700 group-hover:bg-lime-100 dark:group-hover:bg-zinc-700 transition-colors">
      <UIcon
        :name="icon"
        class="text-lime-600 dark:text-zinc-400 w-6 h-6"
      />
    </div>
    <h3 class="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-3 tracking-tight">
      {{ title }}
    </h3>
    <p class="text-zinc-600 dark:text-zinc-300">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>
