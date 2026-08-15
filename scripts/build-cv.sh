#!/usr/bin/env bash
# Render the CV PDFs from their YAML sources straight into public/cv/.
# Requires rendercv: `uv tool install "rendercv[full]"` (bundles Typst; no TeX needed).
# First run also downloads the fontawesome Typst package, so it needs network access.
# Each YAML's settings.render_command.pdf_path points at ../public/cv/<name>.pdf.
set -euo pipefail
cd "$(dirname "$0")/.."

# rendercv exits 0 even on YAML validation errors, so grep its output and fail hard.
render() {
  local out status=0
  # Without the `|| status=$?`, `set -e` aborts the script on a non-zero exit
  # before the output is ever echoed, and the failure looks like silence.
  out="$(rendercv render "$1" 2>&1)" || status=$?
  echo "$out"
  if [ "$status" -ne 0 ] || grep -qiE "validation error|not a valid|error:" <<<"$out"; then
    echo "ERROR: rendercv failed rendering $1 (exit $status)" >&2
    exit 1
  fi
}

render cv/cv-en.yaml
render cv/cv-es.yaml
echo "CV PDFs updated in public/cv/"
