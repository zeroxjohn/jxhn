#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
timeout 25 google-chrome --headless=new --disable-gpu --no-sandbox \
  --disable-extensions --disable-background-networking --disable-sync --no-first-run \
  --user-data-dir="$(mktemp -d)" --no-pdf-header-footer \
  --print-to-pdf="$ROOT/public/resume.pdf" \
  "file://$ROOT/scripts/resume.html"
file "$ROOT/public/resume.pdf"
