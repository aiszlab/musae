import type { NotificationConfig, Type } from "../components/notification";

export type MessageConfig = Omit<NotificationConfig, "title" | "placement" | "closable">;

export type OpenHandler = (config: Omit<MessageConfig, "type">) => Promise<void>;

/**
 * @author murukal
 *
 * @description
 * messager
 */
export type Messager = Record<Type, OpenHandler>;

/**
 * @description
 * typed message
 */
export type TypedMessage = {
  /**
   * @description
   * open
   */
  open: (config: MessageConfig) => Promise<void>;
} & Messager;
