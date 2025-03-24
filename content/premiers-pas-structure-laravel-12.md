---
title: "Premiers pas et structure de Laravel 12"
order: 1
slug: premiers-pas-structure-laravel-12
description: "Découvrez comment installer, configurer Laravel 12 ainsi que sa structure dans cette première vidéo de la série."
date: "2025-03-21"
duration: "26:54"
youtubeId: "xzoSH_7QF3E"
repository: "https://github.com/ludoguenet/l12/tree/feat/introduction"
thumbnail: "/images/premiers-pas-structure-laravel-12.png"
level: "débutant"
isNew: true
tags:
    - php
links:
  - name: Documentation Laravel
    icon: 📜
    url: https://laravel.com/docs
  - name: Code source
    icon: 📂
    url: https://github.com/ludoguenet/l12/tree/feat/introduction
  - name: Rejoignez la communauté
    icon: 🗣
    url: https://discord.gg/invite/cuFxTjH
---

# Apprendre les Bases de Laravel : Installation et Structure du Projet

## Introduction

Bonjour à toutes et à tous, et bienvenue dans cette première vidéo d'une longue série pour apprendre les bases de Laravel. Laravel est un framework PHP qui offre de nombreux outils pour construire rapidement des applications web, que ce soit pour le plaisir ou à des fins professionnelles. Cette série a pour objectif de vous guider pas à pas dans l'apprentissage et la maîtrise des bases de Laravel, afin que vous puissiez, à la fin, créer une application complète et la mettre en ligne.

## Prérequis

Avant de commencer, il est important d'avoir certaines connaissances de base :

- **HTML** : Pour la structure des pages web.
- **JavaScript (JS)** : Pour dynamiser vos pages.
- **CSS** : Pour la mise en forme.
- **PHP** : Les bases en PHP sont essentielles, ainsi qu'une compréhension de la programmation orientée objet (POO).

Si vous n'avez pas ces bases, il pourrait être difficile de comprendre certains concepts, même si Laravel est accessible sans être un expert.

## Environnement de Développement

Pour développer avec Laravel, vous aurez besoin d'un environnement de développement web en PHP. Voici quelques options :

- **Linux Mint** : Utilisation de Valet pour Linux Mint, qui permet de gérer les versions de PHP et de créer des applications web avec des virtual hosts.
- **Laravel Herd** : Une solution tout-en-un pour Windows et Mac, qui inclut Composer et d'autres outils nécessaires.
- **Autres options** : XAMPP (Windows), MAMP (Mac), ou LAMP (Linux) pour ceux qui préfèrent une configuration plus personnalisée.

### Installation de Composer

Composer est un gestionnaire de dépendances pour PHP. Il est essentiel pour installer Laravel et ses dépendances. Assurez-vous d'avoir Composer installé sur votre machine.

### Installation de Node.js

Node.js sera utile plus tard pour gérer les assets frontaux (CSS, JavaScript) via des commandes comme `npm install` et `npm run build`. Bien que ce ne soit pas indispensable dès le début, il est recommandé de l'installer.

## Installation de Laravel

Pour installer un nouveau projet Laravel, ouvrez une fenêtre de commande et utilisez la commande suivante :

```bash
laravel new myapp
```

Cette commande crée une nouvelle application Laravel nommée myapp. Lors de l'installation, vous aurez plusieurs options :

- **Starter Kit** : Laravel propose plusieurs kits de démarrage (comme Livewire, Vue, React). Pour cette série, nous n'utiliserons aucun starter kit, car nous partons de zéro.
- **Base de données** : Par défaut, Laravel propose SQLite, qui est une base de données basée sur un fichier, idéale pour le démarrage. Vous pouvez également choisir MySQL si vous préférez.

Une fois l'installation terminée, vous pouvez accéder à votre application via `myapp.test` (si vous utilisez Valet).

## Structure du Projet Laravel

Voici un aperçu de la structure d'un projet Laravel :

### Dossiers Principaux

- **app** : Contient les contrôleurs, les modèles, et les providers. C'est le cœur de votre application.
  - **Http/Controllers** : Les contrôleurs gèrent les requêtes HTTP.
  - **Models** : Les modèles représentent les données de votre application.
  - **Providers** : Les providers sont spécifiques à Laravel et servent à enregistrer des services.
- **bootstrap** : Contient la configuration de l'application, notamment le routage, les middlewares, et les exceptions.
- **config** : Contient les fichiers de configuration pour les différents services de l'application.
- **database** : Contient les migrations, les factories, et les seeders pour la base de données.
  - **Migrations** : Permettent de versionner les modifications de la base de données.
  - **Factories** : Permettent de générer des données de test.
  - **Seeders** : Permettent de peupler la base de données avec des données initiales.
- **public** : Contient les assets frontaux (CSS, JavaScript, images) et le fichier `index.php`, qui est le point d'entrée de l'application.
- **resources** : Contient les vues (views), les fichiers CSS, et JavaScript.
  - **views** : Les vues sont les templates HTML de votre application.
  - **css et js** : Les fichiers CSS et JavaScript qui seront compilés et minifiés.
- **routes** : Contient les fichiers de routes.
  - **web.php** : Les routes accessibles via le navigateur.
  - **console.php** : Les routes pour les commandes artisan.
- **storage** : Contient les fichiers stockés par l'application (logs, cache, sessions).
- **tests** : Contient les tests de l'application.
- **vendor** : Contient les dépendances PHP installées via Composer.

### Fichiers Importants

- **.env** : Contient les variables d'environnement spécifiques à l'application.
- **composer.json et composer.lock** : Contiennent les dépendances PHP.
- **package.json** : Contient les dépendances JavaScript.
- **phpunit.xml** : Configuration pour les tests PHPUnit.
- **vite.config.js** : Configuration pour le bundling des assets frontaux.

## Conclusion

Vous avez maintenant une vue d'ensemble de la structure d'un projet Laravel. Dans les prochaines vidéos, nous approfondirons chaque aspect pour vous permettre de maîtriser ce framework puissant. À bientôt pour la suite de cette série !
