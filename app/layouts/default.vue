<template>
  <div class="min-h-screen bg-white dark:bg-zinc-900 flex flex-col">
    <AppHeader />

    <main class="flex-grow container mx-auto px-4 py-8">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
