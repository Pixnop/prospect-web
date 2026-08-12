---
title: Premiers pas
description: Compiler et lancer Prospect depuis les sources.
---

Prospect est encore en développement précoce. Il n'y a pas de version publiée à
télécharger pour l'instant : la seule façon de le lancer aujourd'hui, c'est de le
compiler soi-même.

## Prérequis

Il faut le **.NET 10 SDK** installé sur ta machine. Vérifie ta version avec :

```sh
dotnet --version
```

## Compiler depuis les sources

```sh
git clone https://github.com/Pixnop/Prospect.git
cd Prospect
dotnet run --project src/Prospect.Desktop
```

Ces trois commandes récupèrent le dépôt, puis compilent et lancent l'application
desktop.

## À quoi s'attendre

Le projet avance mais reste en développement précoce : pas de version empaquetée,
pas d'installeur, pas de mise à jour automatique. Les captures d'écran de cette
documentation viennent de builds de travail : c'est la meilleure idée honnête de ce
à quoi ressemble Prospect aujourd'hui, tant qu'il n'y a rien à télécharger.

Pour suivre l'avancement ou signaler un problème, direction le
[dépôt GitHub](https://github.com/Pixnop/Prospect).
