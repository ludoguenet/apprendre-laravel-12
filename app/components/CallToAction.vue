<template>
  <section class="bg-white dark:bg-zinc-900">
    <div class="mx-auto max-w-8xl mt-28 mb-24 sm:px-6 lg:px-8">
      <div class="relative isolate overflow-hidden bg-white dark:bg-zinc-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:items-center lg:gap-x-16 lg:px-24 lg:pt-0">
        <svg
          viewBox="0 0 1024 1024"
          class="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#gradient-lime)"
            fill-opacity="0.6"
          />
          <defs>
            <radialGradient id="gradient-lime">
              <stop stop-color="#84cc16" />
              <stop
                offset="1"
                stop-color="#10b981"
              />
            </radialGradient>
          </defs>
        </svg>

        <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <span class="inline-block px-4 py-1 bg-lime-100 text-lime-700 dark:bg-white/10 dark:text-lime-300 rounded-full text-sm font-semibold ring-1 ring-lime-300/30 dark:ring-white/20 backdrop-blur">
            La formation Laravel 12 ultime
          </span>

          <h2 class="mt-6 text-3xl font-black tracking-tight sm:text-5xl text-zinc-900 dark:text-white">
            Prêt à maîtriser Laravel 12 ?
          </h2>

          <p class="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            Des milliers de développeurs ont déjà progressé avec nos formations. Rejoignez la communauté et passez au niveau supérieur.
          </p>

          <div class="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <UButton
              to="/videos/premiers-pas-structure-laravel-12"
              size="sm"
              class="bg-lime-600 text-white hover:bg-lime-700 rounded-full font-bold px-6 py-4 shadow-md hover:shadow-lg transition-all duration-300"
              icon="i-lucide-play-circle"
            >
              Commencer maintenant
            </UButton>

            <UButton
              to="https://discord.gg/invite/cuFxTjH"
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              class="bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:bg-white/10 dark:text-white hover:dark:bg-white/20 rounded-full font-bold px-6 py-4 border border-zinc-200 dark:border-white/20 backdrop-blur shadow-sm transition-all duration-300"
              icon="i-lucide-message-circle"
            >
              Rejoindre le Discord
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
