---
title: Premiers pas
description: Compiler et lancer Prospect depuis les sources.
---

Prospect est en développement précoce, mais une première pré-release est
disponible : tu peux la télécharger, ou compiler toi-même.

## Télécharger la pré-release

La [page de téléchargement GitHub](https://github.com/Pixnop/Prospect/releases/latest) fournit
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

Un launcher qui marche, tôt dans sa vie. La pré-release n'installe rien sur le
système : tu extrais l'archive, tu lances le binaire, et un build plus récent la
remplace depuis la même page, faute de mise à jour automatique pour l'instant.
Les captures d'écran de cette documentation viennent des builds du jour.

L'interface parle français et anglais. Le premier démarrage suit la langue de
ton système ; les Réglages permettent d'en changer, et le choix s'applique au
prochain démarrage de Prospect. Le thème et le fond de fenêtre vivent au même
endroit et s'appliquent tout de suite : voir
[Personnaliser Prospect](../customize/).

Si tu viens de VS Launcher, Prospect propose d'importer tes installations dès le
premier démarrage : une copie, tes dossiers d'origine intacts. Les détails sont
dans [Migrer depuis VS Launcher](../migrate-from-vs-launcher/).

Pour suivre l'avancement ou signaler un problème, direction le
[dépôt GitHub](https://github.com/Pixnop/Prospect). Pour un signalement, la
[page Journaux](../logs/) (dans la barre latérale) montre ce que Prospect a
fait pendant la session et l'exporte dans un fichier : joins ce fichier, il
tranche la plupart des questions.
