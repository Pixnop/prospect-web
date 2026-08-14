---
title: Migrer depuis VS Launcher
description: Importe tes installations VS Launcher dans Prospect, copie garantie.
---

Prospect importe tes installations VS Launcher lui-même : un dialogue, et tout
est copié. Tes dossiers VS Launcher ne sont jamais modifiés ni déplacés, donc
VS Launcher continue de fonctionner comme avant. Ça compte, parce que VS
Launcher, le launcher communautaire que beaucoup de joueurs et de joueuses ont
utilisé pendant des années, est archivé depuis juin 2026 ; son propre auteur
oriente désormais vers un successeur, Rustory. Prospect ne cherche pas à le
cloner, mais son modèle (une version du jeu partagée, un profil isolé par
instance) est le même.

## L'import, intégré

Au premier démarrage, Prospect propose d'importer tes installations VS
Launcher. Ensuite, la même porte vit dans les Réglages : « Importer tes
installations VS Launcher ». Le dialogue écrit la garantie sous son titre,
avant que tu confirmes quoi que ce soit : tes dossiers sont copiés, jamais
modifiés ni déplacés.

L'import couvre les deux moitiés d'une installation VS Launcher : les
installations (mondes, mods, configurations, chacune devenant une instance
Prospect) et les versions du jeu. Une précision honnête sur les versions : ces
fichiers sont recopiés tels quels, et rien ne vérifie qu'ils sont intacts,
contrairement à un téléchargement, contrôlé à l'arrivée. En cas de doute,
désinstalle la version ensuite et réinstalle-la depuis l'écran Versions.

## Correspondance des dossiers

| VS Launcher | Contenu | Prospect |
| --- | --- | --- |
| `VSLGameVersions/` | les fichiers du jeu, un dossier par version | `versions/` |
| `VSLInstallations/<nom>/` | mondes, mods, configurations | `instances/<nom>/data/` |
| `VSLBackups/` | sauvegardes compressées | pas importées ; Prospect a ses propres sauvegardes par instance (onglet Options) |

Sur Linux, VS Launcher rangeait tout ça sous `~/.config/`. Prospect utilise
`~/.local/share/prospect/` : les deux dossiers peuvent donc coexister aussi
longtemps que tu veux.

## Migrer à la main

L'import est le chemin normal. Si tu préfères déplacer une seule instance
toi-même, ou si ton dossier VS Launcher vit à un endroit que l'import ne trouve
pas, la voie manuelle marche toujours :

1. **Installe la même version du jeu dans Prospect**, depuis l'écran Versions.
   Un téléchargement neuf est contrôlé à l'arrivée, ce que des fichiers copiés
   à la main ne sont pas.
2. **Crée une instance dans Prospect** avec le même nom, en choisissant cette
   version.
3. **Recopie le contenu du dossier d'installation VS Launcher**
   (`VSLInstallations/<nom>/`) dans le dossier `data/` de la nouvelle instance :
   mondes (`Saves/`), configurations (`ModConfig/`) et mods (`Mods/`) compris.
4. **Les mods n'ont rien de spécial à faire** : ce sont des fichiers `.zip` dans
   `Mods/` des deux côtés. Une fois copiés, ils apparaissent dans l'onglet Mods
   de l'instance à sa prochaine actualisation, pas besoin de les réinstaller un
   par un depuis le ModDB.

## Ce qui change

**Le .NET, détecté.** VS Launcher ne vérifiait rien et sa documentation
demandait d'installer .NET 7, 8 et 10 à la main, sans lien avec la version du
jeu utilisée. Prospect sait quel .NET chaque version du jeu exige, détecte ce
qui est déjà installé et nomme précisément ce qui manque.

**Activation des mods.** VS Launcher ne savait qu'installer, mettre à jour ou
supprimer un mod. Prospect permet de désactiver un mod sans perdre le fichier.

**macOS.** VS Launcher téléchargeait les builds macOS mais n'a jamais su lancer
le jeu dessus. Prospect vise le même point de départ : téléchargement possible,
lancement pas encore pris en charge, voir la [FAQ](../faq/).
