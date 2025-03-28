<template>
  <div
    class="relative size-14"
  >
    <div class="absolute inset-0 bg-white/90 rounded-lg rotate-70 hover:animate-shuriken">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="size-3/4 text-lime-500">
          <div class="relative w-full h-full">
            <div
              class="absolute inset-0 bg-lime-500"
              style="clip-path: polygon(50% 0%, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0% 50%, 35% 35%);"
            />
            <div
              class="absolute inset-0 bg-lime-400"
              style="clip-path: polygon(50% 15%, 60% 40%, 85% 50%, 60% 60%, 50% 85%, 40% 60%, 15% 50%, 40% 40%); transform: rotate(45deg);"
            />
            <div class="absolute inset-[30%] bg-white rounded-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  size?: number
}>()
</script>
