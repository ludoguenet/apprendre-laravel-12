<template>
  <div class="py-6 first:pt-0 last:pb-0">
    <dt>
      <button
        type="button"
        class="flex w-full items-start justify-between text-left text-zinc-900 dark:text-white font-semibold text-base/7 transition-colors"
        :aria-expanded="open.toString()"
        :aria-controls="`faq-${keyId}`"
        @click="open = !open"
      >
        <span v-html="question" />
        <span class="ml-6 flex h-7 items-center">
          <UIcon
            v-if="open"
            name="i-lucide-minus"
            class="w-5 h-5 transition-transform"
          />
          <UIcon
            v-else
            name="i-lucide-plus"
            class="w-5 h-5 transition-transform"
          />
        </span>
      </button>
    </dt>
    <dd
      v-show="open"
      :id="`faq-${keyId}`"
      class="mt-3 pr-2 text-base/7 text-zinc-600 dark:text-zinc-300"
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
