$ErrorActionPreference = 'Stop'

Write-Host "Michael ♥ Donnah Mobile App Setup" -ForegroundColor Magenta
Write-Host ""
Write-Host "1) Installing npm dependencies..."
npm install

if (-not (Test-Path "android")) {
  Write-Host "2) Adding Android platform..."
  npx cap add android
}

if (-not (Test-Path "ios")) {
  Write-Host "3) Adding iOS platform..."
  npx cap add ios
}

Write-Host "4) Syncing web assets..."
npx cap sync

$gradleFile = "android/app/build.gradle"
if (Test-Path $gradleFile) {
  $text = Get-Content $gradleFile -Raw
  if ($text -notmatch "abiFilters") {
    $replacement = @"
    ndk {
        abiFilters 'armeabi-v7a', 'arm64-v8a', 'x86', 'x86_64'
    }
"@
    $text = $text -replace '(android\s*\{)', '$1\n' + $replacement, 1
    Set-Content -Path $gradleFile -Value $text -NoNewline
  }
}

Write-Host ""
Write-Host "Setup complete." -ForegroundColor Green
Write-Host "Android: open Android Studio, open ./android, then Build > Generate Signed Bundle/APK."
Write-Host "iOS: copy this project to a Mac, install CocoaPods/Xcode, then open ./ios/App/App.xcworkspace."
