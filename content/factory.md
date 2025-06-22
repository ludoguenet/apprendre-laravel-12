---
title: "Les Factories"
order: 9
slug: factory
description: "Découvrez comment utiliser les factories pour générer facilement des données de test basées sur vos modèles Eloquent."
date: "2025-05-31"
duration: "17:05"
youtubeId: "dNPRRlSJMYE"
repository: "https://github.com/ludoguenet/l12/tree/feat/factory"
thumbnail: "/images/factory.png"
level: "intermédiaire"
isNew: false
tags:
    - factory
    - eloquent
    - faker
    - testing
    - database
    - seeding
links:
  - name: Documentation Laravel
    icon: 📝
    url: https://laravel.com/docs/12.x/eloquent-factories
  - name: Laravel France
    icon: 🇫🇷
    url: https://laravel-france.com
  - name: Code source
    icon: 📎
    url: https://github.com/ludoguenet/l12/tree/feat/factory
---

# Les Factories : Générer des données de test

Bienvenue dans ce neuvième épisode de notre série sur **Laravel 12** ! 🚀 Aujourd'hui, nous allons explorer les factories, un outil puissant pour générer des données de test basées sur vos modèles.

## Introduction

Les factories sont une solution élégante au problème de génération de données cohérentes. Plutôt que de créer manuellement des recipes, des ingrédients ou des utilisateurs dans nos migrations, nous allons utiliser le **Design Pattern Factory** pour automatiser ce processus.

## 📌 Au programme :

- ✅ Comprendre le concept des factories
- ✅ Utiliser le trait HasFactory
- ✅ Créer des factories personnalisées
- ✅ Utiliser Faker pour des données aléatoires
- ✅ Tester nos factories avec Tinker

## Le trait HasFactory

Avant de créer nos factories, nos modèles doivent implémenter le trait `HasFactory`. Ce trait nous donne accès à la méthode statique `factory()`.

```php
use Illuminate\Database\Eloquent\Factories\HasFactory;

class User extends Authenticatable
{
    use HasFactory;
    // ... reste du modèle
}
```

## Comprendre une factory existante

Laravel fournit déjà une `UserFactory`. Examinons sa structure :

```php
class UserFactory extends Factory
{
    protected static ?string $password;

    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => static::$password ??= Hash::make('password'),
            'remember_token' => Str::random(10),
        ];
    }
}
```

La méthode `definition()` retourne un tableau qui fait le mapping avec notre table users.

## Utiliser les factories avec Tinker

Pour tester notre factory, utilisons Tinker :

```bash
php artisan tinker
```

Puis créons un utilisateur :

```php
User::factory()->create();
```

Pour créer plusieurs utilisateurs :

```php
User::factory()->count(10)->create();
```

## Créer une factory pour Recipe

Créons maintenant notre `RecipeFactory` :

```bash
php artisan make:factory RecipeFactory
```

Dans `database/factories/RecipeFactory.php` :

```php
public function definition(): array
{
    $titleWordCount = fake()->randomInt(3, 9);
    $title = fake()->words($titleWordCount, true);

    return [
        'title' => Str::title($title),
        'user_id' => fake()->boolean()
            ? User::factory()->create()->id
            : null,
    ];
}
```

**Important** : N'oubliez pas d'ajouter le trait `HasFactory` dans votre modèle Recipe :

```php
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Recipe extends Model
{
    use HasFactory;
    // ... reste du modèle
}
```

## Optimisation avec le helper Str

Pour embellir nos titres, nous utilisons le helper `Str` de Laravel :

```php
'title' => Str::title(fake()->words($titleWordCount, true)),
```

Cela applique une majuscule en début de chaque mot pour plus de consistance.

## Gestion des relations optionnelles

Pour le `user_id`, nous utilisons une logique conditionnelle :

```php
'user_id' => fake()->boolean()
    ? User::factory()->create()->id
    : null,
```

Cela donne 50% de chance d'avoir une recette liée à un utilisateur, et 50% de chance d'avoir une valeur null.

## Créer une factory pour Ingredient

Créons également notre `IngredientFactory` :

```bash
php artisan make:factory IngredientFactory
```

Pour un ingrédient, nous n'avons besoin que d'un nom :

```php
public function definition(): array
{
    return [
        'name' => fake()->word(),
    ];
}
```

N'oubliez pas le trait `HasFactory` dans le modèle Ingredient :

```php
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Ingredient extends Model
{
    use HasFactory;
    // ... reste du modèle
}
```

## Création rapide avec l'option -mF

Pour créer un modèle avec sa migration et sa factory en une seule commande :

```bash
php artisan make:model Recipe -mF
```

Cette option génère automatiquement :
- Le modèle avec le trait `HasFactory`
- La migration
- La factory avec les annotations PHPStan

## Tester nos factories

Testons nos nouvelles factories avec Tinker :

```php
// Créer une recette
Recipe::factory()->create();

// Créer un ingrédient
Ingredient::factory()->create();

// En cas d'erreur de namespace dans Tinker
\App\Models\Ingredient::factory()->create();
```

## Le helper fake()

Le helper `fake()` utilise la librairie **Faker** pour générer des données aléatoires :

- `fake()->name()` : génère un nom
- `fake()->email()` : génère un email
- `fake()->word()` : génère un mot
- `fake()->words(3, true)` : génère 3 mots en string
- `fake()->randomInt(3, 9)` : génère un entier entre 3 et 9
- `fake()->boolean()` : génère true ou false (50% chacun)

## Conclusion

Les factories nous permettent de :
1. **Générer des données cohérentes** pour nos tests
2. **Éviter la duplication** de code de création de données
3. **Utiliser des données réalistes** grâce à Faker
4. **Automatiser** le processus de peuplement de la base

Dans notre prochain épisode, nous verrons comment utiliser les **seeders** pour peupler automatiquement notre base de données avec ces factories !

> **Astuce** : Les factories sont particulièrement utiles pour les tests automatisés, car elles garantissent des données cohérentes à chaque exécution.
