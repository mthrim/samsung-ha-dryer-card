# Changelog

## 2026-03-24 (4)
- `dryer-card-helpers.js` — added `getCompletionColor()`: computes % remaining using `power_consumption_start` + `completion_time`, returns threshold-matched hex color
- `dryer-card.js` — completion time badge now accepts an inline color via `completionColor` prop
- `dryer-card-editor.js` — added "Completion Time Colors" section with two configurable threshold/color pairs (`completion_color_threshold_1/2`, `completion_color_1/2`)

## 2026-03-24 (3)
- `dryer-card.js` — label reverts to "Stopped" when green highlight duration has expired

## 2026-03-24 (2)
- `dryer-card-constants.js` — added `finished_green_duration` config option (default 60 minutes)
- `dryer-card-helpers.js` — added `isFinishedRecently()`: checks `last_changed` timestamp against configured duration
- `dryer-card.js` — green card now expires after configured duration using `last_changed` from HA entity
- `dryer-card-editor.js` — added "Green highlight duration" number field in Display Options

## 2026-03-24
- `dryer-card-helpers.js` — `getPrimaryStatus`: all `stop` machine states now display "Finished" instead of "Stopped"
- `dryer-card.js` — card background turns dark green when dryer state is finished
- `dryer-card-helpers.js` — `formatTimestamp`: completion time now uses 24h format (`hour12: false`)
