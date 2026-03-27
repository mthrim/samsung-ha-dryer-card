# Changelog

## v0.4.0 — 2026-03-27 (3)
- `dryer-card-helpers.js` — added `formatCountdown()`: formats remaining time as `Xh Ym` (>=90min), `Xm` (<=90min), or `Xm Ys` (<10min)
- `dryer-card.js` — added live countdown timer in hero section below primary status, with 1-second tick interval
- `dryer-card.js` — moved "Completes at" badge to header top-right, increased size
- `dryer-card.js` — removed redundant RUNNING status badge from header
- `dryer-card.js` — secondary status (Running/Paused) now shown below countdown in hero

## v0.3.3 — 2026-03-27 (2)
- `dryer-card.js` — radial progress rendered behind drum icon (removed z-index: 2)
- `dryer-card.js` — progress radius mapped to 10%–100% so it's visible even at low completion

## v0.3.2 — 2026-03-27 (1)
- `dryer-card.js` — fixed radial progress hidden behind drum overlay by adding z-index: 2 to `.drum-progress`

## v0.3.1 — 2026-03-27
- `dryer-card.js` — changed drum progress from `conic-gradient` (clock sweep) to `radial-gradient` (center-outward fill)

## 2026-03-25 (3)
- `dryer-card.js` — fix drum progress fill direction: now fills up as cycle progresses (0% → 100%) instead of draining down
- `dryer-card-constants.js` — remove redundant `completion_color_1/2` defaults (`var(--primary-text-color)` is the natural badge color); fix `finished` → `finish` in `JOB_STATE_LABELS` to match HA enum
- `dryer-card-helpers.js` — fix `"finished"` → `"finish"` in `getSecondaryStatus` job state check

## 2026-03-25 (2)
- `dryer-card-constants.js` — added `show_drum_progress` (default: true) and `drum_progress_color` (default: `#5b9cf6`)
- `dryer-card-helpers.js` — extracted `getCompletionPercent()` shared helper; refactored `getCompletionColor()` to use it
- `dryer-card.js` — added `.drum-progress` element with `conic-gradient` fill driven by % remaining; visible when running or paused
- `dryer-card-editor.js` — added "Show drum progress fill" toggle and "Drum progress color" field in Display Options

## 2026-03-25
- `dryer-card-constants.js` — prefilled `completion_color_threshold_1/2` (50%, 30%) and `completion_color_1/2` (`var(--primary-text-color)`) so defaults are visually inert

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
