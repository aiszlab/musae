import type { ReactNode } from "react";

export type KbdKey =
  | "command"
  | "shift"
  | "ctrl"
  | "option"
  | "enter"
  | "delete"
  | "escape"
  | "tab"
  | "capslock"
  | "up"
  | "right"
  | "down"
  | "left"
  | "pageup"
  | "pagedown"
  | "home"
  | "end"
  | "help"
  | "space";

export interface KbdProps {
  /**
   * @description
   * The key or keys to be displayed.
   */
  keys?: KbdKey | KbdKey[];

  /**
   * @description
   * children
   */
  children: ReactNode;
}
