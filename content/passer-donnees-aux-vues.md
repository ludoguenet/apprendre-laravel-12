---
title: "Passer des données aux vues"
order: 3
slug: passer-donnees-aux-vues
description: "Apprenez à passer des données de web.php aux vues dans Laravel 12 en utilisant compact() et Arr::get() pour structurer votre application."
date: "2025-03-29"
duration: "21:32"
youtubeId: "nM3OVVHwJnQ"
repository: "https://github.com/ludoguenet/l12/tree/feat/pass-data-to-views"
thumbnail: "/images/passer-donnes-aux-vues.png"
level: "débutant"
isNew: false
tags:
    - routes
    - blade
links:
  - name: Documentation Laravel
    icon: 📝
    url: https://laravel.com/docs/12.x/routing
  - name: Code source
    icon: 📎
    url: https://github.com/ludoguenet/l12/tree/feat/pass-data-to-views
  - name: Rejoignez la communauté
    icon: 🤝
    url: https://discord.gg/invite/cuFxTjH
---

# Passer des données de web.php aux vues avec Laravel 12

Bienvenue dans ce troisième épisode de notre série sur **Laravel 12** ! 🚀 Aujourd’hui, nous allons voir comment **passer des données de `web.php` aux vues** et les afficher dynamiquement avec Blade.

## Introduction

Laravel permet de passer des données à une vue via une route définie dans `web.php`. Nous allons voir comment structurer ces données et les afficher proprement.

## 📌 Au programme :

- ✅ Création de routes avec des données statiques
- ✅ Passage des données aux vues avec `compact()`
- ✅ Utilisation de `Arr::get()` pour récupérer un élément spécifique

## Exemple : Passer des recettes à une vue

Dans `routes/web.php`, nous allons définir une liste de recettes et les afficher dans une vue.

### 1. Créer une route pour afficher toutes les recettes

```php
use Illuminate\Support\Facades\Route;

Route::get('/recipes', function () {
    $recipes = [
        1 => ['title' => 'Spaghetti Carbonara', 'ingredients' => ['Pâtes', 'Oeufs', 'Fromage', 'Lardons']],
        2 => ['title' => 'Poulet Curry', 'ingredients' => ['Poulet', 'Lait de coco', 'Curry']],
        3 => ['title' => 'Sauté de légumes', 'ingredients' => ['Brocoli', 'Carottes', 'Sauce soja', 'Ail']]
    ];

    return view('recipes.index', compact('recipes'));
});
```

### 2. Créer une route pour afficher une recette spécifique

```php
use Illuminate\Support\Arr;

Route::get('/recipe/{id}', function ($id) {
    $recipes = [
        1 => ['title' => 'Spaghetti Carbonara', 'ingredients' => ['Pâtes', 'Oeufs', 'Fromage', 'Lardons']],
        2 => ['title' => 'Poulet Curry', 'ingredients' => ['Poulet', 'Lait de coco', 'Curry']],
        3 => ['title' => 'Sauté de légumes', 'ingredients' => ['Brocoli', 'Carottes', 'Sauce soja', 'Ail']]
    ];

    $recipe = Arr::get($recipes, $id, ['title' => 'Recette non trouvée', 'ingredients' => []]);

    return view('recipes.show', compact('recipe'));
});
```

## Création des vues

### `resources/views/recipes/index.blade.php`

```php
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liste des Recettes</title>
</head>
<body>
    <h1>Recettes</h1>
    <ul>
        @foreach ($recipes as $id => $recipe)
            <li>
                <a href="{{ url('/recipe/' . $id) }}">{{ $recipe['title'] }}</a>
            </li>
        @endforeach
    </ul>
</body>
</html>
```

### `resources/views/recipes/show.blade.php`

```php
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $recipe['title'] }}</title>
</head>
<body>
    <h1>{{ $recipe['title'] }}</h1>
    <h2>Ingrédients :</h2>
    <ul>
        @foreach ($recipe['ingredients'] as $ingredient)
            <li>{{ $ingredient }}</li>
        @endforeach
    </ul>
    <a href="{{ url('/recipes') }}">Retour aux recettes</a>
</body>
</html>
```

## Conclusion

Dans cet épisode, nous avons appris à :
- Créer une route pour passer un tableau de données à une vue
- Utiliser `compact()` pour envoyer les données à la vue
- Utiliser `Arr::get()` pour récupérer une recette spécifique et gérer les erreurs

👉 **Dans le prochain épisode, nous verrons comment envoyer et traiter des formulaires avec Laravel 12 !**
