---
title: Logs
description: The Logs page, the zip export and each instance's launch log.
---

Prospect writes down what it does, and shows it without leaving the app: the
Logs page in the sidebar covers the launcher itself, the Journal tab of each
instance covers the game.

## The Logs page

It shows the tail of the application log, up to the last 500 lines. Ordinary
lines stay plain; warnings and errors are tinted, because the unusual is what
you open a log for. While the page is on screen it rereads itself every two
seconds: leave it open while you reproduce a problem elsewhere and the line
shows up as you watch. The Refresh button forces a reread to the second, and
the file's path is printed under the list.

The file is capped at 1 MB: past that, it starts over rather than growing
forever.

## The zip export

The Export button writes an archive (`prospect-logs.zip` by default) that
carries the whole `logs/` folder: the application log and every instance's
launch log. For a report on GitHub, attach that zip and nothing else: it holds
what is needed to understand what happened, and it settles most questions.

## The launch log, per instance

Each instance has its own. At launch, Prospect writes a header line (the
instance's name, its game version, the time), then everything the game says,
error output included. The file is overwritten by the next launch: it is the
log of the last launch, not a full history. You read it in the Journal tab of
the instance's page, as is.

That log is not just for reading: after each session, Prospect reads it back
for you. A mod that failed carries a badge on the Mods tab ("3 errors at the
last launch"), and detected integrations between mods show up as "works
with". The badges themselves are described on the [Mods](../mods/) page.

Deleting an instance takes its launch log with it.

## On disk

Logs live in `logs/`, under Prospect's root folder:

- Linux: `~/.local/share/prospect/logs/`
- Windows: `%APPDATA%\Prospect\logs\`
- macOS: `~/Library/Application Support/Prospect/logs/`

`prospect.log` is the application log; the `instance-*.log` files are the
launch logs, one per instance. That is exactly what the zip export carries.
