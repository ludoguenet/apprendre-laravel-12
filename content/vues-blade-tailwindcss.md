---
title: "Les vues avec Blade et TailwindCSS"
order: 2
slug: vues-blade-tailwindcss
description: "Découvrez comment utiliser le moteur de template Blade et créer des layouts réutilisables dans Laravel 12. L'ajout de style sera fait avec TailwindCSS."
date: "2025-03-22"
duration: "28:42"
youtubeId: "GRKIX8SZ7KQ"
repository: "https://github.com/ludoguenet/l12/tree/feat/blade-layouts"
thumbnail: "/images/vues-blade-tailwindcss.png"
level: "intermédiaire"
isNew: true
tags:
    - blade
    - css
links:
  - name: Documentation Laravel
    icon: 📜
    url: https://laravel.com/docs/12.x/blade
  - name: Code source
    icon: 📂
    url: https://github.com/ludoguenet/l12/tree/feat/blade
  - name: Rejoignez la communauté
    icon: 🗣
    url: https://discord.gg/invite/cuFxTjH
---

# Les vues avec Blade et TailwindCSS

Bienvenue dans cette deuxième vidéo de notre série sur **Laravel 12** !

## Introduction

Dans cette vidéo, nous allons découvrir **Blade**, le puissant moteur de template de Laravel. Nous verrons comment créer des **layouts réutilisables** et des **composants Blade** pour éviter la duplication de code et améliorer la maintenabilité de nos vues.

## 📌 Au programme :

- ✅ Découverte du moteur de template Blade
- ✅ Création de layouts réutilisables
- ✅ Introduction aux composants Blade
- ✅ Stylisation avec Tailwind CSS

## Rappel de la situation

Dans la vidéo précédente, nous avons créé deux vues PHP (`welcome.php` et `projects.php`) pour notre application. Maintenant, nous allons les améliorer en utilisant Blade et en évitant la duplication de code.

## Transformation des vues en templates Blade

Pour utiliser Blade, nous devons d'abord renommer nos fichiers avec l'extension `.blade.php` :

```html
views/
  ├── welcome.blade.php
  └── projects.blade.php
```

### Avantages de Blade

Blade offre plusieurs avantages :
- Syntaxe élégante et concise
- Héritage de layouts
- Composants réutilisables
- Directives puissantes

## Création d'un layout principal

### Méthode 1 : Utilisation des sections Blade

1. Créons un dossier `layouts` dans le dossier `views`
2. Créons un fichier `app.blade.php` dans ce dossier

```php [layouts/app.blade.php]{2} meta-info=val
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel 12</title>
</head>
<body>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/project">Projects</a></li>
        </ul>
    </nav>

    @yield('content')
</body>
</html>
```

Ensuite, modifions nos vues pour qu'elles étendent ce layout :

```php
@extends('layouts.app')

@section('content')
    <h1>Hello World</h1>
@endsection
```

```php
@extends('layouts.app')

@section('content')
    <h1>My Projects</h1>
@endsection
```

### Méthode 2 : Utilisation des composants Blade

Créons un dossier `components` dans `views` et ajoutons un fichier `layout.blade.php` :

```php
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel 12</title>
</head>
<body>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/project">Projects</a></li>
        </ul>
    </nav>

    {{ $slot }}
</body>
</html>
```

Puis utilisons ce composant dans nos vues :

```php
<x-layout>
    <h1>Hello World</h1>
</x-layout>
```

```php
<x-layout>
    <h1>My Projects</h1>
</x-layout>
```

## Création d'un composant pour les liens

Créons un composant `link-item.blade.php` pour gérer nos liens de navigation :

```php
@props(['active' => false])

<li>
    <a {{ $attributes->class([
        'hover:text-gray-600',
        'font-bold' => $active
    ]) }}>
        {{ $slot }}
    </a>
</li>
```

Et utilisons-le dans notre layout :

```php
<nav>
    <ul>
        <x-link-item href="/" :active="Route::currentRouteName() === 'homepage'" class="underline">
            Home Page
        </x-link-item>
        <x-link-item href="/project" :active="Route::currentRouteName() === 'project'">
            Project
        </x-link-item>
    </ul>
</nav>
```

## Nommer nos routes

Pour que notre système de liens actifs fonctionne, nous devons nommer nos routes dans `routes/web.php` :

```php
Route::get('/', function () {
    return view('homepage');
})->name('homepage');

Route::get('/project', function () {
    return view('project');
})->name('project');
```

## Stylisation avec Tailwind CSS

Laravel 12 intègre Tailwind CSS par défaut. Mettons à jour notre layout pour en profiter :

```php
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel 12</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-white shadow-md p-6 max-w-4xl mx-auto mt-10">
    <nav class="mb-6">
        <ul class="flex space-x-4">
            <x-link-item href="/" :active="Route::currentRouteName() === 'homepage'" class="underline">
                Home Page
            </x-link-item>
            <x-link-item href="/project" :active="Route::currentRouteName() === 'project'">
                Project
            </x-link-item>
        </ul>
    </nav>

    <div class="p-4">
        {{ $slot }}
    </div>
</body>
</html>
```

## Utilisation de la directive @class

La directive `@class` nous permet de gérer conditionnellement les classes CSS :

```php
<a @class([
    'hover:text-gray-600',
    'font-bold' => $active
])>{{ $slot }}</a>
```

## Fusion des attributs avec $attributes->merge() ou $attributes->class()

Pour combiner les attributs passés depuis le parent avec ceux définis dans le composant :

```php
<a {{ $attributes->class([
    'hover:text-gray-600',
    'font-bold' => $active
]) }}>{{ $slot }}</a>
```

## Conclusion

Dans cette vidéo, nous avons vu :
- Comment transformer des vues PHP en templates Blade
- Comment créer et utiliser des layouts pour éviter la duplication de code
- Comment créer et utiliser des composants Blade réutilisables
- Comment ajouter du style avec Tailwind CSS
- Comment utiliser les directives Blade pour une gestion conditionnelle du style

Ces techniques vous permettront de créer des interfaces utilisateur plus maintenables et plus élégantes dans vos applications Laravel.

## Prochaine vidéo

Dans la prochaine vidéo, nous verrons comment travailler avec les formulaires et les requêtes dans Laravel 12.

N'oubliez pas de liker la vidéo et de vous abonner pour ne pas manquer les prochains épisodes ! 👍
