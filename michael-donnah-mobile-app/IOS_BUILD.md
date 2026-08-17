# iOS build

An iOS `.ipa` cannot be reliably built or signed on Windows/Linux. Apple requires Xcode on macOS for the final iOS build, signing, and distribution.

On a Mac:

```bash
npm install
npx cap add ios
npx cap sync
npx cap open ios
```

Open the project in Xcode, set your Apple Developer team and bundle identifier `com.michaelanddonnah.loveuniverse`, then run it on an iPhone or archive it for distribution.

The web app itself is shared with Android, so you maintain one HTML/CSS/JS codebase.
