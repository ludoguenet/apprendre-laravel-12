<template>
  <div class="min-h-screen bg-white dark:bg-zinc-900">
    <AppHeader />

    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
