---
title: "Les Seeders"
order: 10
slug: seeder
description: "Apprenez à utiliser les seeders avec les factories pour générer et organiser vos fausses données de test de manière propre et structurée."
date: "2025-06-15"
duration: "13:08"
youtubeId: "dhuVY0nKKqs"
repository: "https://github.com/ludoguenet/l12/tree/feat/seeder"
thumbnail: "/images/seeder.png"
level: "intermédiaire"
isNew: true
tags:
    - seeder
    - factory
    - database
    - testing
    - eloquent
    - faker
links:
  - name: Documentation Laravel
    icon: 📝
    url: https://laravel.com/docs/12.x/seeding
  - name: Laravel France
    icon: 🇫🇷
    url: https://laravel-france.com
  - name: Code source
    icon: 📎
    url: https://github.com/ludoguenet/l12/tree/feat/seeder
---

# Les Seeders : Organiser la génération de données

Bienvenue dans ce dixième épisode de notre série sur **Laravel 12** ! 🚀 Aujourd'hui, nous allons enfin parler des **seeders** et voir comment les utiliser avec les factories pour générer des fausses données de manière organisée.

## Introduction

Précédemment, nous avons mis en place les factories avec Laravel. Aujourd'hui, nous allons utiliser les **seeders** et les **factories** ensemble pour pouvoir générer assez facilement des fausses données et organiser la façon dont nous voulons les générer.

Les seeders peuvent nous servir pour plusieurs choses :
- **Environnement de développement** : Peupler notre base de données pour avoir quelque chose de prêt pour tester
- **Staging** : Créer un environnement de test réaliste
- **Tests automatisés** : Recréer un environnement contrôlé pour nos tests
- **Production** (moins recommandé) : Restaurer des sauvegardes ou initialiser des données

## 📌 Au programme :

- ✅ Comprendre le rôle des seeders
- ✅ Découvrir le DatabaseSeeder principal
- ✅ Créer des seeders personnalisés
- ✅ Améliorer les factories avec des états
- ✅ Organiser la génération de données complexes
- ✅ Utiliser les collections et le design pattern fluent

## Le fichier DatabaseSeeder principal

Dans le dossier `database/seeders`, nous trouvons un fichier `DatabaseSeeder.php`. C'est une classe qui hérite de `Seeder` et contient une seule méthode `run()` :

```php
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
```

Cette méthode `run()` est appelée à chaque fois qu'on exécute :

```bash
php artisan db:seed
```

## Créer un seeder personnalisé

Pour organiser nos données proprement, créons un seeder spécifique pour nos recettes avec ingrédients :

```bash
php artisan make:seeder RecipesWithIngredientsSeeder
```

Cette commande génère automatiquement une classe dans le dossier `seeders` :

```php
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class RecipesWithIngredientsSeeder extends Seeder
{
    public function run(): void
    {
        // Logique de seeding ici
    }
}
```

## Organiser les seeders dans DatabaseSeeder

Pour une approche propre, nous allons appeler notre seeder personnalisé depuis le `DatabaseSeeder` principal :

```php
public function run(): void
{
    $this->call([
        RecipesWithIngredientsSeeder::class,
    ]);
}
```

**Avantages de cette approche :**
- Séparation claire des responsabilités
- Aperçu direct de ce qui sera seedé
- Facilité de maintenance avec plusieurs seeders
- Possibilité d'exécuter des seeders individuellement

## Améliorer les factories avec des états

Avant de remplir notre seeder, améliorons notre `RecipeFactory`. Actuellement, nous avons :

```php
public function definition(): array
{
    return [
        'title' => fake()->words(3, true),
        'user_id' => fake()->boolean() ? User::factory()->create()->id : null,
    ];
}
```

Le problème ici est le `boolean()` qui donne une chance sur deux d'avoir un utilisateur ou `null`. Pour garantir qu'une recette ait toujours un utilisateur, nous pouvons créer un **état** personnalisé.

### Créer un état "withUser"

Ajoutons une méthode à notre `RecipeFactory` :

```php
public function withUser(): static
{
    return $this->state(fn (array $attributes) => [
        'user_id' => User::factory()->create()->id,
    ]);
}
```

Maintenant, nous pouvons utiliser cette méthode pour nous assurer qu'une recette a toujours un utilisateur :

```php
Recipe::factory()->withUser()->create();
```

La méthode `state()` permet d'écraser certains attributs selon nos besoins spécifiques.

## Implémenter le seeder RecipesWithIngredientsSeeder

Voici l'implémentation complète de notre seeder :

