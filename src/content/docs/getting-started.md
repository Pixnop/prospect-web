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

The project is moving, but it is early: no packaged release, no installer, no
auto-update. The screenshots in this documentation come from working builds, and
that is the most honest picture of what Prospect looks like today, while there is
nothing to download.

To follow progress or report an issue, head to the
[GitHub repository](https://github.com/Pixnop/Prospect).
