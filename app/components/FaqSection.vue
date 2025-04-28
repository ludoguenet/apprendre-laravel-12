<template>
  <section
    class="py-12 mt-16"
    aria-labelledby="faq-title"
  >
    <div class="max-w-3xl mx-auto px-4">
      <div class="text-center mb-8">
        <h2
          id="faq-title"
          class="text-2xl font-bold dark:text-zinc-100"
        >
          Questions fréquentes
        </h2>
        <p class="mt-2 text-gray-600 dark:text-zinc-400">
          Les réponses aux questions sur notre formation Laravel 12
        </p>
      </div>

      <dl
        class="divide-y dark:divide-zinc-800"
        role="list"
        aria-labelledby="faq-title"
      >
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
interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: 'Quelles sont les nouveautés de Laravel 12 ?',
    answer: `
      <p>Laravel 12 introduit des améliorations majeures :</p>
      <ul class="mt-2 list-disc pl-5">
        <li>Performances optimisées avec Vite</li>
        <li>Gestion d'exceptions améliorée</li>
        <li>Outils de développement modernisés</li>
        <li>Compatibilité PHP 8.2+</li>
        <li>Nouvelle API pour la base de données</li>
      </ul>
    `,
  },
  {
    question: 'Ces tutoriels conviennent-ils aux débutants ?',
    answer: `
      <p>Oui, notre formation est conçue pour tous les niveaux. Nous expliquons chaque concept progressivement avec des exemples concrets.</p>
    `,
  },
  {
    question: 'Puis-je télécharger le code source des tutoriels ?',
    answer: `
      <p>Oui, chaque tutoriel inclut l'accès au code source complet via GitHub.</p>
    `,
  },
  {
    question: 'À quelle fréquence ajoutez-vous de nouveaux tutoriels ?',
    answer: `
      <p>Nous publions de nouveaux tutoriels chaque semaine pour couvrir l'écosystème Laravel 12.</p>
    `,
  },
]
</script>
