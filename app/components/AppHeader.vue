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
      <a
        href="https://www.youtube.com/channel/UC36hi0WMeiR8HpUy-A2s4vQ?sub_confirmation=1"
        target="_blank"
        rel="noopener"
        class="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full shadow transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          class="size-5"
        >
          <path
            d="M23.5 6.5s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C17.3 3 12 3 12 3h-.1s-5.3 0-8.6.2c-.4 0-1.3.1-2.1 1C.7 4.9.5 6.5.5 6.5S0 8.3 0 10.1v1.8c0 1.8.5 3.6.5 3.6s.2 1.6.8 2.3c.8.9 1.9.9 2.3 1C6.7 19 12 19 12 19s5.3 0 8.6-.2c.4 0 1.3-.1 2.1-1 .6-.7.8-2.3.8-2.3s.5-1.8.5-3.6v-1.8c0-1.8-.5-3.6-.5-3.6zM9.6 14.7v-5.4l5.2 2.7-5.2 2.7z"
          />
        </svg>
        <span>S’abonner</span>
      </a>
    </div>
  </header>
</template>
