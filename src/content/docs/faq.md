---
title: FAQ
description: Compte, macOS, emplacement des données et canaux de version.
---

## Est-ce que je peux télécharger Prospect maintenant ?

Pas encore : le projet est en développement précoce et n'a pas de version
publiée. Voir [Premiers pas](../premiers-pas/) pour le compiler soi-même.

## Un compte est-il nécessaire ?

Non, pas pour ce que couvre le MVP. Lister et télécharger les versions du jeu ne
demande aucun compte vintagestory.at : c'est entièrement public. Un compte ne
deviendra utile que plus tard, pour le confort du multijoueur.

## Et macOS ?

Le téléchargement fonctionne : Prospect récupère et installe les builds macOS
(`mac-arm64` et `mac-x64`) comme n'importe quelle autre plateforme. Le bouton
Jouer, lui, n'est pas encore pris en charge sur cet OS.

## Où sont mes données ?

Tout vit sous un seul dossier racine, à un emplacement standard selon l'OS :

- Linux — `~/.local/share/prospect/`
- Windows — `%APPDATA%\Prospect\`
- macOS — `~/Library/Application Support/Prospect/`

Les instances sont dans `instances/`, les versions du jeu installées dans
`versions/`.

## C'est quoi le canal rc ?

`rc` veut dire *release candidate* : une version candidate à devenir la
prochaine stable, publiée sur le canal unstable pour être testée avant la
sortie officielle. Elle se reconnaît à son suffixe, par exemple
`1.22.0-rc.1`. Rien n'empêche de l'installer à côté d'une version stable dans
une instance séparée.
