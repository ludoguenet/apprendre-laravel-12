<template>
  <div class="relative inline-block size-22">
    <span
      v-if="animate && isHovered"
      class="absolute inset-0 -m-1 rounded-full bg-lime-400 opacity-25 animate-ping"
      aria-hidden="true"
    />
    <NuxtImg
      src="/images/logo.png"
      class="relative z-10 rounded-full w-full h-full object-cover"
      alt="Laravel Jutsu Logo"
      :aria-label="logoLabel"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    />
  </div>
</template>

<script setup lang="ts">
const isHovered = ref(false)

withDefaults(
  defineProps<{
    animate?: boolean
    logoLabel?: string
  }>(),
  {
    animate: true,
    logoLabel: 'Laravel Jutsu',
  },
)
</script>
