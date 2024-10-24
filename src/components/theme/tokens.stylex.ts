import { defineVars } from "@stylexjs/stylex";

export type ElevationToken = "none" | "xsmall" | "small" | "medium" | "large" | "xlarge";

/**
 * @description
 * elevations
 */
export const elevations = defineVars<Record<ElevationToken, string>>({
  none: "none",
  xsmall:
    "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
  small:
    "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
  medium:
    "rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px",
  large:
    "rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px",
  xlarge:
    "rgba(0, 0, 0, 0.2) 0px 7px 8px -4px, rgba(0, 0, 0, 0.14) 0px 12px 17px 2px, rgba(0, 0, 0, 0.12) 0px 5px 22px 4px",
});

/**
 * @description
 * spacing
 */
export const spacing = defineVars({
  none: "0px",
  smallest: "1px",
  xxxxsmall: "2px",
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
  xxxxxxsmall: "2px",
  xxxxxsmall: "4px",
  xxxxsmall: "8px",
  xxxsmall: "16px",
  xxsmall: "20px",
  xsmall: "24px",
  small: "28px",
  medium: "32px",
  large: "36px",
  xlarge: "40px",
  xxlarge: "48px",
  xxxlarge: "64px",
  xxxxlarge: "96px",
  xxxxxlarge: "120px",
  xxxxxxlarge: "190px",
  infinity: `calc(${Infinity} * 1px)`,
  full: "100%",
  half: "50%",
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

/**
 * @description
 * positions
 * in musae, we have many zIndex request
 * like dialog, we need it be toper than other content
 */
export const positions = defineVars({
  background: "-1",
  min: "1",
  header: "50",
  popper: "60",
  floatable: "990",
  dialog: "1080",
  drawer: "1080",
  tour: "1080",
  overlay: "1080",
  image: "1090",
  notification: "1200",
  max: "9999",
});

/**
 * @description
 * opacity
 */

export type OpacityToken = "thin" | "medium" | "thick" | "thicker";

export const OPACITY: Record<OpacityToken, number> = {
  thin: 0.08,
  medium: 0.12,
  thick: 0.16,
  thicker: 0.38,
};

export const opacity = defineVars(OPACITY);
