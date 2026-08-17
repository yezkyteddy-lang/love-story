@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>&1 || (echo Node.js is required.& pause & exit /b 1)
where npm >nul 2>&1 || (echo npm is required.& pause & exit /b 1)
echo Installing dependencies...
npm install
if not exist android (
  echo Adding Android platform...
  npx cap add android
)
echo Syncing web app...
npx cap sync android
if exist android\gradlew.bat (
  echo Building debug APK...
  call android\gradlew.bat -p android assembleDebug
  echo.
  echo APK output should be under android\app\build\outputs\apk\debug\
) else (
  echo Android platform not available. Open the android folder in Android Studio.
)
pause
