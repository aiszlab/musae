import { create } from "@stylexjs/stylex";
import { tracking } from "./tokens.stylex";

/**
 * @description
 * typography - display
 */
export const $display = create({
  small: {
    fontSize: 36,
    fontWeight: 400,
    lineHeight: "44px",
    letterSpacing: tracking.none,
  },
  medium: {
    fontSize: 45,
    fontWeight: 400,
    lineHeight: "52px",
    letterSpacing: tracking.none,
  },
  large: {
    fontSize: 57,
    fontWeight: 400,
    lineHeight: "64px",
    letterSpacing: tracking.medium,
  },
});

/**
 * @description
 * typography - headline
 */
export const $headline = create({
  small: {
    fontSize: 24,
    fontWeight: 400,
    lineHeight: "32px",
    letterSpacing: tracking.none,
  },
  medium: {
    fontSize: 28,
    fontWeight: 400,
    lineHeight: "36px",
    letterSpacing: tracking.none,
  },
  large: {
    fontSize: 32,
    fontWeight: 400,
    lineHeight: "40px",
    letterSpacing: tracking.none,
  },
});

/**
 * @description
 * typography - title
 */
export const $title = create({
  small: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "20px",
    letterSpacing: tracking.xsmall,
  },
  medium: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "24px",
    letterSpacing: tracking.small,
  },
  large: {
    fontSize: 22,
    fontWeight: 400,
    lineHeight: "28px",
    letterSpacing: tracking.none,
  },
});

/**
 * @description
 * typography - body
 */
export const $body = create({
  small: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: "16px",
    letterSpacing: tracking.large,
  },
  medium: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "20px",
    letterSpacing: tracking.medium,
  },
  large: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "24px",
    letterSpacing: tracking.xlarge,
  },
});

/**
 * @description
 * typography - label
 */
export const $label = create({
  small: {
    fontSize: 11,
    fontWeight: 500,
    lineHeight: "16px",
    letterSpacing: tracking.xlarge,
  },
  medium: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: "16px",
    letterSpacing: tracking.xlarge,
  },
  large: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: "20px",
    letterSpacing: tracking.xsmall,
  },
});

/**
 * @description scrollbar
 */
export const $scrollbar = create({
  default: {
    scrollbarWidth: "thin",
    scrollbarColor: "var(--color-scrollbar-thumb, #eaeaea) transparent",
  },
});
