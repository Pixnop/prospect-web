---
title: FAQ
description: Compte, macOS, emplacement des données, versions et modpacks.
---

## Est-ce que je peux télécharger Prospect maintenant ?

Oui : une pré-release est disponible sur la
[page de téléchargement GitHub](https://github.com/Pixnop/Prospect/releases/latest),
en archive Linux (tar.gz) et Windows (zip). C'est une version de développement,
sans installeur ni mise à jour automatique. Voir
[Premiers pas](../getting-started/) pour les détails, dont l'avertissement
SmartScreen sur Windows.

## Un compte est-il nécessaire ?

Non. Lister et télécharger les versions du jeu ne demande aucun compte
vintagestory.at : c'est entièrement public, et jouer en solo n'en a pas besoin
non plus. Se connecter sert à une seule chose, le multijoueur. La connexion vit
dans les Réglages, ta session est écrite dans chaque instance au lancement, et
ton mot de passe sert une fois à obtenir cette session, puis il est oublié :
Prospect ne le conserve nulle part.

## Et macOS ?

Le téléchargement fonctionne : Prospect récupère et installe les builds macOS
(`mac-arm64` et `mac-x64`) comme n'importe quelle autre plateforme. Le bouton
Jouer, lui, n'est pas encore pris en charge sur cet OS.

## Où sont mes données ?

Tout vit sous un seul dossier racine, à un emplacement standard selon l'OS :

- Linux : `~/.local/share/prospect/`
- Windows : `%APPDATA%\Prospect\`
- macOS : `~/Library/Application Support/Prospect/`

Les instances sont dans `instances/`, les versions du jeu installées dans
`versions/`.

## Quelles langues parle Prospect ?

Le français et l'anglais. Le premier démarrage suit la langue de ton système ;
les Réglages permettent d'en changer, et le choix s'applique au prochain
démarrage de Prospect.

## C'est quoi une version rc ?

`rc` veut dire *release candidate* : une version candidate à devenir la
prochaine stable, listée parmi les versions de test (pastille `unstable`) pour
être essayée avant l'officielle. Elle se reconnaît à son suffixe, par exemple
`1.22.0-rc.1`. Rien n'empêche de l'installer à côté d'une version stable dans
une instance séparée.

## Et les modpacks ?

Les écrans d'export et d'import ont été retirés pour l'instant. Partager un pack
soulève des questions qu'un bouton ne règle pas tout seul, comme le sort d'un
mod retiré du ModDB ou d'une version du jeu disparue. Elles méritent de vraies
réponses d'abord : la mécanique reste dans le code et les écrans reviendront.
En attendant, dupliquer une instance couvre les cas locaux.
