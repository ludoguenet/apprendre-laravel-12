---
title: "Les migrations dans Laravel 12"
order: 5
slug: migrations
description: "Découvrez comment créer et gérer vos tables de base de données avec les migrations Laravel 12, une approche structurée et versionnée pour votre schéma de données."
date: "2025-04-12"
duration: "20:27"
youtubeId: "wiaCNCGnX-o"
repository: "https://github.com/ludoguenet/l12/tree/feat/migrations"
thumbnail: "/images/migrations-laravel.png"
level: "débutant"
isNew: false
tags:
    - migrations
    - database
    - sql
links:
  - name: Documentation Laravel
    icon: 📝
    url: https://laravel.com/docs/12.x/migrations
  - name: Laravel France
    icon: 🇫🇷
    url: https://laravel-france.com
  - name: Code source
    icon: 📎
    url: https://github.com/ludoguenet/l12/tree/feat/migrations
---

# Les migrations dans Laravel 12 : Gérer votre schéma de base de données

Bienvenue dans ce cinquième épisode de notre série sur **Laravel 12** ! 🚀 Aujourd'hui, nous allons explorer les **migrations**, un outil puissant pour gérer vos tables et schémas de base de données.

## Introduction

Dans notre épisode précédent, nous avons vu comment créer un modèle simple pour encapsuler nos données. Maintenant, nous allons aller plus loin en stockant ces données dans une véritable base de données grâce aux migrations Laravel.

Si vous avez suivi nos précédentes vidéos, vous avez remarqué que nous avons des données "hardcodées" dans notre modèle. Ces données devraient vivre dans une base de données, car elles sont susceptibles d'être modifiées, supprimées ou enrichies.

## 📌 Au programme :

- ✅ Comprendre le concept des migrations Laravel
- ✅ Explorer les migrations existantes
- ✅ Créer et exécuter une nouvelle migration
- ✅ Gérer et revenir sur des migrations
- ✅ Insérer des données initiales (seeding)

## Exploration de la base de données existante

Laravel 12 utilise par défaut SQLite comme driver de connexion. C'est une base de données simple qui stocke toutes les données dans un seul fichier, ce qui est idéal pour les projets modestes qui n'ont pas besoin de stocker des millions d'enregistrements.

Regardons d'abord ce qui existe déjà :

```bash
# Le fichier de base de données se trouve dans
/database/database.sqlite
```

Si vous examinez le dossier `/database/migrations`, vous remarquerez que Laravel a déjà créé plusieurs fichiers de migration pour vous, notamment :

- Une migration pour créer la table `users`
- Une migration pour les `password_reset_tokens`
- Une migration pour les `sessions`

Ces migrations ont été exécutées automatiquement si vous avez répondu "oui" lors de l'installation.

## Configuration de la base de données

La configuration de la connexion à la base de données se trouve dans le fichier `.env` à la racine de votre projet. Ce fichier contient des informations sensibles ou variables selon l'environnement, et n'est pas versionné avec Git.

```
DB_CONNECTION=sqlite
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=laravel
# DB_USERNAME=root
# DB_PASSWORD=
```

Si vous souhaitez utiliser MySQL ou un autre système, vous devrez modifier ces paramètres. Par exemple :

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=mon_app_laravel
DB_USERNAME=root
DB_PASSWORD=mon_mot_de_passe
```

## Comprendre les fichiers de migration

Examinons une migration existante :

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
```

Une migration comporte deux méthodes principales :
- `up()` : exécutée lorsqu'on lance la migration
- `down()` : exécutée lorsqu'on revient en arrière

La façade `Schema` permet de créer, modifier ou supprimer des tables. La classe `Blueprint` offre de nombreuses méthodes pour définir différentes colonnes.

## Commandes de migration essentielles

Voici les commandes principales pour gérer vos migrations :

```bash
# Vérifier le statut des migrations
php artisan migrate:status

# Exécuter toutes les migrations non appliquées
php artisan migrate

# Revenir sur le dernier lot de migrations
php artisan migrate:rollback

# Tout supprimer et réexécuter toutes les migrations
php artisan migrate:fresh

# Exécuter les méthodes down puis up de toutes les migrations
php artisan migrate:refresh

# Revenir sur toutes les migrations
php artisan migrate:reset
```

## Modifier une migration existante

Si nous voulons ajouter un champ à la table `users`, nous avons deux options :
1. Modifier la migration existante et tout réexécuter (uniquement en développement)
2. Créer une nouvelle migration pour ajouter la colonne (recommandé)

Pour cet exemple, modifions la migration existante pour ajouter un champ `birth_date` :

```php
$table->id();
$table->string('name');
$table->string('email')->unique();
$table->timestamp('email_verified_at')->nullable();
$table->string('password');
$table->timestamp('birth_date')->nullable(); // Nouvelle colonne
$table->rememberToken();
$table->timestamps();
```

Puis réexécutons tout :

```bash
php artisan migrate:rollback
php artisan migrate
```

## Créer une nouvelle migration pour la table recipes

Créons maintenant une migration pour notre table de recettes :

```bash
php artisan make:migration create_recipes_table
```

Laravel génère automatiquement un fichier avec un timestamp, par exemple `2025_04_13_123456_create_recipes_table.php`. Modifions-le :

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('recipes', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->json('ingredients');
            $table->timestamps();
        });

        // Ajout des données initiales
        $recipes = [
            1 => ['title' => 'Spaghetti Carbonara', 'ingredients' => ['Pâtes', 'Oeufs', 'Fromage', 'Lardons']],
            2 => ['title' => 'Poulet Curry', 'ingredients' => ['Poulet', 'Lait de coco', 'Curry']],
            3 => ['title' => 'Sauté de légumes', 'ingredients' => ['Brocoli', 'Carottes', 'Sauce soja', 'Ail']]
        ];

        foreach ($recipes as $recipe) {
            DB::table('recipes')->insert([
                'title' => $recipe['title'],
                'ingredients' => json_encode($recipe['ingredients'])
            ]);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recipes');
    }
};
```

Exécutons cette migration :

```bash
php artisan migrate
```

Vérifiez le statut :

```bash
php artisan migrate:status
```

Vous verrez que cette nouvelle migration a été exécutée dans un lot (batch) différent des migrations précédentes. Cela signifie que si vous faites un `migrate:rollback`, seule cette migration sera annulée.

## Vérification dans la base de données

En utilisant un outil comme DB Browser for SQLite, vous pouvez vérifier que votre table `recipes` a bien été créée avec les données initiales. Les ingrédients sont stockés au format JSON, ce qui est parfait pour une liste d'éléments.

## Conclusion

Dans cet épisode, nous avons :
- Découvert les migrations Laravel et leur rôle dans la gestion de base de données
- Exploré les commandes artisan pour gérer les migrations
- Créé une nouvelle table pour nos recettes
- Inséré des données initiales directement dans la migration

Les migrations offrent un système de versionnage puissant pour votre schéma de base de données, facilitant la collaboration et les déploiements.

👉 **Dans le prochain épisode, nous verrons comment utiliser Eloquent, l'ORM de Laravel, pour interagir avec notre nouvelle table de recettes !**

> **Note :** Pour aller plus loin, n'hésitez pas à consulter mon article plus détaillé sur Laravel France qui présente un guide complet des migrations pour débutants et avancés.
