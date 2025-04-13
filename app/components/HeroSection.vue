<template>
  <section class="relative overflow-hidden py-24 sm:py-32 bg-gradient-to-br from-lime-500 to-emerald-400 dark:from-zinc-800 dark:to-zinc-700 shadow-2xl rounded-3xl mb-16 px-6 sm:px-12">
    <div class="absolute inset-0 -z-10">
      <div class="absolute right-0 bottom-0 opacity-10 pointer-events-none">
        <svg
          width="350"
          height="350"
          viewBox="0 0 100 100"
          fill="none"
          aria-hidden="true"
        >
          <polygon
            points="50,0 65,35 100,50 65,65 50,100 35,65 0,50 35,35"
            fill="white"
          />
          <polygon
            points="50,15 60,40 85,50 60,60 50,85 40,60 15,50 40,40"
            fill="white"
            transform="rotate(45,50,50)"
          />

          <circle
            cx="50"
            cy="50"
            r="18"
            fill="white"
          />
        </svg>
      </div>
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-white/10 dark:bg-zinc-300/10 rounded-full blur-3xl" />
      <div class="absolute -bottom-32 -left-32 w-96 h-96 bg-white/10 dark:bg-zinc-300/10 rounded-full blur-3xl" />
    </div>

    <div class="absolute bottom-0 right-0 size-96 opacity-25">
      <div class="relative aspect-square w-full h-full">
        <div class="absolute inset-0 bg-transparent rounded-lg rotate-70">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-3/4 h-3/4 text-white">
              <div class="relative w-full h-full">
                <div
                  class="absolute inset-0 bg-white"
                  style="clip-path: polygon(50% 0%, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0% 50%, 35% 35%);"
                />
                <div
                  class="absolute inset-0 bg-white"
                  style="clip-path: polygon(50% 15%, 60% 40%, 85% 50%, 60% 60%, 50% 85%, 40% 60%, 15% 50%, 40% 40%); transform: rotate(45deg);"
                />
                <div class="absolute w-1/3 h-1/3 bg-white rounded-full top-1/3 left-1/3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative mx-auto max-w-4xl text-center">
      <div class="mb-6 flex justify-center items-center gap-3">
        <span class="bg-white/90 text-lime-700 dark:bg-zinc-200/90 dark:text-zinc-700 text-xs font-bold px-3 py-1.5 rounded-full shadow ring-1 ring-white/20 dark:ring-zinc-300/20 uppercase tracking-wider">Nouveau</span>
        <span class="text-white/90 dark:text-zinc-100/90 text-sm font-medium">Mis à jour {{ currentMonth }} {{ currentYear }}</span>
      </div>

      <h1 class="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white dark:text-zinc-100 text-balance leading-tight">
        Apprenez Laravel
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-lime-200 to-white dark:from-zinc-300 dark:to-white">12</span>
      </h1>

      <p class="mt-4 text-2xl sm:text-3xl font-medium text-white/90 dark:text-zinc-100/90 text-pretty">
        Le Framework PHP moderne
      </p>

      <p class="mt-6 text-lg sm:text-xl text-white/90 dark:text-zinc-100/90 font-medium max-w-2xl mx-auto leading-relaxed">
        Une formation complète avec tutoriels vidéo professionnels signée
        <span class="font-bold text-white dark:text-zinc-100">Laravel Jutsu</span>. Progressez à travers du code source clair et des projets concrets.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  currentMonth: string
  currentYear: number
}>()
</script>
