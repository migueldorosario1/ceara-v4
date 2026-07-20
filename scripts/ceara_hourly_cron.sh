#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
export CEARA_ASTRO_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$CEARA_ASTRO_DIR"

source "/home/migueldorosario/Downloads/Antigravity Google/Cicero Agentes/root/cicero_cron_env.sh"

if [[ -f tools/ceara_publish_paused.txt ]]; then
  pause_reason="$(head -c 240 tools/ceara_publish_paused.txt | tr '\n' ' ')"
  printf '[%s] Ceará Digital hourly publish skipped: publicacao automatica pausada (%s)\n' "$(date -Is)" "$pause_reason" >> logs/ceara_hourly_cron.log
  exit 0
fi

if [[ -f tools/loop_24h_until.txt ]]; then
  until_ts="$(cat tools/loop_24h_until.txt)"
  now_epoch="$(date +%s)"
  until_epoch="$(date -d "$until_ts" +%s 2>/dev/null || echo 0)"
  if [[ "$until_epoch" -gt 0 && "$now_epoch" -gt "$until_epoch" ]]; then
    printf '[%s] Ceará Digital hourly publish skipped: janela 24h encerrada em %s\n' "$(date -Is)" "$until_ts" >> logs/ceara_hourly_cron.log
    exit 0
  fi
fi

{
  printf '\n[%s] Ceará Digital hourly publish start\n' "$(date -Is)"
  "$CEARA_PYTHON" scripts/ceara_zelador_destaques.py
  "$CEARA_PYTHON" "/home/migueldorosario/Downloads/Antigravity Google/Cicero Agentes/root/cicero_smoke_markdown.py" 15 --queue
  
  # Upload new hero images to R2 and rewrite Markdown frontmatter to remote URLs
  "$CEARA_PYTHON" "/home/migueldorosario/Downloads/Antigravity Google/Cicero Agentes/root/cicero_migrar_hero_r2.py" upload
  "$CEARA_PYTHON" "/home/migueldorosario/Downloads/Antigravity Google/Cicero Agentes/root/cicero_migrar_hero_r2.py" rewrite

  "$CEARA_NPM" run ceara:publish-hourly
  printf '[%s] Ceará Digital hourly publish done\n' "$(date -Is)"
} >> logs/ceara_hourly_cron.log 2>&1
