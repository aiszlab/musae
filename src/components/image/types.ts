import { MouseEventHandler, ReactNode } from "react";
import { ComponentProps } from "../../types/element";

/**
 * @description
 * image props
 */
export type ImageProps = ComponentProps & {
  /**
   * @description
   * image source
   */
  src: string;
};

/**
 * @description
 * operation event
 */
export type OperationEvent = {
  /**
   * @description
   * render child
   */
  child: ReactNode;

  /**
   * @description
   * click handler
   */
  onClick: () => void;

  /**
   * @description
   * type
   */
  type: string;
};

/**
 * @description
 * operations props
 */
export type OperationsProps = {
  /**
   * @description
   * to prev image
   */
  onSwitchLeft: MouseEventHandler<HTMLDivElement>;

  /**
   * @description
   * to next image
   */
  onSwitchRight: MouseEventHandler<HTMLDivElement>;

  /**
   * @description
   * zoom in
   */
  onZoomIn: OperationEvent["onClick"];

  /**
   * @description
   * zoom out
   */
  onZoomOut: OperationEvent["onClick"];

  /**
   * @description
   * rotate right
   */
  onRotateRight: OperationEvent["onClick"];

  /**
   * @description
   * rotate left
   */
  onRotateLeft: OperationEvent["onClick"];

  /**
   * @description
   * flip x
   */
  onFlipX: OperationEvent["onClick"];

  /**
   * @description
   * flip y
   */
  onFlipY: OperationEvent["onClick"];

  /**
   * @description
   * close handler
   */
  onClose: OperationEvent["onClick"];
};
