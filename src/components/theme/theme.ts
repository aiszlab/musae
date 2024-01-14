import { create } from "@stylexjs/stylex";

/**
 * @description
 * typography - headline
 */
export const HEADLINE = create({
  small: {
    fontSize: 24,
    fontWeight: 400,
    lineHeight: "32px",
  },
});

/**
 * @description
 * typography - body
 */
export const BODY = create({
  small: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: "16px",
  },
  medium: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "20px",
  },
  large: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "24px",
  },
});

/**
 * @description
 * typography - label
 */
export const LABEL = create({
  small: {
    fontSize: 11,
    fontWeight: 500,
    lineHeight: "16px",
  },
  large: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: "20px",
  },
});