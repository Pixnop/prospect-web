---
title: Premiers pas
description: Compiler et lancer Prospect depuis les sources.
---

Prospect est en développement précoce, mais une première pré-release est
disponible : tu peux la télécharger, ou compiler toi-même.

## Télécharger la pré-release

La [page des releases](https://github.com/Pixnop/Prospect/releases/latest) fournit
une archive Linux (`prospect-<version>-linux-x64.tar.gz`, binaire `Prospect` prêt à
lancer après extraction) et une archive Windows (`prospect-<version>-win-x64.zip`,
`Prospect.exe`), avec les sommes SHA-256 à côté.

Sur Windows, le binaire n'est pas encore signé : SmartScreen affichera « éditeur
inconnu ». Passe par « Informations complémentaires », puis « Exécuter quand
même ». Pas d'installeur ni de mise à jour automatique pour l'instant : une
nouvelle version se télécharge au même endroit.

## Prérequis (compilation)

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
