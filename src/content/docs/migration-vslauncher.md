---
title: Migrer depuis VS Launcher
description: Retrouve tes instances et tes versions de VS Launcher dans Prospect.
---

VS Launcher, le launcher communautaire que beaucoup de joueurs et de joueuses ont
utilisé pendant des années, est archivé depuis juin 2026 — son propre auteur
oriente désormais vers un successeur, Rustory. Prospect ne cherche pas à cloner VS
Launcher, mais son modèle (une version du jeu partagée, un profil isolé par
instance) est le même, ce qui rend la migration directe.

## Correspondance des dossiers

| VS Launcher | Contenu | Prospect |
| --- | --- | --- |
| `VSLGameVersions/` | les moteurs du jeu, un dossier par version | `versions/` |
| `VSLInstallations/<nom>/` | mondes, mods, configurations | `instances/<nom>/data/` |
| `VSLBackups/` | sauvegardes compressées | pas d'équivalent pour l'instant |

Sur Linux, VS Launcher rangeait tout ça sous `~/.config/`. Prospect utilise
`~/.local/share/prospect/` — les deux dossiers peuvent donc coexister sans
conflit pendant la migration.

## Migrer une installation

1. **Installe la même version du jeu dans Prospect**, depuis l'écran Versions. Le
   moteur ne se copie pas depuis VS Launcher : Prospect le retélécharge, ce qui
   reste rapide puisque le téléchargement est public et direct.
2. **Crée une instance dans Prospect** avec le même nom, en choisissant cette
   version.
3. **Recopie le contenu du dossier d'installation VS Launcher**
   (`VSLInstallations/<nom>/`) dans le dossier `data/` de la nouvelle instance —
   mondes (`Saves/`), configurations (`ModConfig/`) et mods (`Mods/`) compris.
4. **Les mods n'ont rien de spécial à faire** : ce sont des fichiers `.zip` dans
   `Mods/` des deux côtés. Une fois copiés, Prospect les détecte au prochain
   scan de l'instance, pas besoin de les réinstaller un par un depuis le ModDB.

## Ce qui change

**Détection du runtime.** VS Launcher ne vérifiait rien et sa documentation
demandait d'installer .NET 7, 8 et 10 à la main, sans lien avec la version du jeu
utilisée. Prospect détecte le runtime déjà installé et indique précisément quoi
manque, associé à la version du jeu concernée.

**Activation des mods.** VS Launcher ne savait qu'installer, mettre à jour ou
supprimer un mod. Prospect permet de désactiver un mod sans perdre le fichier.

**macOS.** VS Launcher téléchargeait les builds macOS mais n'a jamais su lancer
le jeu dessus. Prospect vise le même point de départ : téléchargement possible,
lancement pas encore pris en charge — voir la [FAQ](../faq/).