```php
<?php

namespace Database\Seeders;

use App\Models\Ingredient;
use App\Models\Recipe;
use Illuminate\Database\Seeder;

class RecipesWithIngredientsSeeder extends Seeder
{
    public function run(): void
    {
        // Créer 50 ingrédients
        $ingredients = Ingredient::factory()
            ->count(50)
            ->create();

        // Créer 20 recettes avec utilisateurs et ingrédients aléatoires
        Recipe::factory()
            ->count(20)
            ->withUser()
            ->create()
            ->each(function ($recipe) use ($ingredients) {
                // Attacher entre 2 et 6 ingrédients aléatoires
                $randomIngredients = $ingredients
                    ->random(random_int(2, 6))
                    ->pluck('id');

                $recipe->ingredients()->attach($randomIngredients);
            });
    }
}
```

## Comprendre le design pattern fluent

Le code ci-dessus illustre le **design pattern fluent** de Laravel. Chaque méthode renvoie un type spécifique qui permet de chaîner d'autres méthodes :

1. `Recipe::factory()` → Instance de RecipeFactory
2. `->count(20)` → Toujours RecipeFactory
3. `->withUser()` → Toujours RecipeFactory
4. `->create()` → Collection de modèles Recipe
5. `->each()` → Méthode de Collection Laravel

Cette approche est très satisfaisante pour le développeur et évite de stocker des variables intermédiaires.

## Méthodes utiles des collections Laravel

### La méthode `each()`

Similaire à un `foreach` amélioré, elle permet de boucler sur chaque élément d'une collection :

```php
$recipes->each(function ($recipe) {
    // Traitement pour chaque recette
});
```

### La méthode `random()`

Permet de piocher aléatoirement un ou plusieurs éléments :

```php
// Piocher 3 ingrédients aléatoires
$ingredients->random(3);

// Nombre variable entre 2 et 6
$ingredients->random(random_int(2, 6));
```

### La méthode `pluck()`

Extrait une colonne spécifique de chaque modèle et retourne un tableau :

```php
// Si on a 3 ingrédients avec les IDs 12, 45, 78
$ingredients->pluck('id'); // [12, 45, 78]
```

## Exécuter les seeders

Pour exécuter nos seeders, nous avons plusieurs options :

### Option 1 : Seeder seul
```bash
php artisan db:seed
```

### Option 2 : Migration + Seeder
```bash
php artisan migrate:fresh --seed
```

Cette commande :
1. Supprime toutes les tables (`drop`)
2. Recrée toutes les migrations
3. Exécute automatiquement les seeders

### Option 3 : Seeder spécifique
```bash
php artisan db:seed --class=RecipesWithIngredientsSeeder
```

## Résultat attendu

Après avoir exécuté nos seeders, nous obtenons :
- **50 ingrédients** générés avec des noms aléatoires
- **20 recettes** avec des titres réalistes
- Chaque recette est **liée à un utilisateur**
- Chaque recette a **entre 2 et 6 ingrédients** attachés aléatoirement
- Les relations many-to-many sont correctement configurées

## Bonnes pratiques

### 1. Séparation des responsabilités
Créez un seeder par entité ou groupe d'entités logiques :
```php
$this->call([
    UserSeeder::class,
    CategorySeeder::class,
    RecipesWithIngredientsSeeder::class,
]);
```

### 2. Utilisation des états de factory
Préférez les états personnalisés plutôt que la logique conditionnelle :
```php
// ✅ Bon
Recipe::factory()->withUser()->create();

// ❌ Moins bon
Recipe::factory()->create(['user_id' => User::factory()->create()->id]);
```

### 3. Gestion des dépendances
Créez d'abord les modèles dont dépendent les autres :
```php
// Les utilisateurs d'abord
$users = User::factory(10)->create();

// Puis les recettes qui dépendent des utilisateurs
Recipe::factory(20)->withUser()->create();
```

## Cas d'usage avancés

### Seeders conditionnels
```php
public function run(): void
{
    if (app()->environment('local', 'staging')) {
        $this->call([
            DemoDataSeeder::class,
        ]);
    }
}
```

### Seeders avec progress bar
```php
public function run(): void
{
    $this->command->info('Creating ingredients...');
    Ingredient::factory(100)->create();

    $this->command->info('Creating recipes...');
    Recipe::factory(50)->withUser()->create();
}
```

## Conclusion

Les seeders, combinés aux factories, offrent une solution puissante et élégante pour :
- **Générer des données de test** cohérentes et réalistes
- **Organiser la création** de données complexes avec des relations
- **Automatiser l'initialisation** de votre environnement de développement
- **Faciliter les tests** en créant des jeux de données contrôlés

Le design pattern fluent de Laravel rend le code expressif et agréable à écrire, tout en gardant une logique claire et maintenable.

## Prochaines étapes

Dans le prochain épisode, nous verrons comment utiliser ces données seedées dans nos vues et contrôleurs, et comment optimiser les requêtes avec les relations Eloquent.

---

*💡 **Astuce** : N'hésitez pas à expérimenter avec différentes combinaisons de factories et d'états pour créer des données qui correspondent exactement à vos besoins de test !*
