---
title: Getting started
description: Build and run Prospect from source.
---

Prospect is in early development, but a first pre-release is available: download
it, or build it yourself.

## Download the pre-release

The [releases page](https://github.com/Pixnop/Prospect/releases/latest) provides a
Linux archive (`prospect-<version>-linux-x64.tar.gz`, with a ready-to-run
`Prospect` binary once extracted) and a Windows archive
(`prospect-<version>-win-x64.zip`, `Prospect.exe`), with SHA-256 sums alongside.

On Windows, the binary is not code-signed yet: SmartScreen will report an unknown
publisher. Choose "More info", then "Run anyway". There is no installer and no
auto-update for now: a new version is downloaded from the same place.

## Prerequisites (building)

You need the **.NET 10 SDK** installed. Check your version with:

```sh
dotnet --version
```

## Build from source

```sh
git clone https://github.com/Pixnop/Prospect.git
cd Prospect
dotnet run --project src/Prospect.Desktop
```

Three commands: clone the repository, then build and launch the desktop app.

## What to expect

You get a working launcher, early. The pre-release installs nothing system-wide:
extract the archive, run the binary, and a newer build replaces it from the same
page, since there is no auto-update yet. The screenshots in this documentation
come from today's builds.

The interface speaks English and French. The first start follows your system
language; Settings changes it, and the choice applies the next time Prospect
starts.

If you come from VS Launcher, Prospect offers to import your installs at first
start: a copy, your original folders untouched. The details are in
[Migrate from VS Launcher](../migrate-from-vs-launcher/).

To follow progress or report an issue, head to the
[GitHub repository](https://github.com/Pixnop/Prospect). For a report, the Logs
page (in the sidebar) shows what Prospect did during the session and exports it
to a file: attach that file, it settles most questions.
