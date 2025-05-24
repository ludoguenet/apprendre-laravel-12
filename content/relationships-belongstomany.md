---
title: "Relations BelongsToMany dans Laravel 12"
order: 8
slug: relationships-belongstomany
description: "Découvrez comment implémenter et utiliser les relations BelongsToMany (Many-to-Many) dans Laravel 12 pour créer des relations complexes entre vos modèles."
date: "2025-05-24"
duration: "22:27"
youtubeId: "1r_fXBDf6V0"
repository: "https://github.com/ludoguenet/l12/tree/feat/relationships-belongstomany"
thumbnail: "/images/relationships-belongstomany.png"
level: "intermédiaire"
isNew: true
tags:
    - eloquent
    - relationships
    - belongstomany
    - many-to-many
    - database
links:
  - name: Documentation Laravel
    icon: 📝
    url: https://laravel.com/docs/12.x/eloquent-relationships#many-to-many
  - name: Laravel France
    icon: 🇫🇷
    url: https://laravel-france.com
  - name: Code source
    icon: 📎
    url: https://github.com/ludoguenet/l12/tree/feat/relationships-belongstomany
---

# Relations BelongsToMany dans Laravel 12 : Créer des relations complexes

Bienvenue dans ce huitième épisode de notre série sur **Laravel 12** ! 🚀 Aujourd'hui, nous allons explorer les relations BelongsToMany (Many-to-Many), une relation essentielle pour créer des liens complexes entre vos modèles.

## Introduction

Dans notre épisode précédent, nous avons vu les relations HasMany/BelongsTo. Aujourd'hui, nous allons transformer notre système d'ingrédients pour utiliser une relation Many-to-Many, ce qui nous permettra de mieux structurer nos données et d'effectuer des requêtes plus complexes.

## 📌 Au programme :

- ✅ Comprendre le concept de relation Many-to-Many
- ✅ Créer une table pivot
- ✅ Implémenter la relation BelongsToMany
- ✅ Attacher et détacher des relations
- ✅ Optimiser nos requêtes

## Pourquoi une relation Many-to-Many ?

Prenons l'exemple de nos recettes et ingrédients :
- Une recette peut avoir plusieurs ingrédients
- Un ingrédient peut être utilisé dans plusieurs recettes

C'est exactement ce qu'on appelle une relation Many-to-Many. Contrairement à une relation HasMany où un modèle "possède" plusieurs autres modèles, ici les deux modèles peuvent avoir plusieurs relations entre eux.

## Créer notre modèle Ingredient

Commençons par créer notre modèle Ingredient :

```bash
php artisan make:model Ingredient -m
```

Dans la migration, nous allons définir une structure simple :

```php
public function up()
{
    Schema::create('ingredients', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->timestamps();
    });
}
```

## Créer la table pivot

Pour une relation Many-to-Many, nous avons besoin d'une table pivot. La convention de nommage de Laravel est simple : prenez les noms des deux modèles au singulier dans l'ordre alphabétique.

```bash
php artisan make:migration create_ingredient_recipe_table
```

Dans cette migration :

```php
public function up()
{
    Schema::create('ingredient_recipe', function (Blueprint $table) {
        $table->id();
        $table->foreignId('ingredient_id')->constrained()->cascadeOnDelete();
        $table->foreignId('recipe_id')->constrained()->cascadeOnDelete();
        $table->timestamps();
    });
}
```

## Définir les relations dans nos modèles

### Dans le modèle Recipe

```php
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

public function ingredients(): BelongsToMany
{
    return $this->belongsToMany(Ingredient::class);
}
```

### Dans le modèle Ingredient

```php
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

public function recipes(): BelongsToMany
{
    return $this->belongsToMany(Recipe::class);
}
```

## Attacher des relations

Pour attacher des ingrédients à une recette, nous pouvons utiliser la méthode `attach()` :

```php
$recipe = Recipe::find(1);
$recipe->ingredients()->attach($ingredientId);
```

Pour notre cas d'usage, nous pouvons créer une route temporaire pour attacher les ingrédients :

```php
Route::get('/attach', function () {
    $ingredients = [
        ['name' => 'Spaghetti'],
        ['name' => 'Eggs'],
        ['name' => 'Cheese'],
        ['name' => 'Bacon'],
        // ... autres ingrédients
    ];

    foreach ($ingredients as $ingredient) {
        $recipe = Recipe::find(1);
        $ingredient = Ingredient::find($ingredient['id']);
        $recipe->ingredients()->attach($ingredient->id);
    }
});
```

## Utiliser les relations dans nos vues

Maintenant que nos relations sont en place, nous pouvons les utiliser dans nos vues :

```php
@foreach($recipe->ingredients as $ingredient)
    <li>{{ $ingredient->name }}</li>
@endforeach
```

## Conclusion

Les relations BelongsToMany sont puissantes et permettent de :
1. Créer des relations complexes entre modèles
2. Éviter la duplication de données
3. Effectuer des requêtes efficaces sur les relations

Dans notre prochain épisode, nous verrons comment optimiser ces relations et éviter les problèmes N+1.

> **Note** : N'oubliez pas que la table pivot peut être enrichie avec des colonnes supplémentaires si nécessaire, comme par exemple la quantité d'un ingrédient dans une recette.
