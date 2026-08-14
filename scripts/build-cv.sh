#!/usr/bin/env bash
# Render the CV PDFs from their YAML sources straight into public/cv/.
# Requires rendercv: `uv tool install "rendercv[full]"` (bundles Typst; no TeX needed).
# Each YAML's settings.render_command.pdf_path points at ../public/cv/<name>.pdf.
set -euo pipefail
cd "$(dirname "$0")/.."

rendercv render cv/cv-en.yaml
rendercv render cv/cv-es.yaml
echo "CV PDFs updated in public/cv/"
