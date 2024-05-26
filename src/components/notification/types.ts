import { RequiredIn } from "@aiszlab/relax/types";
import { ReactNode } from "react";

/**
 * @description
 * notification placement
 */
export type Placement = "top" | "topLeft" | "topRight" | "bottom" | "bottomLeft" | "bottomRight";

export type Direction = "top" | "left" | "bottom" | "right";

type Type = "success" | "error" | "info" | "warning" | "loading";

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

type Open = (config: Omit<NotificationConfig, "type">) => Promise<void>;

/**
 * @author murukal
 *
 * @description
 * messager
 */
export interface Notifier {
  /**
   * @description
   * show success notification
   */
  success: Open;

  /**
   * @description
   * show error notification
   */
  error: Open;

  /**
   * @description
   * show info notification
   */
  info: Open;

  /**
   * @description
   * show warning notification
   */
  warning: Open;

  /**
   * @description
   * show loading notification
   */
  loading: Open;
}

/**
 * @author murukal
 *
 * @description
 * notifier ref
 */
export interface NotifierRef {
  /**
   * @description
   * add handler
   */
  add: (configuration: RequiredIn<NotificationConfig, "key">) => void;
}
