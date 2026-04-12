import type { PowerGlitchOptions, RecursivePartial } from "powerglitch";

export const directionGlitchOpts: RecursivePartial<PowerGlitchOptions> = {
  playMode: "always",
  optimizeSeo: true,
  createContainers: true,
  hideOverflow: false,
  timing: {
    duration: 2000,
    easing: "linear",
  },
  glitchTimeSpan: {
    start: 0,
    end: 1,
  },
  shake: {
    velocity: 1,
    amplitudeX: 0.2,
    amplitudeY: 0.1,
  },
  slice: {
    count: 15,
    velocity: 20,
    minHeight: 0.02,
    maxHeight: 0.15,
    hueRotate: true,
  },
  pulse: false,
};
