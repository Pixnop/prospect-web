---
title: Les mods
description: Installe des mods depuis le ModDB officiel, directement par instance.
---

Le navigateur de mods interroge le ModDB officiel
([mods.vintagestory.at](https://mods.vintagestory.at)) directement depuis
Prospect : recherche par nom, filtres par tag (Exploration, Utility, Worldgen…)
et par version de jeu. Chaque carte porte le résumé d'une ligne du mod : tu sais
ce qu'il fait avant d'ouvrir quoi que ce soit.

## La fiche du mod, telle que son auteur l'a écrite

Ouvre une carte et la description arrive avec ses titres, ses listes, ses images
et ses liens, pas un bloc de texte aplati. Le résumé d'une ligne reste en tête, à
côté du nom et de l'auteur, et les liens que l'auteur a déclarés (code source,
wiki, rapports de bugs) deviennent des boutons.

## Une installation par instance

Les mods s'installent dans l'instance depuis laquelle tu ouvres le navigateur, pas
globalement. La compatibilité affichée sur chaque mod (par exemple `1.21.3` ·
`client et serveur`) est calculée pour cette instance précise, et un mod déjà
présent le dit sur sa carte.

## La version que tu installes, c'est toi qui la choisis

Installer ne prend pas en silence le fichier le plus récent : le dialogue liste
toutes les versions compatibles avec leur date et leur journal des changements,
la plus récente présélectionnée, et en choisir une autre relit ses dépendances.
Les étiquettes de compatibilité du ModDB sont cochées à la main et prennent du
retard, alors Prospect te laisse aussi installer une version non déclarée pour ta
version du jeu : l'avertissement reste sous les yeux, nomme les versions que
l'auteur a bien déclarées, et le choix t'appartient.

## Dépendances proposées, jamais imposées

Quand un mod a besoin d'un autre mod pour fonctionner, Prospect le propose dans
le même dialogue. Il n'installe jamais rien à ta place, et te prévient avant de
retirer un mod dont un autre mod installé dépend. Une bibliothèque sans version
déclarée pour ton jeu n'est pas expédiée d'un « introuvable » : Prospect nomme sa
meilleure version publiée et te la propose, avertissement à l'appui.

## Activer, désactiver, sans perdre le fichier

Chaque mod installé a son propre interrupteur d'activation. Désactiver un mod ne
le supprime pas : il redevient disponible d'un clic, ce que gérait mal VS
Launcher, qui ne proposait qu'installer, mettre à jour ou supprimer.

## Après un lancement, le verdict

L'onglet Mods d'une instance relit le [journal de lancement](../logs/). Un mod qui a échoué
porte une pastille (« 3 erreurs au dernier lancement ») avec les lignes en cause
dans son infobulle. Deux autres pastilles n'attendent rien du tout : Prospect lit
ce que les archives annoncent elles-mêmes, donc elles sont là dès l'installation.
Un mod dont l'intégration avec un autre mod installé a fonctionné dit
« fonctionne avec X », et un mod qui cherche le contenu d'un autre qui n'est pas
installé, sans l'avoir déclaré en dépendance, dit « attend du contenu de Y » :
un signal pour toi, jamais un blocage. Un mod sain n'affiche rien, et c'est le
cas ordinaire.
Vérifier les mises à jour rend son verdict avec la même netteté, y compris quand
tout est à jour.
