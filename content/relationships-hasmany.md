---
title: "Relations HasMany/BelongsTo dans Laravel 12"
order: 7
slug: relationships-hasmany
description: "Découvrez comment implémenter et utiliser les relations HasMany et BelongsTo dans Laravel 12 pour lier vos modèles de manière élégante et efficace."
date: "2025-04-26"
duration: "23:57"
youtubeId: "2hZiZBEi-J0"
repository: "https://github.com/ludoguenet/l12/tree/feat/relationships-hasmany"
thumbnail: "/images/relationships-hasmany.png"
level: "intermédiaire"
isNew: true
tags:
    - eloquent
    - relationships
    - hasmany
    - belongsto
    - database
links:
  - name: Documentation Laravel
    icon: 📝
    url: https://laravel.com/docs/12.x/eloquent-relationships
  - name: Laravel France
    icon: 🇫🇷
    url: https://laravel-france.com
  - name: Code source
    icon: 📎
    url: https://github.com/ludoguenet/l12/tree/feat/relationships-hasmany
---

# Relations HasMany/BelongsTo dans Laravel 12 : Matérialiser une relation entre modèles

Bienvenue dans ce septième épisode de notre série sur **Laravel 12** ! 🚀 Aujourd'hui, nous allons apprendre à concrétiser une relation entre modèles avec notre première relation **HasMany/BelongsTo**.

## Introduction

Dans notre épisode précédent, nous avons découvert les bases d'Eloquent, l'ORM de Laravel. Maintenant, nous allons voir comment établir des relations concrètes entre nos modèles pour qu'ils interagissent ensemble de manière cohérente.

## 📌 Au programme :

- ✅ Utiliser Tinker efficacement
- ✅ Créer des clés étrangères proprement
- ✅ Comprendre et implémenter la relation HasMany
- ✅ Comprendre et implémenter la relation BelongsTo
- ✅ Tester et manipuler nos relations

## Définir notre relation

Pour notre exemple, nous allons créer une relation entre nos recettes et les utilisateurs. En termes plus grammaticaux :
- Un utilisateur possède zéro, une ou plusieurs recettes
- Une recette appartient à un utilisateur (ou pas, si nullable)

Cette relation est ce qu'on appelle une relation "one-to-many" ou dans Laravel, une relation **HasMany/BelongsTo**.

## Visualiser notre base de données

Avant de commencer à modifier notre structure, explorons nos tables actuelles. Laravel propose des commandes pratiques pour visualiser notre base de données directement dans le terminal :

```bash
php artisan db:show
```

Cette commande nous montre toutes les informations concernant notre base de données : le driver (SQLite), la connexion, le chemin du fichier et le schéma de nos tables.

Pour voir le détail d'une table spécifique :

```bash
php artisan db:table recipes
```

Cette commande affiche la structure de la table avec ses colonnes, types et contraintes.

## Créer une migration pour notre clé étrangère

Pour établir notre relation, nous devons ajouter une clé étrangère `user_id` dans notre table `recipes`. Créons une migration :

```bash
php artisan make:migration add_user_id_to_recipes
```

Dans cette migration, nous allons ajouter notre colonne `user_id` :

```php
public function up()
{
    Schema::table('recipes', function (Blueprint $table) {
        $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
    });
}

public function down()
{
    Schema::table('recipes', function (Blueprint $table) {
        $table->dropForeign(['user_id']);
        $table->dropColumn('user_id');
    });
}
```

Expliquons les différentes parties :
- `foreignId('user_id')` : crée une colonne de type entier non signé
- `nullable()` : rend la colonne nullable (une recette peut ne pas appartenir à un utilisateur)
- `constrained()` : ajoute la contrainte d'intégrité référentielle vers la table `users`
- `nullOnDelete()` : met à NULL le `user_id` si l'utilisateur est supprimé

> **Note importante**: L'ordre des méthodes est crucial ! Mettez toujours `nullable()` avant `constrained()` sinon vous risquez des erreurs car vous ne pouvez pas ajouter une colonne non nullable sans valeur par défaut.

### Méthode plus verbeuse (ancienne approche)

Avant Laravel proposait cette syntaxe plus verbeuse :

```php
$table->unsignedBigInteger('user_id')->nullable();
$table->foreign('user_id')->references('id')->on('users')->nullOnDelete();
```

C'est important de comprendre les deux approches, mais la nouvelle méthode est beaucoup plus concise.

## Définir nos relations dans les modèles

Une fois notre migration exécutée (`php artisan migrate`), nous devons définir les relations dans nos modèles.

### Dans le modèle User

```php
use Illuminate\Database\Eloquent\Relations\HasMany;

public function recipes(): HasMany
{
    return $this->hasMany(Recipe::class);
}
```

### Dans le modèle Recipe

```php
use Illuminate\Database\Eloquent\Relations\BelongsTo;

public function user(): BelongsTo
{
    return $this->belongsTo(User::class);
}
```

Pour éviter de retourner `null` quand une recette n'a pas d'utilisateur, on peut utiliser `withDefault` :

```php
public function user(): BelongsTo
{
    return $this->belongsTo(User::class)->withDefault([
        'name' => 'Inconnu'
    ]);
}
```

## Utiliser Tinker pour tester nos relations

Tinker est un outil puissant pour interagir avec notre application Laravel directement depuis le terminal :

```bash
php artisan tinker
```

Avant de tester, assurons-nous d'avoir des utilisateurs :

```php
// Dans DatabaseSeeder.php
\App\Models\User::factory(10)->create();

// Puis en terminal
php artisan db:seed
```

Maintenant, utilisons Tinker pour lier une recette à un utilisateur :

```php
// Récupérer une recette
$recipe = \App\Models\Recipe::first();

// Mettre à jour le user_id
\App\Models\Recipe::where('id', 1)->update(['user_id' => 1]);

// Rafraîchir notre modèle
$recipe->refresh();

// Vérifier la relation
$recipe->user; // Affiche l'utilisateur lié

// Récupérer les recettes d'un utilisateur
$user = \App\Models\User::first();
$user->recipes; // Affiche une collection de recettes
```

## Tester la fonctionnalité withDefault

```php
$recipe = \App\Models\Recipe::where('id', 2)->first();
$recipe->user; // Retourne notre valeur par défaut "Inconnu" si aucun utilisateur n'est lié
```

## Conclusion

Les relations HasMany et BelongsTo sont fondamentales dans Laravel. Elles nous permettent de:

1. Créer des structures de données cohérentes
2. Accéder facilement aux données liées (`$user->recipes` ou `$recipe->user`)
3. Maintenir l'intégrité de nos données grâce aux contraintes

Dans notre prochain épisode, nous explorerons d'autres types de relations comme ManyToMany et les fonctionnalités avancées d'Eloquent.
