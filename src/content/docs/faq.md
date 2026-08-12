---
title: FAQ
description: Account, macOS, data locations and version channels.
---

## Can I download Prospect now?

Not yet: the project is in early development and has no published release. See
[Getting started](../getting-started/) to build it yourself.

## Do I need an account?

No, not for anything the MVP covers. Listing and downloading game versions
requires no vintagestory.at account: it is entirely public. An account only
becomes useful later, as a multiplayer convenience.

## What about macOS?

Downloading works: Prospect fetches and installs the macOS builds (`mac-arm64`
and `mac-x64`) like any other platform. The Play button is not supported on that
OS yet.

## Where is my data?

Everything lives under one root folder, at the standard location for your OS:

- Linux: `~/.local/share/prospect/`
- Windows: `%APPDATA%\Prospect\`
- macOS: `~/Library/Application Support/Prospect/`

Instances live in `instances/`, installed game versions in `versions/`.

## What is the rc channel?

`rc` stands for *release candidate*: a version candidate to become the next
stable, published on the unstable channel to be tested before the official
release. You can tell one by its suffix, `1.22.0-rc.1` for example. Nothing
stops you from installing it next to a stable version, in a separate instance.
