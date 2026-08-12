---
title: Migrate from VS Launcher
description: Bring your VS Launcher instances and versions into Prospect.
---

VS Launcher, the community launcher many players relied on for years, has been
archived since June 2026. Its own author now points to a successor, Rustory.
Prospect does not try to clone VS Launcher, but its model (one shared game
version, one isolated profile per instance) is the same, which makes migration
straightforward.

## Folder correspondence

| VS Launcher | Contents | Prospect |
| --- | --- | --- |
| `VSLGameVersions/` | the game engines, one folder per version | `versions/` |
| `VSLInstallations/<name>/` | worlds, mods, configuration | `instances/<name>/data/` |
| `VSLBackups/` | compressed backups | no equivalent yet |

On Linux, VS Launcher kept all of this under `~/.config/`. Prospect uses
`~/.local/share/prospect/`, so both folders can coexist while you migrate.

## Migrating an installation

1. **Install the same game version in Prospect**, from the Versions screen. The
   engine is not copied over from VS Launcher: Prospect downloads it again,
   which stays quick since the download is public and direct.
2. **Create an instance in Prospect** with the same name, on that version.
3. **Copy the contents of the VS Launcher installation folder**
   (`VSLInstallations/<name>/`) into the new instance's `data/` folder: worlds
   (`Saves/`), configuration (`ModConfig/`) and mods (`Mods/`) included.
4. **Mods need nothing special**: they are `.zip` files inside `Mods/` on both
   sides. Once copied, Prospect picks them up at the next scan of the instance,
   no need to reinstall them one by one from the ModDB.

## What changes

**Runtime detection.** VS Launcher checked nothing, and its documentation asked
you to install .NET 7, 8 and 10 by hand, with no link to the game version you
actually used. Prospect detects what is already installed and states precisely
what is missing, tied to the game version concerned.

**Mod toggling.** VS Launcher only knew how to install, update or delete a mod.
Prospect can disable a mod without losing the file.

**macOS.** VS Launcher downloaded macOS builds but never learned to launch the
game there. Prospect starts from the same point: downloading works, launching is
not supported yet, see the [FAQ](../faq/).
