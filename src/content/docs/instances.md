---
title: Instances
description: An instance isolates one game version, its mods and its worlds.
---

An instance gathers a game version, its mods, its worlds and its settings in one
isolated folder. Two instances never step on each other: you can keep a quiet
survival world on `1.21.3` next to a test bench on `1.22.0-rc.1`, each with its
own mods.

## Creating an instance

Creation goes through a four-step wizard: name, game version, icon, then a
summary before confirming. The name also names the folder (`Vintage Survival`
becomes the `instances/vintage-survival` folder, for instance).

## Where your data lives

Each instance has its own `data/` subfolder, the one the game sees and writes
its worlds, configuration and mods into. On Linux, for example:

```
~/.local/share/prospect/instances/<instance-name>/data/
```

Worlds live in `data/Saves/`, mods in `data/Mods/`. Prospect's own metadata
(name, creation date, playtime) sits next to `data/`, never inside it: the game
can write freely without ever colliding with it.

## Duplicating an instance

Duplicating an instance copies its whole `data/` folder under a new name:
worlds, configuration and mods included. It is the simplest way to try a risky
mod or a new game version without touching a world you care about.
