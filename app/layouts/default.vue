<template>
  <div class="min-h-screen bg-gray-50">
    <AppHeader />

    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>

    <footer class="py-8 px-4 bg-gray-100">
      <div class="container mx-auto text-center text-gray-500 text-sm">
        <p>© {{ new Date().getFullYear() }} - apprendre-laravel-12.net</p>
      </div>
    </footer>
  </div>
</template>
