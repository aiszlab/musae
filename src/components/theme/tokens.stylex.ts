import { defineVars } from "@stylexjs/stylex";

/**
 * @description
 * elevations
 */
export const elevations = defineVars({
  none: "none",
  xsmall: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)",
  small: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)",
  medium: "0px 1px 3px 0px rgba(0, 0, 0, 0.30), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)",
  large: "0px 2px 3px 0px rgba(0, 0, 0, 0.30), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)",
  xlarge: "0px 4px 4px 0px rgba(0, 0, 0, 0.30), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)",
});

/**
 * @description
 * spacing
 */
export const spacing = defineVars({
  none: "0px",
  xxxsmall: "2px",
  xxsmall: "4px",
  xsmall: "6px",
  small: "8px",
  medium: "12px",
  large: "16px",
  xlarge: "24px",
  xxlarge: "32px",
  xxxlarge: "48px",
  auto: "auto",
});

/**
 * @description
 * sizes
 */
export const sizes = defineVars({
  none: "0px",
  smallest: "1px",
  xxxsmall: "4px",
  xxsmall: "8px",
  xsmall: "16px",
  small: "24px",
  medium: "32px",
  large: "40px",
  xlarge: "48px",
  xxlarge: "64px",
  xxxlarge: "96px",
  infinity: `calc(${Infinity} * 1px)`,
  full: "100%",
  auto: "auto",
});

/**
 * @description
 * tracking
 */
export const tracking = defineVars({
  none: "0px",
  xsmall: "0.1px",
  small: "0.15px",
  medium: "0.25px",
  large: "0.4px",
  xlarge: "0.5px",
});
