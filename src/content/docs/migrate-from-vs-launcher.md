---
title: Migrate from VS Launcher
description: Import your VS Launcher installs into Prospect, as a guaranteed copy.
---

Prospect imports your VS Launcher installs itself: one dialog, and everything
is copied. Your VS Launcher folders are never changed or moved, so VS Launcher
keeps working exactly as before. That matters because VS Launcher, the
community launcher many players relied on for years, has been archived since
June 2026; its own author now points to a successor, Rustory. Prospect does not
try to clone it, but its model (one shared game version, one isolated profile
per instance) is the same.

## Import, built in

At first start, Prospect offers to import your VS Launcher installs. Later, the
same door lives in Settings: "Import your VS Launcher installs". The dialog
writes the guarantee under its title before you confirm anything: your folders
are copied, never changed or moved.

The import covers both halves of a VS Launcher setup: the installations
(worlds, mods, configuration, each becoming a Prospect instance) and the game
versions. One honest note on the versions: those files are copied as they are,
and nothing checks they are intact, unlike a download, which is verified on
arrival. In doubt, uninstall the version afterwards and reinstall it from the
Versions screen.

## Folder correspondence

| VS Launcher | Contents | Prospect |
| --- | --- | --- |
| `VSLGameVersions/` | the game's files, one folder per version | `versions/` |
| `VSLInstallations/<name>/` | worlds, mods, configuration | `instances/<name>/data/` |
| `VSLBackups/` | compressed backups | not imported; Prospect keeps its own per-instance backups (Options tab) |

On Linux, VS Launcher kept all of this under `~/.config/`. Prospect uses
`~/.local/share/prospect/`, so both folders can coexist for as long as you
like.

## Migrating by hand

The import is the normal path. If you prefer moving one instance yourself, or
your VS Launcher folder lives somewhere the import does not find, the manual
route still works:

1. **Install the same game version in Prospect**, from the Versions screen. A
   fresh download is verified on arrival, which hand-copied files are not.
2. **Create an instance in Prospect** with the same name, on that version.
3. **Copy the contents of the VS Launcher installation folder**
   (`VSLInstallations/<name>/`) into the new instance's `data/` folder: worlds
   (`Saves/`), configuration (`ModConfig/`) and mods (`Mods/`) included.
4. **Mods need nothing special**: they are `.zip` files inside `Mods/` on both
   sides. Once copied, they appear in the instance's Mods tab on its next
   refresh, no need to reinstall them one by one from the ModDB.

## What changes

**.NET, detected.** VS Launcher checked nothing, and its documentation asked
you to install .NET 7, 8 and 10 by hand, with no link to the game version you
actually used. Prospect knows which .NET each game version needs, detects what
is already installed and names precisely what is missing.

**Mod toggling.** VS Launcher only knew how to install, update or delete a mod.
Prospect can disable a mod without losing the file.

**macOS.** VS Launcher downloaded macOS builds but never learned to launch the
game there. Prospect starts from the same point: downloading works, launching is
not supported yet, see the [FAQ](../faq/).
