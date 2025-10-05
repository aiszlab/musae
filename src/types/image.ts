import type { FC, ImgHTMLAttributes, MouseEvent, ReactNode } from "react";
import type { ComponentProps } from "./element";
import type { Partialable } from "@aiszlab/relax/types";

/**
 * @description
 * image props
 */
export type ImageProps = ComponentProps &
  Pick<
    ImgHTMLAttributes<HTMLImageElement>,
    "alt" | "width" | "height" | "crossOrigin" | "referrerPolicy"
  > & {
    /**
     * @description
     * image source
     * @requires
     */
    src?: string;

    /**
     * @description
     * if `true`, current image will mount preview dialog
     * @default true
     */
    previewable?: boolean;

    /**
     * fallback
     * @description 兜底元素，当没有提供图片资源或者图片资源加载失败时，用于体验优化
     */
    fallback?: ReactNode;
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
  onSwitchLeft: Partialable<(event: MouseEvent<HTMLButtonElement>) => void>;

  /**
   * @description
   * next image
   */
  onSwitchRight: Partialable<(event: MouseEvent<HTMLButtonElement>) => void>;
};

/**
 * @description
 * preview group props
 */
export type PreviewGroupProps = {
  /**
   * @description
   * children
   * @requires
   */
  children: ReactNode;

  /**
   * @description
   * items
   * @requires
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

/**
 * @description
 * preview ref
 */
export interface PreviewRef {
  /**
   * @description
   * reset preview image style
   */
  reset: () => void;
}

/**
 * image ref
 * @description 组件实例，在`musae`中注入定制化能力
 */
export interface ImageRef extends Partial<HTMLImageElement> {
  /**
   * preview
   * @description 预览图片
   */
  preview?: () => void;
}
