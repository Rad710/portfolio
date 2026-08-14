#!/usr/bin/env bash
# Render the CV PDFs from their YAML sources straight into public/cv/.
# Requires rendercv: `uv tool install "rendercv[full]"` (bundles Typst; no TeX needed).
# Each YAML's settings.render_command.pdf_path points at ../public/cv/<name>.pdf.
set -euo pipefail
cd "$(dirname "$0")/.."

# rendercv exits 0 even on YAML validation errors, so grep its output and fail hard.
render() {
  local out
  out="$(rendercv render "$1" 2>&1)"
  echo "$out"
  if grep -qiE "validation error|not a valid|error:" <<<"$out"; then
    echo "ERROR: rendercv reported a problem rendering $1" >&2
    exit 1
  fi
}

render cv/cv-en.yaml
render cv/cv-es.yaml
echo "CV PDFs updated in public/cv/"
