<template>
  <header
    class="fixed top-0 left-0 right-0 z-50"
    role="banner"
  >
    <div class="absolute inset-0 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-b border-neutral-200/50 dark:border-zinc-800/50" />
    <div class="relative container mx-auto px-4 sm:px-6 py-4">
      <nav
        class="flex items-center justify-between"
        role="navigation"
        aria-label="Navigation principale"
      >
        <a
          href="/"
          class="flex items-center space-x-3 group relative z-0"
          aria-label="Accueil Laravel Jutsu"
        >
          <LaravelJutsuLogo aria-hidden="true" />

          <div>
            <h1 class="text-lg sm:text-xl font-bold bg-gradient-to-r from-neutral-950 to-neutral-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
              Apprendre Laravel 12
            </h1>
            <p class="text-xs sm:text-sm text-neutral-500 dark:text-zinc-400">par Laravel Jutsu</p>
          </div>
        </a>

        <UButton
          color="neutral"
          variant="ghost"
          class="md:hidden"
          :aria-label="isOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
          :aria-expanded="isOpen"
          aria-controls="mobile-menu"
          aria-haspopup="true"
          @click="isOpen = !isOpen"
        >
          <UIcon
            :name="isOpen ? 'i-lucide-x' : 'i-lucide-menu'"
            class="size-6"
            aria-hidden="true"
          />
        </UButton>

        <div
          id="mobile-menu"
          role="region"
          aria-label="Menu de navigation"
          class="fixed inset-0 bg-white/80 backdrop-blur-xl md:relative md:bg-transparent md:backdrop-blur-none transition-all duration-300 z-10"
          :class="[
            isOpen ? 'translate-x-0 dark:bg-zinc-900/80' : 'translate-x-full md:translate-x-0',
            'md:flex md:flex-wrap md:justify-end md:items-center md:gap-2 md:w-auto',
          ]"
        >
          <UButton
            color="neutral"
            variant="ghost"
            class="absolute top-4 right-4 md:hidden"
            aria-label="Fermer le menu"
            @click="isOpen = false"
          >
            <UIcon
              name="i-lucide-x"
              class="size-6"
              aria-hidden="true"
            />
          </UButton>
          <div
            class="flex flex-col md:flex-row items-center justify-center md:justify-end gap-4 p-4 md:p-0 min-h-screen md:min-h-0"
            role="group"
            aria-label="Actions"
          >
            <a
              href="https://www.youtube.com/channel/UC36hi0WMeiR8HpUy-A2s4vQ?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white bg-gradient-to-br from-red-500 to-red-600 rounded-lg shadow-lg shadow-red-500/20 transition-all duration-300 hover:shadow-red-500/30 hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
              aria-label="S'abonner à notre chaîne YouTube (s'ouvre dans un nouvel onglet)"
            >
              <UIcon
                name="i-lucide-youtube"
                class="size-4"
                aria-hidden="true"
              />
              <span>S'abonner</span>
            </a>

            <a
              href="https://discord.gg/invite/cuFxTjH"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:shadow-emerald-500/30 hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
              aria-label="Rejoindre notre communauté Discord (s'ouvre dans un nouvel onglet)"
            >
              <UIcon
                name="i-lucide-paw-print"
                class="size-4"
                aria-hidden="true"
              />
              <span>Rejoindre la communauté</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const isOpen = ref(false)
</script>
