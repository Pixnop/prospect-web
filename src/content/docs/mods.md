---
title: Mods
description: Install mods from the official ModDB, straight into an instance.
---

The mod browser talks to the official ModDB
([mods.vintagestory.at](https://mods.vintagestory.at)) from inside Prospect:
search by name, filter by tag (Exploration, Utility, Worldgen and so on) and by
game version. Every card carries the mod's one-line summary, so you know what a
mod does before opening anything.

## The mod's page, as its author wrote it

Open a card and the description arrives with its headings, lists, images and
links, not a flattened text dump. The one-line summary sits at the top next to
the name and author, and the links the author declared (source code, wiki,
issues) get buttons.

## Installs are per instance

Mods install into the instance you opened the browser from, never globally. The
compatibility shown on each mod (`1.21.3` · `client and server`, for example) is
computed for that precise instance, and a mod already present says so on its
card.

## You choose the version you install

Installing does not silently take the newest file: the dialog lists every
compatible version with its date and changelog, newest preselected, and picking
another re-reads its dependencies. Compatibility tags on the ModDB are ticked
by hand and fall behind, so Prospect also lets you install a version that is
not declared for your game version: the warning stays in view, names the
versions the author did declare, and the choice is yours.

## Dependencies proposed, never imposed

When a mod needs another mod to work, Prospect proposes it in the same dialog.
It never installs anything on your behalf, and it warns you before removing a
mod that another installed mod depends on. A library with no version declared
for your game is not waved off as "not found": Prospect names its best
published version and offers it, warning attached.

## Enable, disable, keep the file

Every installed mod has its own toggle. Disabling a mod does not delete it: one
click brings it back. VS Launcher never had this; its only verbs were install,
update and delete.

## After a launch, the verdict

The instance's Mods tab reads the launch log back. A mod that failed carries a
badge ("3 errors at the last launch") with the offending lines in its tooltip,
and a mod whose integration with another one resolved says "works with X". A
healthy mod shows nothing, which is the ordinary case. Checking for updates
states its verdict just as plainly, including that everything is up to date.
