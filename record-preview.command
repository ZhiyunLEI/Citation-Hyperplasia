#!/bin/zsh
set -e

cd "$(dirname "$0")"

PORT=8765
URL="http://127.0.0.1:${PORT}/index.html?preview=1"
OUT="$(pwd)/performance-preview.mov"

if ! lsof -iTCP:${PORT} -sTCP:LISTEN >/dev/null 2>&1; then
  python3 -m http.server "${PORT}" --bind 127.0.0.1 >/tmp/citation-preview-server.log 2>&1 &
  SERVER_PID=$!
  sleep 1
fi

open -a Safari "$URL"
sleep 2

echo "Recording 15-second performance preview..."
echo "Output: $OUT"
screencapture -v -V15 -k "$OUT"

if [[ -n "${SERVER_PID:-}" ]]; then
  kill "$SERVER_PID" >/dev/null 2>&1 || true
fi

echo "Done."
