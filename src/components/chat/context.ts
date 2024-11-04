import { createContext } from "react";
import type { ContextValue } from "../../types/chat";

/**
 * @description
 * class names
 */
export const CLASS_NAMES = {
  chat: "chat",
  messages: "chat__messages",
  footer: "chat__footer",
  item: "chat__item",
  send: "chat__item-send-message",
  receive: "chat__item-receive-message",
} as const;

export const Context = createContext<ContextValue & { classNames: typeof CLASS_NAMES }>({
  classNames: CLASS_NAMES,
});
