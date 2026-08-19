# Automatic APK + GitHub Release

This workflow does both:

1. Uploads the APK as a GitHub Actions artifact.
2. Creates a GitHub Release automatically and attaches the APK.

## Use

Replace:

`.github/workflows/build-apk.yml`

in the `love-story` repository with this version.

Then run:

**GitHub -> Actions -> Build Android APK -> Run workflow**

After success:

**Actions -> successful run -> Artifacts**
- `Michael-Donnah-Love-Story-APK`

And:

**Repository -> Releases**
- a release such as `apk-v12`
- asset `Michael-Donnah-Love-Story.apk`

No manual tag is required for this workflow.

## Notes

The APK is a debug/testing APK, not a Google Play signed production build.

The workflow uses Java 21 because the generated Capacitor Android project requires a Java 21 compiler.

iOS builds require macOS/Xcode and are separate from this workflow.
