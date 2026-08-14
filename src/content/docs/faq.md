---
title: FAQ
description: Account, macOS, data locations, versions and modpacks.
---

## Can I download Prospect now?

Yes: a pre-release is available on the
[releases page](https://github.com/Pixnop/Prospect/releases/latest), as a Linux
archive (tar.gz) and a Windows archive (zip). It is a development build, with no
installer and no auto-update. See [Getting started](../getting-started/) for the
details, including the SmartScreen note on Windows.

## Do I need an account?

No. Listing and downloading game versions requires no vintagestory.at account:
it is entirely public, and playing solo never needs one either. Signing in
exists for one thing, multiplayer. The sign-in lives in Settings, your session
is written into each instance at launch, and your password is used once to
obtain that session, then forgotten: Prospect stores it nowhere.

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

## Which languages does Prospect speak?

English and French. The first start follows your system language; Settings
changes it, and the choice applies the next time Prospect starts.

## What is an rc version?

`rc` stands for *release candidate*: a version candidate to become the next
stable, listed among the test versions (with an `unstable` badge) to be tried
before the official one. You can tell one by its suffix, `1.22.0-rc.1` for
example. Nothing stops you from installing it next to a stable version, in a
separate instance.

## What about modpacks?

The export and import screens have been removed for now. Sharing a pack raises
questions a button cannot settle alone, such as what happens to a mod pulled
from the ModDB, or to a game version that disappeared. Those deserve real
answers first, so the machinery stays in the code and the screens will come
back. In the meantime, duplicating an instance covers the local cases.
