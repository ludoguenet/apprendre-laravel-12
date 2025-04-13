<template>
  <section class="bg-white dark:bg-zinc-900 mt-28 mb-24">
    <div class="mx-auto max-w-4xl px-6">
      <div class="text-center">
        <span class="inline-block px-4 py-1 bg-lime-100 dark:bg-lime-900 text-lime-700 dark:text-lime-300 rounded-full text-sm font-medium border border-lime-200 dark:border-lime-700">
          Questions fréquentes
        </span>
        <h2 class="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          Tout ce que vous devez savoir
        </h2>
        <p class="mt-4 text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
          Les réponses aux questions les plus posées sur notre formation Laravel 12
        </p>
      </div>

      <dl class="mt-16 divide-y divide-zinc-200 dark:divide-zinc-700">
        <FaqItem
          v-for="(faq, i) in faqs"
          :key="i"
          :key-id="i"
          v-bind="faq"
        />
      </dl>
    </div>
  </section>
</template>

<script setup lang="ts">
const faqs = [
  {
    question: 'Quelles sont les nouveautés de Laravel 12 ?',
    answer: `
          <p>Laravel 12 introduit des améliorations majeures :</p>
          <ul class="mt-3 list-disc list-inside space-y-1.5">
            <li>Performances optimisées avec le nouveau moteur Vite</li>
            <li>Gestion d'exceptions améliorée</li>
            <li>Outils de développement modernisés</li>
            <li>Compatibilité PHP 8.2+</li>
            <li>Nouvelle API pour les interactions avec la base de données</li>
          </ul>
          <p class="mt-3">Nos tutoriels couvrent toutes ces nouveautés en détail.</p>
        `,
  },
  {
    question: 'Ces tutoriels conviennent-ils aux débutants ?',
    answer: `
          <p>Absolument ! Notre formation Laravel 12 est conçue pour tous les niveaux, du débutant à l'expert.</p>
          <p class="mt-3">Nous décomposons chaque concept progressivement, avec des explications claires et des exemples concrets.</p>
        `,
  },
  {
    question: 'Puis-je télécharger le code source des tutoriels ?',
    answer: `
          <p>Oui, chaque tutoriel inclut l'accès au code source complet via GitHub, permettant de suivre facilement et d'adapter les exemples à vos propres projets.</p>
        `,
  },
  {
    question: 'À quelle fréquence ajoutez-vous de nouveaux tutoriels ?',
    answer: `
          <p>Nous publions de nouveaux tutoriels chaque semaine. Notre objectif est de couvrir l'ensemble de l'écosystème Laravel 12 avec une approche systématique et approfondie.</p>
        `,
  },
]
</script>
