<template>
  <div>
    <UButton
      :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
      color="neutral"
      variant="ghost"
      @click="$emit('toggleDark')"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  isDark: Boolean,
})
defineEmits(['toggleDark'])
</script>
