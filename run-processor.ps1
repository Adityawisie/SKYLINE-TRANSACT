#!/usr/bin/env pwsh

Write-Host "Certificate Processor Script" -ForegroundColor Cyan
Write-Host "===========================" -ForegroundColor Cyan
Write-Host ""

if ($args.Count -eq 0) {
    Write-Host "Usage: .\run-processor.ps1 <data-file> [output-formats]" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Examples:" -ForegroundColor White
    Write-Host "  .\run-processor.ps1 sample-certificates.csv"
    Write-Host "  .\run-processor.ps1 sample-certificates.json"
    Write-Host "  .\run-processor.ps1 sample-certificates.csv png"
    Write-Host "  .\run-processor.ps1 sample-certificates.csv png,pdf"
    Write-Host ""
    Write-Host "Supported output formats: png, pdf" -ForegroundColor Green
    Write-Host ""
    Read-Host "Press Enter to continue"
    exit 1
}

$dataFile = $args[0]
$outputFormats = if ($args.Count -gt 1) { $args[1] } else { "png,pdf" }

Write-Host "Processing certificates..." -ForegroundColor Green
Write-Host "Data file: $dataFile" -ForegroundColor White
Write-Host "Output formats: $outputFormats" -ForegroundColor White
Write-Host ""

try {
    node certificate-processor.js $dataFile $outputFormats
    Write-Host ""
    Write-Host "Processing completed successfully!" -ForegroundColor Green
} catch {
    Write-Host ""
    Write-Host "Error occurred during processing: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host ""
Read-Host "Press Enter to continue" 