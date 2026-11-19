#!/usr/bin/env bash
# Renders /cv to public/Hoang-Xuan-Truong-CV.pdf with headless Chrome.
# Usage: start the app (pnpm dev or pnpm start), then: pnpm cv:pdf [base-url]
set -euo pipefail
BASE_URL="${1:-http://localhost:3000}"
OUT="$(cd "$(dirname "$0")/.." && pwd)/public/Hoang-Xuan-Truong-CV.pdf"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=5000 --print-to-pdf="$OUT" "$BASE_URL/cv"
echo "Wrote $OUT"
