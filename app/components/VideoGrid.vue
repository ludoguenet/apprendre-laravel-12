<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
    <VideoCard
      v-for="video in videos"
      :key="video.path"
      :video="video"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{ videos: Array<object> }>()
</script>
