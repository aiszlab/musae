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
   * message content
   */
  children?: ReactNode;
};
