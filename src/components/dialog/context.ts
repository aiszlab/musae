import { createContext } from "react";
import type { DialogContextValue } from "../../types/dialog";

/**
 * @description
 * class name
 */
export const CLASS_NAMES = {
  dialog: "dialog",
  overlay: "dialog__overlay",
  panel: "dialog__panel",
  header: "dialog__header",
  body: "dialog__body",
  footer: "dialog__footer",
} as const;

/**
 * `Dialog`.`Context`
 */
export const DialogContext = createContext<DialogContextValue>({});
