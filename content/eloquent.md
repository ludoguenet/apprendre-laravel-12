---
title: "Eloquent dans Laravel 12"
order: 6
slug: eloquent
description: "Découvrez comment utiliser Eloquent, l'ORM de Laravel, pour interagir avec votre base de données de manière élégante et efficace."
date: "2025-04-19"
duration: "22:27"
youtubeId: "vX6kJzjgL2s"
repository: "https://github.com/ludoguenet/l12/tree/feat/eloquent"
thumbnail: "/images/eloquent.png"
level: "débutant"
isNew: false
tags:
    - eloquent
    - orm
    - database
links:
  - name: Documentation Laravel
    icon: 📝
    url: https://laravel.com/docs/12.x/eloquent
  - name: Laravel France
    icon: 🇫🇷
    url: https://laravel-france.com
  - name: Code source
    icon: 📎
    url: https://github.com/ludoguenet/l12/tree/feat/eloquent
---

# Eloquent dans Laravel 12 : L'ORM qui simplifie votre vie

Bienvenue dans ce sixième épisode de notre série sur **Laravel 12** ! 🚀 Aujourd'hui, nous allons explorer **Eloquent**, l'ORM (Object-Relational Mapping) de Laravel qui va révolutionner votre façon d'interagir avec la base de données.

## Introduction

Dans notre épisode précédent, nous avons vu comment créer et gérer nos tables de base de données avec les migrations. Maintenant, nous allons apprendre à interagir avec ces données de manière élégante grâce à Eloquent.

## 📌 Au programme :

- ✅ Comprendre ce qu'est un ORM
- ✅ Explorer les modèles Eloquent
- ✅ Découvrir les méthodes de requête
- ✅ Gérer les relations entre modèles
- ✅ Utiliser les collections Eloquent

## Qu'est-ce qu'un ORM ?

Un ORM (Object-Relational Mapping) est un outil qui permet de faire le lien entre votre base de données relationnelle et vos objets PHP. En d'autres termes, chaque ligne de votre table devient un objet PHP que vous pouvez manipuler facilement.

Dans Laravel, Eloquent est l'ORM par défaut. Il vous permet d'interagir avec votre base de données en utilisant des objets PHP plutôt que d'écrire des requêtes SQL complexes.

## Création d'un modèle Eloquent

Pour créer un modèle Eloquent, nous utilisons la commande Artisan :

```bash
php artisan make:model Recipe
```

Cette commande crée un fichier `Recipe.php` dans le dossier `app/Models`. Par défaut, Eloquent suppose que :
- Le nom de la table est le pluriel du nom du modèle (ici `recipes`)
- La clé primaire est `id`
- Les timestamps (`created_at` et `updated_at`) sont utilisés

## Les méthodes de base d'Eloquent

### Récupérer toutes les recettes

```php
// Avant (avec un tableau)
$recipes = Recipe::getAll();

// Après (avec Eloquent)
$recipes = Recipe::all();
```

La méthode `all()` retourne une collection Eloquent contenant tous les modèles de la table.

### Récupérer une recette spécifique

```php
// Avant
$recipe = Recipe::retrieve($id);

// Après
$recipe = Recipe::find($id);
```

La méthode `find()` recherche un modèle par sa clé primaire. Si le modèle n'existe pas, elle retourne `null`. Pour forcer une erreur 404 si le modèle n'existe pas, utilisez `findOrFail()` :

```php
$recipe = Recipe::findOrFail($id);
```

## Le casting des attributs

Lorsque vous récupérez des données de la base de données, certains types de données (comme les JSON) sont retournés sous forme de chaînes de caractères. Eloquent permet de "caster" ces attributs automatiquement :

```php
protected $casts = [
    'ingredients' => 'array',
    'is_published' => 'boolean',
    'published_at' => 'datetime'
];
```

Dans notre cas, nous avons besoin de caster le champ `ingredients` en tableau pour pouvoir boucler dessus facilement.

## Les requêtes avancées

Eloquent offre de nombreuses méthodes pour construire des requêtes complexes :

```php
// Récupérer plusieurs recettes par ID
$recipes = Recipe::findMany([1, 2]);

// Utiliser where
$recipe = Recipe::where('id', $id)->first();

// Utiliser whereKey (plus flexible avec la clé primaire)
$recipe = Recipe::whereKey($id)->first();

// Utiliser query() pour plus de lisibilité
$recipe = Recipe::query()
    ->where('id', $id)
    ->first();
```

## Les collections Eloquent

Les collections Eloquent sont des objets puissants qui étendent les collections PHP natives. Elles offrent de nombreuses méthodes pour manipuler vos données :

```php
// Filtrer
$publishedRecipes = $recipes->filter(function ($recipe) {
    return $recipe->is_published;
});

// Grouper
$recipesByCategory = $recipes->groupBy('category');

// Transformer
$titles = $recipes->pluck('title');
```

## Conclusion

Eloquent est un outil puissant qui simplifie grandement l'interaction avec votre base de données. En utilisant des objets plutôt que des tableaux, vous bénéficiez d'une meilleure organisation de votre code et d'une plus grande flexibilité.

Dans les prochains épisodes, nous explorerons des fonctionnalités plus avancées d'Eloquent, comme les relations entre modèles et les scopes de requête.
