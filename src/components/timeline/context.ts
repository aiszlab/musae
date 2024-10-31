import { createContext } from "react";
import type { ContextValue } from "musae/types/timeline";

/**
 * @description
 * class names
 */
export const CLASS_NAMES = {
  timeline: "timeline",
  item: "timeline__item",
  leading: "timeline__item-leading",
  sign: "timeline__item-leading-sign",
  dot: "timeline__item-leading-dot",
  label: "timeline__item-label",
  description: "timeline__item-description",
} as const;

export const Context = createContext<ContextValue & { classNames: typeof CLASS_NAMES }>({
  mode: "right",
  max: 0,
  classNames: CLASS_NAMES,
});
