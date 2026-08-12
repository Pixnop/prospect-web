---
title: Modpacks
description: Export and share an instance's configuration as a modpack.
---

A modpack is an instance's manifest: the game version, the mod list (ModDB
identifier and version) and which of those mods are enabled or disabled. The
manifest travels alone: no absolute path, no signed URL, only references to the
ModDB.

## Exporting

From an instance's page, "Export" produces a portable modpack file. Each mod's
state (enabled or disabled) travels with it: importing the pack elsewhere
recreates the exact same configuration, not merely the same list of mods.

## Importing

Importing a modpack creates a new instance, installs the missing game version if
needed, then resolves every mod against the ModDB. If one mod cannot be resolved
(removed, renamed), the import carries on with the rest and reports precisely
what failed rather than cancelling everything.
