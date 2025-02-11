import { createContext } from "react";
import type { ContextValue } from "../../types/steps";

/**
 * @description
 * class names
 */
export const CLASS_NAMES = {
  steps: "steps",
  item: "steps__item",
  done: "steps__item--done",
  doing: "steps__item--doing",
  todo: "steps__item--todo",
  leading: "steps__item-leading",
  sign: "steps__item-leading-sign",
  title: "steps__item-title",
  description: "steps__item-description",
};

export const Context = createContext<ContextValue & { classNames: typeof CLASS_NAMES }>({
  type: "horizontal",
  max: 0,
  value: 0,
  classNames: CLASS_NAMES,
});
