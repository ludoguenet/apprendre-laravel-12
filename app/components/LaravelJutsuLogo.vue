<template>
  <div
    class="relative aspect-square"
    :style="{ width: (size || 56) + 'px', height: (size || 56) + 'px' }"
  >
    <div
      class="absolute inset-0 bg-transparent rounded-lg rotate-70"
      :class="{ 'hover:animate-shuriken': animate }"
    >
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="w-3/4 h-3/4 text-lime-500">
          <div class="relative w-full h-full">
            <div
              class="absolute inset-0 bg-lime-500"
              style="clip-path: polygon(50% 0%, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0% 50%, 35% 35%);"
            />
            <div
              class="absolute inset-0 bg-lime-400"
              style="clip-path: polygon(50% 15%, 60% 40%, 85% 50%, 60% 60%, 50% 85%, 40% 60%, 15% 50%, 40% 40%); transform: rotate(45deg);"
            />
            <div class="absolute w-1/3 h-1/3 bg-white rounded-full top-1/3 left-1/3" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: number
    animate?: boolean
  }>(),
  {
    size: 56,
    animate: true,
  },
)
</script>
