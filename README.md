# Michael × Donnah Android APK workflow v4

This version fixes the current build failure:

`invalid source release: 21`

Cause: the generated Capacitor Android project requires Java 21 while the workflow was using Java 17.

This workflow now uses Java 21 and verifies both `java` and `javac` before building.

It also keeps the earlier fixes:
- no npm cache dependency path before the temporary lockfile exists
- no premature Gradle cache
- explicit TypeScript installation
- JSON Capacitor config
- Android SDK setup
- APK artifact upload
- optional GitHub Release on version tags

Run:
GitHub -> Actions -> Build Android APK -> Run workflow

Expected artifact:
`michael-donnah-android-apk`

Expected APK:
`Michael-Donnah-Love-Story-debug.apk`
