import { createContext } from "react";
import type { ContextValue } from "../../types/transfer";

/**
 * @description
 * class names
 */
export const CLASS_NAMES = {
  transfer: "transfer",
  operation: "transfer__operation",
  list: "transfer__list",
  title: "transfer__list-title",
  item: "transfer__list-item",
  header: "transfer__list-header",
  body: "transfer__list-body",
};

/**
 * @description
 * transfer context
 */
export const Context = createContext<ContextValue & { classNames: typeof CLASS_NAMES }>({
  disabled: false,
  classNames: CLASS_NAMES,
});
