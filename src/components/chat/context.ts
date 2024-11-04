import { createContext } from "react";

/**
 * @description
 * class names
 */
export const CLASS_NAMES = {
  chat: "chat",
  footer: "chat__footer",
  item: "chat__item",
  send: "chat__item-send-message",
  receive: "chat__item-receive-message",
};

export const Context = createContext({
  classNames: CLASS_NAMES,
});
