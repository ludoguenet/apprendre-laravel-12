<template>
  <header class="bg-white shadow">
    <div class="container mx-auto p-4 flex justify-between items-center">
      <NuxtLink
        to="/"
        class="flex items-center space-x-2"
      >
        <LaravelJutsuLogo />
        <div class="flex flex-col">
          <p
            class="text-xl font-bold text-laravel"
            role="heading"
            aria-level="2"
          >
            Apprendre Laravel 12
          </p>
          <p class="text-xs text-zinc-400 italic font-medium mt-1">
            Par Laravel Jutsu
          </p>
        </div>
      </NuxtLink>

      <!-- Bouton YouTube -->
      <NuxtLink
        to="https://www.youtube.com/channel/UC36hi0WMeiR8HpUy-A2s4vQ?sub_confirmation=1"
        external
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-sm bg-red-600 hover:bg-red-700 text-white rounded-full shadow transition"
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
