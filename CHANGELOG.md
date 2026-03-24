# Changelog

## 2026-03-24 (2)
- `dryer-card-constants.js` — added `finished_green_duration` config option (default 60 minutes)
- `dryer-card-helpers.js` — added `isFinishedRecently()`: checks `last_changed` timestamp against configured duration
- `dryer-card.js` — green card now expires after configured duration using `last_changed` from HA entity
- `dryer-card-editor.js` — added "Green highlight duration" number field in Display Options

## 2026-03-24
- `dryer-card-helpers.js` — `getPrimaryStatus`: all `stop` machine states now display "Finished" instead of "Stopped"
- `dryer-card.js` — card background turns dark green when dryer state is finished
- `dryer-card-helpers.js` — `formatTimestamp`: completion time now uses 24h format (`hour12: false`)
