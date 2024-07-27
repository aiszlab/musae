import type { ReactNode } from "react";

/**
 * @description
 * notification placement
 */
export type Placement = "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right";

export type Direction = "top" | "left" | "bottom" | "right";

export type Type = "success" | "error" | "info" | "warning" | "loading";

/**
 * @description
 * Notification props
 */
export type NotificationProps = {
  /**
   * @description
   * placement
   */
  placement: Placement;

  /**
   * @description
   * message type
   */
  type: Type;

  /**
   * @description
   * message show times
   */
  duration?: number;

  /**
   * @description
   * close handler
   */
  onClose?: () => void;

  /**
   * @description
   * notification description
   */
  description: ReactNode;

  /**
   * @description
   * notification title
   */
  title?: ReactNode;

  /**
   * @description
   * closable
   */
  closable?: boolean;
};

/**
 * @description
 * notification config
 */
export type NotificationConfig = Omit<NotificationProps, "onClose" | "children" | "placement"> & {
  /**
   * @description
   * message key
   */
  key?: string;

  /**
   * @description
   * placement
   */
  placement?: Placement;
};

export type NotificationWithoutKeyAndPlacement = Omit<NotificationConfig, "key" | "placement">;

export type OpenHandler = (config: Omit<NotificationConfig, "type">) => Promise<void>;

/**
 * @author murukal
 *
 * @description
 * messager
 */
export type Notifier = Record<Type, OpenHandler>;

/**
 * @author murukal
 *
 * @description
 * holder ref
 */
export interface HolderRef {
  /**
   * @description
   * add handler
   */
  add: (configuration: NotificationConfig) => void;
}

/**
 * @description
 * use notification props
 */
export type UseNotificationProps = {
  placement?: Placement;
};

/**
 * @description
 * holder props
 */
export type HolderProps = {
  /**
   * @description
   * default notifications
   */
  defaultNotifications?: NotificationConfig[];
};

/**
 * @author murukal
 * @description
 * typed notification
 */
export type TypedNotification = {
  /**
   * @description
   * component self
   */
  (props: NotificationProps): JSX.Element;

  /**
   * @description
   * open
   */
  open: (config: NotificationConfig) => Promise<void>;
} & Omit<Notifier, "loading">;
