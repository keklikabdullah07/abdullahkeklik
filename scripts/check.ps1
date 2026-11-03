# scripts/check.ps1 — Windows PowerShell icin 5 Asamali Kati Kanit Zinciri
# Sifir Sahte Kapi: Herhangi bir asama veya konfigurasyon eksikse dogrudan fail eder.
$ErrorActionPreference = "Stop"

function Exec-Step {
    param(
        [scriptblock]$Command,
        [string]$StepName
    )
    & $Command
    if ($LASTEXITCODE -ne 0) {
        Write-Host ""
        Write-Host "[HATA] $StepName basarisiz oldu! (Exit Code: $LASTEXITCODE)" -ForegroundColor Red
        exit $LASTEXITCODE
    }
}

Write-Host ""
Write-Host "=== 1/5 TypeScript ===" -ForegroundColor Cyan
if (!(Test-Path "tsconfig.json")) {
    Write-Host "[HATA] tsconfig.json bulunamadi - derleme dogrulamasi zorunludur!" -ForegroundColor Red
    exit 1
}
Exec-Step { npx tsc --noEmit } "TypeScript Kontrolu"

Write-Host ""
Write-Host "=== 2/5 Lint ===" -ForegroundColor Cyan
if (Test-Path "biome.json") {
    Exec-Step { npx biome check . } "Biome Lint"
} elseif ((Test-Path ".eslintrc.json") -or (Test-Path "eslint.config.js") -or (Test-Path "eslint.config.mjs")) {
    Exec-Step { npx eslint . --max-warnings=0 } "ESLint"
} else {
    Write-Host "[HATA] Linter yapilandirmasi (biome.json veya eslint) bulunamadi - kod kalitesi dogrulamasi zorunludur!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "=== 3/5 Birim Testleri ===" -ForegroundColor Cyan
if ((Test-Path "vitest.config.ts") -or (Test-Path "vitest.config.js") -or (Test-Path "vite.config.ts")) {
    Exec-Step { npx vitest run } "Vitest Testleri"
} else {
    Write-Host "[HATA] Test yapilandirmasi (vitest) bulunamadi - birim test kaniti zorunludur!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "=== 4/5 Bilinmeyenler Kapisi ===" -ForegroundColor Cyan
if (!(Test-Path "scripts\check-unknowns.ts")) {
    Write-Host "[HATA] scripts/check-unknowns.ts bulunamadi!" -ForegroundColor Red
    exit 1
}
Exec-Step { npx tsx scripts\check-unknowns.ts } "Bilinmeyenler Kapisi"

Write-Host ""
Write-Host "=== 5/5 Harness Drift ve Invariant Kapisi ===" -ForegroundColor Cyan
if (!(Test-Path "scripts\check-adr-drift.ts")) {
    Write-Host "[HATA] scripts/check-adr-drift.ts bulunamadi!" -ForegroundColor Red
    exit 1
}
Exec-Step { npx tsx scripts\check-adr-drift.ts } "Harness Drift Kapisi"

Write-Host ""
Write-Host "[OK] scripts/check basariyla gecti. 5 asamali kati kanit hazir." -ForegroundColor Green
Write-Host ""
