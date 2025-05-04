<template>
  <div class="min-h-screen bg-white dark:bg-zinc-900 flex flex-col" role="document">
    <AppHeader />

    <main class="flex-grow container mx-auto px-4 py-8" role="main" aria-label="Contenu principal">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
