<template>
  <section class="mt-28 mb-24">
    <div class="text-center mb-20">
      <span class="inline-block px-4 py-1 bg-lime-100 dark:bg-zinc-800 text-lime-700 dark:text-zinc-300 rounded-full text-sm font-medium border border-lime-200 dark:border-zinc-700">
        Pourquoi nous choisir
      </span>

      <h2 class="text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight mt-4 mb-3">
        Une formation Laravel 12 complète
      </h2>

      <p class="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed">
        Découvrez ce qui rend notre approche unique pour maîtriser le framework PHP le plus populaire.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <FeatureCard
        v-for="(feature, i) in features"
        :key="i"
        v-bind="feature"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    icon: 'i-lucide-code',
    title: 'Code source complet',
    description: 'Accédez à tous les exemples de code via GitHub pour adapter facilement les concepts à vos projets.',
  },
  {
    icon: 'i-lucide-layers',
    title: 'Projets complets',
    description: 'Apprenez en construisant des applications réelles: API, dashboards, e-commerce et bien plus encore.',
  },
  {
    icon: 'i-lucide-rocket',
    title: 'Dernières fonctionnalités',
    description: 'Maîtrisez les nouvelles fonctionnalités de Laravel 12 avec des explications claires et détaillées.',
  },
  {
    icon: 'i-lucide-book-open',
    title: 'Tous niveaux',
    description: 'Du débutant au développeur expérimenté, notre formation s\'adapte à votre niveau de compétence.',
  },
  {
    icon: 'i-lucide-globe',
    title: '100% en français',
    description: 'Apprenez dans votre langue avec des explications claires et une terminologie adaptée.',
  },
  {
    icon: 'i-lucide-refresh-ccw',
    title: 'Mises à jour régulières',
    description: 'Notre contenu évolue avec le framework pour vous garantir des connaissances toujours actuelles.',
  },
]
</script>
