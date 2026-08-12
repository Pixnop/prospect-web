---
title: Getting started
description: Build and run Prospect from source.
---

Prospect is still in early development. There is no published release to download
yet: the only way to run it today is to build it yourself.

## Prerequisites

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
