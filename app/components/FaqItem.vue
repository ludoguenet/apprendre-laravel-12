<template>
  <div class="py-4">
    <dt>
      <button
        type="button"
        class="flex w-full items-start justify-between text-left dark:text-zinc-100"
        :aria-expanded="open"
        :aria-controls="`faq-answer-${keyId}`"
        @click="toggleFaq"
      >
        <span>{{ question }}</span>
        <UIcon
          :name="open ? 'i-lucide-minus' : 'i-lucide-plus'"
          class="w-4 h-4 ml-2 text-lime-500 dark:text-lime-400"
          aria-hidden="true"
        />
      </button>
    </dt>
    <dd
      v-show="open"
      :id="`faq-answer-${keyId}`"
      class="mt-2 text-gray-600 dark:text-zinc-400"
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

function toggleFaq() {
  open.value = !open.value
}
</script>
