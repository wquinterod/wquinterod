@echo off
cd /d "%~dp0"
if not exist "style.css" (
 echo ERROR: style.css missing. Please extract the full ZIP before opening.
 pause
 exit /b 1
)
if not exist "images\hero-tech.svg" (
 echo ERROR: image folder missing. Please extract the full ZIP before opening.
 pause
 exit /b 1
)
start "" "index.html"
