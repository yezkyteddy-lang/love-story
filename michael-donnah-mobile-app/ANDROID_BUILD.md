# Android build

This project wraps the existing Michael ♥ Donnah HTML/CSS/JS site with Capacitor.
Capacitor supports building Android and iOS apps from an existing web app.

## Windows

1. Install Node.js 22+ and Android Studio.
2. Make sure Android SDK, Platform Tools, and a recent Android platform are installed.
3. Open this folder in PowerShell.
4. Run:

```powershell
npm install
npx cap add android
npx cap sync
```

5. Open `android` in Android Studio.
6. Build a debug APK from **Build > Build APK(s)** for testing.
7. For a release, use **Build > Generate Signed Bundle / APK**.

### 32-bit + 64-bit

The included setup script configures these Android ABIs:

- armeabi-v7a (32-bit ARM)
- arm64-v8a (64-bit ARM)
- x86 (32-bit Intel)
- x86_64 (64-bit Intel)

For Google Play, use an Android App Bundle (`.aab`) and keep the 64-bit ARM ABI. For direct distribution, you can build a universal/suitable APK depending on your Android Studio configuration.

## One-click setup

Run:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\setup-mobile.ps1
```

Then open `android` in Android Studio.
