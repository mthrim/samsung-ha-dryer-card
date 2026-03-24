export const CARD_TAG = "samsung-ha-dryer-card";

export const DEFAULT_CONFIG = {
  device_name: "dryer",
  title: "Dryer",
  show_subtitle: true,
  layout_mode: "hero",
  show_completion_time: true,
  show_status_chips: true,
  show_power: true,
  show_energy: true,
  show_wrinkle_prevent_control: true,
  icons: {
    appliance: "mdi:tumble-dryer",
    start: "mdi:play",
    pause: "mdi:pause",
    stop: "mdi:stop",
    child_lock: "mdi:lock",
    remote_control: "mdi:remote",
    wrinkle_prevent: "mdi:tshirt-crew",
    power: "mdi:flash",
    energy: "mdi:lightning-bolt",
    complete: "mdi:clock-outline"
  }
};

export const ENTITY_KEYS = {
  machineState: "machine_state",
  jobState: "job_state",
  completionTime: "completion_time",
  command: "command",
  childLock: "child_lock",
  remoteControl: "remote_control",
  wrinklePreventActive: "wrinkle_prevent_active",
  wrinklePreventSwitch: "wrinkle_prevent_switch",
  power: "power",
  cycleEnergy: "cycle_energy"
};

export const JOB_STATE_LABELS = {
  cooling: "Cooling",
  delay_wash: "Delayed",
  drying: "Drying",
  finished: "Finished",
  none: "Idle",
  refreshing: "Refreshing",
  weight_sensing: "Sensing Load",
  wrinkle_prevent: "Wrinkle Prevent",
  dehumidifying: "Dehumidifying",
  ai_drying: "AI Drying",
  sanitizing: "Sanitizing",
  internal_care: "Internal Care",
  freeze_protection: "Freeze Protection",
  continuous_dehumidifying: "Continuous Dehumidifying",
  thawing_frozen_inside: "Thawing"
};

export const MACHINE_STATE_LABELS = {
  run: "Running",
  pause: "Paused",
  stop: "Stopped"
};