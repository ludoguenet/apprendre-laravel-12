<template>
  <footer class="bg-white dark:bg-zinc-900 py-8">
    <div class="max-w-3xl mx-auto px-4 text-center">
      <LaravelJutsuLogo
        :animate="false"
      />

      <h2 class="text-lg font-medium text-zinc-500 dark:text-zinc-400 mb-2">
        Formation Laravel 12 en Français
      </h2>

      <p class="text-zinc-500 dark:text-zinc-500 text-sm mb-6">
        Tutoriels vidéo et astuces pour maîtriser Laravel 12.
      </p>

      <div class="flex justify-center gap-4 mb-6">
        <a
          v-for="link in socialLinks"
          :key="link.name"
          :href="link.url"
          target="_blank"
          rel="noopener"
          class="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
          :aria-label="link.label"
        >
          <UIcon
            :name="link.icon"
            class="w-5 h-5"
          />
        </a>
      </div>

      <div class="flex flex-wrap justify-center gap-2 mb-6">
        <span
          v-for="tag in tags"
          :key="tag"
          class="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 text-xs rounded"
        >{{ tag }}</span>
      </div>

      <div class="border-t border-zinc-200 dark:border-zinc-800 pt-4">
        <p class="text-xs text-zinc-400">
          © {{ new Date().getFullYear() }} apprendre-laravel-12.net
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const socialLinks = [
  {
    name: 'youtube',
    url: 'https://www.youtube.com/@LaravelJutsu?sub_confirmation=1',
    icon: 'i-lucide-youtube',
    label: 'YouTube',
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/LaravelJutsu',
    icon: 'i-lucide-twitter',
    label: 'Twitter',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/ludoguenet',
    icon: 'i-lucide-linkedin',
    label: 'LinkedIn',
  },
  {
    name: 'bluesky',
    url: 'https://bsky.app/profile/laraveljutsu.bsky.social',
    icon: 'i-lucide-cloud',
    label: 'Bluesky',
  },
  {
    name: 'github',
    url: 'https://github.com/ludoguenet',
    icon: 'i-lucide-github',
    label: 'GitHub',
  },
]

const tags = [
  'Laravel 12',
  'PHP 8.3',
  'Formation PHP',
  'Tutoriels Backend',
  'Développement Web',
]
</script>
