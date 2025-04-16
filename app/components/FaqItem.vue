<template>
  <div class="py-4">
    <dt>
      <button
        type="button"
        class="flex w-full items-start justify-between text-left"
        :aria-expanded="open.toString()"
        :aria-controls="`faq-${keyId}`"
        @click="open = !open"
      >
        <span>{{ question }}</span>
        <UIcon
          :name="open ? 'i-lucide-minus' : 'i-lucide-plus'"
          class="w-4 h-4 ml-2"
        />
      </button>
    </dt>
    <dd
      v-show="open"
      :id="`faq-${keyId}`"
      class="mt-2 text-gray-600 dark:text-gray-400"
    >
      <div v-html="answer" />
    </dd>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  question: string
  answer: string
  keyId: number
}>()

const open = ref(false)
</script>
