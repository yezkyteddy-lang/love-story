# Fixed GitHub Actions Android APK workflow

This version fixes the previous failure:

`Could not find installation of TypeScript.`

The cause was the workflow creating `capacitor.config.ts` without installing TypeScript.

This workflow now creates `capacitor.config.json`, so TypeScript is not required.

It also removes the premature npm/Gradle cache settings that caused earlier setup failures.

## What it builds

A universal debug APK:

`Michael-Donnah-Love-Story-debug.apk`

A universal APK contains the Android native libraries needed by supported ABIs, so it is the easiest single APK to install on Android phones.

## Run

GitHub:
Actions -> Build Android APK -> Run workflow

Then open the successful run and download:

`michael-donnah-android-apk`

## Release

Push a tag:

```bash
git tag v1.0.0
git push origin v1.0.0
```

The same APK will be attached to the GitHub Release.

## Important

This workflow builds Android only. iOS requires a macOS/Xcode signing environment.

The GitHub Pages deploy failure shown separately in the Actions checks is a different workflow/job from the APK build.
