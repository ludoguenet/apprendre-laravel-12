---
title: "Le M dans MVC"
order: 4
slug: m-dans-mvc
description: "Découvrez comment créer et utiliser des modèles pour gérer la logique métier et encapsuler l'accès aux données de votre application."
date: "2025-04-06"
duration: "14:07"
youtubeId: "OcpGHKwbhE0"
repository: "https://github.com/ludoguenet/l12/tree/feat/models"
thumbnail: "/images/m-dans-mvc.png"
level: "débutant"
isNew: false
tags:
    - models
    - mvc
    - poo
links:
  - name: Documentation Laravel
    icon: 📝
    url: https://laravel.com/docs/12.x/eloquent
  - name: Code source
    icon: 📎
    url: https://github.com/ludoguenet/l12/tree/feat/models
  - name: Rejoignez la communauté
    icon: 🤝
    url: https://discord.gg/invite/cuFxTjH
---

# Les modèles : Premières étapes

Bienvenue dans ce quatrième épisode de notre série sur **Laravel 12** ! 🚀 Aujourd'hui, nous allons découvrir les **modèles** et comprendre comment ils s'intègrent dans l'architecture MVC de Laravel.

## Introduction

Les modèles représentent le "M" dans l'architecture MVC (Modèle-Vue-Contrôleur) utilisée par Laravel. Ils sont responsables de la gestion des données et de la logique métier de votre application.

Dans cette vidéo, nous allons prendre une approche progressive :
1. Comprendre le problème de duplication de code dans nos routes
2. Créer un modèle simple en PHP pur pour encapsuler notre logique
3. Préparer le terrain pour la prochaine vidéo où nous utiliserons les modèles Eloquent de Laravel

## 📌 Au programme :

- ✅ Comprendre le rôle des modèles dans l'architecture MVC
- ✅ Refactoriser notre code pour éviter la duplication
- ✅ Créer un modèle simple pour gérer nos recettes
- ✅ Implémenter des méthodes de récupération de données

## Le problème de la duplication de code

Dans notre vidéo précédente, nous avons créé deux routes avec le même tableau de recettes :

```php
Route::get('/recipes', function () {
    $recipes = [
        1 => ['title' => 'Spaghetti Carbonara', 'ingredients' => ['Pâtes', 'Oeufs', 'Fromage', 'Lardons']],
        2 => ['title' => 'Poulet Curry', 'ingredients' => ['Poulet', 'Lait de coco', 'Curry']],
        3 => ['title' => 'Sauté de légumes', 'ingredients' => ['Brocoli', 'Carottes', 'Sauce soja', 'Ail']]
    ];

    return view('recipes.index', compact('recipes'));
});

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

Cette duplication crée deux sources de vérité identiques, ce qui n'est pas optimal. Normalement, ces données devraient être stockées en base de données et accessibles via un modèle.

## Première étape : Refactoriser notre code

Commençons par éviter la duplication en déplaçant notre tableau de recettes en dehors des routes :

```php
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Arr;

$recipes = [
    1 => ['title' => 'Spaghetti Carbonara', 'ingredients' => ['Pâtes', 'Oeufs', 'Fromage', 'Lardons']],
    2 => ['title' => 'Poulet Curry', 'ingredients' => ['Poulet', 'Lait de coco', 'Curry']],
    3 => ['title' => 'Sauté de légumes', 'ingredients' => ['Brocoli', 'Carottes', 'Sauce soja', 'Ail']]
];

Route::get('/recipes', function () use ($recipes) {
    return view('recipes.index', compact('recipes'));
});

Route::get('/recipe/{id}', function ($id) use ($recipes) {
    $recipe = Arr::get($recipes, $id, ['title' => 'Recette non trouvée', 'ingredients' => []]);
    return view('recipes.show', compact('recipe'));
});
```

Nous pouvons aussi utiliser les fonctions fléchées, mais attention à la lisibilité :

```php
Route::get('/recipes', fn() => view('recipes.index', compact('recipes')));
```

## Création d'un modèle simple

L'étape suivante consiste à créer un modèle pour encapsuler la logique d'accès aux données. Dans le dossier `app/Models`, créons un fichier `Recipe.php` :

```php
<?php

namespace App\Models;

use Illuminate\Support\Arr;

class Recipe
{
    public function getAll(): array
    {
        return [
            1 => ['title' => 'Spaghetti Carbonara', 'ingredients' => ['Pâtes', 'Oeufs', 'Fromage', 'Lardons']],
            2 => ['title' => 'Poulet Curry', 'ingredients' => ['Poulet', 'Lait de coco', 'Curry']],
            3 => ['title' => 'Sauté de légumes', 'ingredients' => ['Brocoli', 'Carottes', 'Sauce soja', 'Ail']]
        ];
    }

    public function retrieve(int $id): array
    {
        $recipes = $this->getAll();
        return Arr::get($recipes, $id, ['title' => 'Recette non trouvée', 'ingredients' => []]);
    }
}
```

Notre modèle `Recipe` encapsule désormais :
- Une méthode `getAll()` qui retourne toutes les recettes
- Une méthode `retrieve(int $id)` qui retourne une recette spécifique par son ID

## Utilisation du modèle dans nos routes

Maintenant, nous pouvons modifier nos routes pour utiliser notre modèle :

```php
use App\Models\Recipe;

Route::get('/recipes', function () {
    $model = new Recipe();
    $recipes = $model->getAll();
    return view('recipes.index', compact('recipes'));
});

Route::get('/recipe/{id}', function ($id) {
    $model = new Recipe();
    $recipe = $model->retrieve($id);
    return view('recipes.show', compact('recipe'));
});
```

## Bonus : Correction du menu actif

Dans notre layout, nous voulons que le lien "Recettes" reste actif même quand on affiche une recette spécifique. Pour cela, nous pouvons utiliser la fonction `fnmatch` :

```php
<x-link-item href="/recipes" :active="fnmatch('recipes.*', Route::currentRouteName()) ? true : false">Recipes</x-link-item>
```

## Conclusion

Dans cet épisode, nous avons :
- Compris le rôle des modèles dans l'architecture MVC
- Refactorisé notre code pour éviter la duplication
- Créé un modèle simple pour gérer nos recettes
- Encapsulé la logique d'accès aux données dans notre modèle

👉 **Dans le prochain épisode, nous découvrirons les modèles Eloquent de Laravel et comment les utiliser pour interagir avec une base de données !**
