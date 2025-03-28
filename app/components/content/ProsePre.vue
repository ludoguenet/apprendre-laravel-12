<template>
  <pre
    :class="$props.class"
    class="my-4 bg-zinc-800 rounded-lg p-5 overflow-x-auto text-zinc-100 shadow-md"
  ><slot /></pre>
</template>

<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
})
</script>

  <style>
  pre code .line {
    display: block;
  }
  </style>
