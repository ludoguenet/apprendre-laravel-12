<template>
  <div class="flex flex-col items-center gap-4 my-12">
    <p class="text-zinc-500 dark:text-zinc-400">
      <span class="font-medium">{{ count }}</span> résultat<span v-if="count > 1">s</span> trouvé<span v-if="count > 1">s</span> pour "{{ query }}"
    </p>
    <UButton
      icon="i-lucide-rotate-ccw"
      variant="ghost"
      size="lg"
      class="rounded-full font-medium"
      aria-label="Réinitialiser la recherche"
      @click="$emit('reset')"
    >
      Afficher tous les tutoriels
    </UButton>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  count: number
  query: string
}>()
defineEmits(['reset'])
</script>
