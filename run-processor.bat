@echo off
echo Certificate Processor Script
echo ===========================
echo.

if "%1"=="" (
    echo Usage: run-processor.bat ^<data-file^> [output-formats]
    echo.
    echo Examples:
    echo   run-processor.bat sample-certificates.csv
    echo   run-processor.bat sample-certificates.json
    echo   run-processor.bat sample-certificates.csv png
    echo   run-processor.bat sample-certificates.csv png,pdf
    echo.
    echo Supported output formats: png, pdf
    echo.
    pause
    exit /b 1
)

echo Processing certificates...
echo Data file: %1
if "%2"=="" (
    echo Output formats: png, pdf (default)
) else (
    echo Output formats: %2
)
echo.

node certificate-processor.js %1 %2

echo.
echo Processing completed!
pause 