<template>
  <footer class="bg-gradient-to-br from-white to-zinc-100 dark:from-zinc-900 dark:to-zinc-950">
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-20 lg:px-8">
      <div class="flex flex-col items-center text-center">
        <LaravelJutsuLogo
          class="h-10 text-lime-500 dark:text-zinc-400 mb-6"
          :animate="false"
        />

        <div class="max-w-3xl mx-auto mb-8">
          <h2 class="text-xl font-bold text-zinc-400 dark:text-zinc-500 mb-4">
            Formation Laravel 12 en Français - Tutoriels et Astuces
          </h2>
          <p class="text-zinc-400 dark:text-zinc-500 mb-6">
            Découvrez notre plateforme d'apprentissage Laravel 12 avec des tutoriels vidéo modernes et des astuces de développement.
            Parfait pour les débutants et développeurs confirmés souhaitant maîtriser le framework PHP le plus populaire.
          </p>
          <p class="text-zinc-400 dark:text-zinc-500">
            Apprendre Laravel 12 n'a jamais été aussi simple : tutoriels progressifs, exemples pratiques, et techniques avancées
            pour créer des applications web robustes et performantes. Rejoignez la communauté Laravel Jutsu dès aujourd'hui !
          </p>
        </div>

        <div class="flex gap-x-6 mb-12">
          <a
            href="https://www.youtube.com/@LaravelJutsu?sub_confirmation=1"
            target="_blank"
            rel="noopener"
            class="text-gray-400 hover:text-red-500 dark:text-zinc-500 dark:hover:text-red-400 transition-colors"
            aria-label="Suivez-nous sur YouTube pour des tutoriels Laravel 12 en vidéo"
          >
            <UIcon
              name="i-lucide-youtube"
              class="size-6"
            />
          </a>

          <a
            href="https://twitter.com/LaravelJutsu"
            target="_blank"
            rel="noopener"
            class="text-gray-400 hover:text-blue-400 dark:text-zinc-500 dark:hover:text-blue-400 transition-colors"
            aria-label="Suivez-nous sur Twitter pour les dernières actualités Laravel 12"
          >
            <UIcon
              name="i-lucide-twitter"
              class="size-6"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/ludoguenet"
            target="_blank"
            rel="noopener"
            class="text-gray-400 hover:text-blue-500 dark:text-zinc-500 dark:hover:text-blue-400 transition-colors"
            aria-label="Connectez-vous sur LinkedIn pour le réseau professionnel Laravel"
          >
            <UIcon
              name="i-lucide-linkedin"
              class="size-6"
            />
          </a>

          <a
            href="https://bsky.app/profile/laraveljutsu.bsky.social"
            target="_blank"
            rel="noopener"
            class="text-gray-400 hover:text-sky-400 dark:text-zinc-500 dark:hover:text-sky-400 transition-colors"
            aria-label="Suivez-nous sur Bluesky"
          >
            <UIcon
              name="i-lucide-cloud"
              class="size-6"
            />
          </a>

          <a
            href="https://github.com/ludoguenet"
            target="_blank"
            rel="noopener"
            class="text-gray-400 hover:text-gray-300 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors"
            aria-label="Accédez à nos codes sources Laravel 12 sur GitHub"
          >
            <UIcon
              name="i-lucide-github"
              class="size-6"
            />
          </a>
        </div>

        <div class="flex flex-wrap justify-center gap-3 mb-10">
          <span class="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-lime-500 dark:text-zinc-400 text-xs rounded-full">Laravel 12</span>
          <span class="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-lime-500 dark:text-zinc-400 text-xs rounded-full">PHP 8.3</span>
          <span class="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-lime-500 dark:text-zinc-400 text-xs rounded-full">Formation PHP</span>
          <span class="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-lime-500 dark:text-zinc-400 text-xs rounded-full">Tutoriels Backend</span>
          <span class="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-lime-500 dark:text-zinc-400 text-xs rounded-full">Développement Web</span>
          <span class="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-lime-500 dark:text-zinc-400 text-xs rounded-full">Apprendre Laravel</span>
          <span class="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-lime-500 dark:text-zinc-400 text-xs rounded-full">Framework PHP</span>
        </div>
      </div>

      <div class="border-t border-white/10 dark:border-zinc-800 pt-8">
        <p class="text-sm text-gray-400 dark:text-zinc-500 text-center">
          © {{ new Date().getFullYear() }} apprendre-laravel-12.net — Fait avec 🍡 par
          <a
            href="#"
            class="text-lime-400 dark:text-zinc-400 hover:underline"
            aria-label="Laravel Jutsu - Expert en formation Laravel 12"
          >Laravel Jutsu</a>
        </p>
        <p class="text-xs text-gray-500 dark:text-zinc-600 text-center mt-2">
          Le site de référence pour apprendre Laravel 12 en français avec des tutoriels modernes et efficaces
        </p>
      </div>
    </div>
  </footer>
</template>
