---
title: Les modpacks
description: Exporte et partage la configuration d'une instance sous forme de modpack.
---

Un modpack, c'est le manifeste d'une instance : la version du jeu, la liste des
mods (identifiant ModDB et version) et lequel de ces mods est activé ou
désactivé. Le manifeste voyage seul : pas de chemin absolu, pas d'URL signée,
uniquement des références au ModDB.

## Exporter

Depuis le détail d'une instance, "Exporter" produit un fichier de modpack
portable. L'état de chaque mod (activé ou désactivé) part avec lui : réimporter
le pack ailleurs recrée exactement la même configuration, pas juste la même liste
de mods.

## Importer

Importer un modpack crée une nouvelle instance, installe la version de jeu
manquante si besoin, puis résout chaque mod auprès du ModDB. Si un mod ne peut
pas être résolu (retiré, renommé), l'import continue pour le reste et signale
précisément ce qui a échoué plutôt que de tout annuler.
