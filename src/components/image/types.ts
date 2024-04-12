import type { FC, ImgHTMLAttributes, ReactNode } from "react";
import type { ComponentProps } from "../../types/element";
import type { Partialable } from "@aiszlab/relax/types";

/**
 * @description
 * image props
 */
export type ImageProps = ComponentProps &
  Pick<ImgHTMLAttributes<HTMLImageElement>, "alt" | "width" | "height"> & {
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
  onClick: Partialable<() => void>;

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

/**
 * @description
 * image preview props
 */
export type PreviewProps = Pick<ImgHTMLAttributes<HTMLImageElement>, "alt"> & {
  /**
   * @description
   * image source
   */
  src: string;

  /**
   * @description
   * close handler
   */
  onClose: () => void;
};

/**
 * @description
 * image preview group context value
 */
export type PreviewGroupContextValue = {
  /**
   * @description
   * total
   */
  total: number;

  /**
   * @description
   * image click handler
   */
  onClick: (src: string) => void;

  /**
   * @description
   * prev image
   */
  onSwitchLeft: () => void;

  /**
   * @description
   * next image
   */
  onSwitchRight: () => void;
};

/**
 * @description
 * preview group props
 */
export type PreviewGroupProps = {
  /**
   * @description
   * children
   */
  children: ReactNode;

  /**
   * @description
   * items
   */
  items: string[];
};

/**
 * @author murukal
 * @description
 * typed image
 */
export interface TypedImage extends FC<ImageProps> {
  /**
   * @description
   * item component
   */
  Group: FC<PreviewGroupProps>;
}
