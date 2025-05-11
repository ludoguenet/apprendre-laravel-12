<template>
  <div>
    <UButton
      :icon="isDark ? 'i-lucide-sun' : 'i-lucide-moon'"
      color="neutral"
      variant="ghost"
      :aria-label="isDark ? 'Passer en mode clair' : 'Passer en mode sombre'"
      role="switch"
      :aria-checked="isDark"
      tabindex="0"
      @click="$emit('toggleDark')"
      @keydown.enter="$emit('toggleDark')"
      @keydown.space.prevent="$emit('toggleDark')"
    >
      <template #icon>
        <UIcon
          :name="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
          class="size-5"
          aria-hidden="true"
        />
      </template>
    </UButton>
  </div>
</template>

<script setup lang="ts">
defineProps({
  isDark: Boolean,
})
defineEmits(['toggleDark'])
</script>
