<template>
  <header class="bg-white shadow-sm border-b border-zinc-100">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo + Titre -->
      <NuxtLink
        to="/"
        class="flex items-center space-x-3 group"
      >
        <LaravelJutsuLogo class="w-8 h-8 text-lime-600 transition-transform group-hover:scale-105" />
        <div class="leading-tight">
          <p class="text-xl font-extrabold text-zinc-800">Apprendre Laravel 12</p>
          <p class="text-xs text-zinc-400 italic font-medium">Par Laravel Jutsu</p>
        </div>
      </NuxtLink>

      <!-- Call-to-action YouTube -->
      <NuxtLink
        to="https://www.youtube.com/channel/UC36hi0WMeiR8HpUy-A2s4vQ?sub_confirmation=1"
        external
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-red-600 hover:bg-red-700 text-white rounded-full shadow transition-all"
      >
        <UIcon
          name="i-lucide-youtube"
          class="size-4"
        />
        <span>S’abonner</span>
      </NuxtLink>
    </div>
  </header>
</template>
