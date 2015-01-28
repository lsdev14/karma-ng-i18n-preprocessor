@echo off

REM Windows script for running server unit tests
REM Requirements:
REM - NodeJS (http://nodejs.org/)
REM - Mocha (npm install -g mocha)

set BASE_DIR=%~dp0
node "%BASE_DIR%\..\node_modules\mocha\bin\mocha" -t 30000 "%BASE_DIR%\..\test" --globals "NODE_CONFIG"
