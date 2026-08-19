@echo off
setlocal
cd /d "%~dp0"
where npx >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed.
  echo Install Node.js LTS, then run this file again.
  pause
  exit /b 1
)
echo Starting Michael & Donnah website on http://127.0.0.1:5500
start "Michael & Donnah" http://127.0.0.1:5500/index.html
npx --yes http-server . -p 5500 -c-1
pause
