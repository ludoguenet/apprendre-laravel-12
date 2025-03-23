<template>
  <div class="aspect-video w-full bg-black rounded-lg overflow-hidden">
    <iframe
      class="w-full h-full"
      :src="`https://www.youtube.com/embed/${youtubeId}?rel=0`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  youtubeId: {
    type: String,
    required: true,
  },
})
</script>
