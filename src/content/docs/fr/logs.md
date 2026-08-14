---
title: Les journaux
description: La page Journaux, l'export en zip et le journal de lancement de chaque instance.
---

Prospect écrit ce qu'il fait, et te le montre sans quitter l'application : la
page Journaux de la barre latérale pour le launcher lui-même, l'onglet Journal
de chaque instance pour le jeu.

## La page Journaux

Elle affiche la fin du journal de l'application, jusqu'aux 500 dernières
lignes. Les lignes ordinaires restent neutres ; les avertissements et les
erreurs sont teintés, parce que c'est l'inhabituel qu'on cherche en ouvrant un
journal. Tant que la page est affichée, elle se relit toute seule toutes les
deux secondes : tu peux la laisser ouverte pendant que tu reproduis un problème
ailleurs, la ligne apparaît pendant que tu regardes. Le bouton Rafraîchir
force une relecture à la seconde près, et le chemin du fichier est écrit sous
la liste.

Le fichier est plafonné à 1 Mo : au-delà, il repart de zéro plutôt que de
grossir sans fin.

## L'export en zip

Le bouton Exporter écrit une archive (`prospect-journaux.zip` par défaut) qui
emporte tout le dossier `logs/` : le journal de l'application et le journal de
lancement de chaque instance. Pour un signalement sur GitHub, joins ce zip et
rien d'autre : il contient ce qu'il faut pour comprendre ce qui s'est passé,
et il tranche la plupart des questions.

## Le journal de lancement, par instance

Chaque instance a le sien. Au lancement, Prospect y écrit une ligne d'entête
(le nom de l'instance, sa version du jeu, l'heure), puis tout ce que le jeu
raconte, sortie d'erreur comprise. Le fichier est écrasé au lancement suivant :
c'est le journal du dernier lancement, pas une histoire complète. Tu le lis
dans l'onglet Journal de la page de l'instance, tel quel.

Ce journal n'est pas qu'à lire : après chaque partie, Prospect le relit pour
toi. Un mod qui a échoué porte une pastille sur l'onglet Mods (« 3 erreurs au
dernier lancement »), et les intégrations détectées entre mods s'affichent en
« fonctionne avec ». Le détail de ces pastilles est sur la page
[Les mods](../mods/).

Supprimer une instance emporte son journal de lancement avec elle.

## Sur le disque

Les journaux vivent dans `logs/`, sous le dossier racine de Prospect :

- Linux : `~/.local/share/prospect/logs/`
- Windows : `%APPDATA%\Prospect\logs\`
- macOS : `~/Library/Application Support/Prospect/logs/`

`prospect.log` est le journal de l'application ; les fichiers `instance-*.log`
sont les journaux de lancement, un par instance. C'est exactement ce que
l'export en zip emporte.
