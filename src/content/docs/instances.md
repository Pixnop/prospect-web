---
title: Les instances
description: Une instance isole une version du jeu, ses mods et ses mondes.
---

Une instance rassemble une version du jeu, ses mods, ses mondes et ses réglages
dans un dossier isolé. Deux instances ne se marchent jamais dessus : tu peux garder
une instance de survie tranquille en `1.21.3` à côté d'une instance de test en
`1.22.0-rc.1`, avec des mods différents dans chacune.

## Créer une instance

La création passe par un assistant en quatre étapes : nom, version du jeu, icône,
puis résumé avant validation. Le nom donne aussi le nom du dossier (par exemple
`Survie Vintage` devient le dossier `instances/survie-vintage`).

## Où vivent tes données

Chaque instance a son propre sous-dossier `data/`, celui que le jeu voit et dans
lequel il écrit ses mondes, ses configurations et ses mods. Sur Linux, par exemple :

```
~/.local/share/prospect/instances/<nom-instance>/data/
```

Les mondes sont dans `data/Saves/`, les mods dans `data/Mods/`. Les métadonnées
propres à Prospect (nom, date de création, temps de jeu) restent à côté de `data/`,
jamais dedans : le jeu peut écrire librement sans jamais entrer en collision avec
elles.

## Dupliquer une instance

Dupliquer une instance copie tout son dossier `data/` sous un nouveau nom : mondes,
configurations et mods compris. C'est la façon la plus simple de tester un mod
risqué ou une nouvelle version sans toucher à une partie en cours.
