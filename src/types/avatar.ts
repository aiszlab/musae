import type { ReactNode, RefAttributes } from "react";
import type { ComponentProps } from "musae/types/element";
import type { ImageProps } from "./image";

type Size = "small" | "medium" | "large";

type Shape = "circular" | "squared";

/**
 * @description
 * avatar props
 */
export type AvatarProps = ComponentProps &
  Pick<ImageProps, "crossOrigin" | "referrerPolicy"> & {
    /**
     * @description
     * src
     * @default void 0
     */
    src?: string;

    /**
     * @description
     * alt, (fallback usage)
     * if user do not provide `src`, or `src` is invalid
     * show `alt`
     * @default void 0
     */
    alt?: string;

    /**
     * @description
     * size
     * @default "medium"
     */
    size?: Size;

    /**
     * @description
     * shape
     * @default "circular"
     */
    shape?: Shape;
  };

/**
 * @description
 * avatar group props
 */
export type AvatarGroupProps = {
  /**
   * @description
   * children
   * @requires
   */
  children: ReactNode;

  /**
   * @description
   * max
   * @default 3
   */
  max?: number;

  /**
   * @description
   * size
   * @default "circular"
   */
  size?: Size;

  /**
   * @description
   * shape
   * @default "circular"
   */
  shape?: Shape;
};

/**
 * @description
 * typed avatar
 */
export type TypedAvatar = {
  /**
   * @description
   * component self
   */
  (props: AvatarProps & RefAttributes<HTMLSpanElement>): ReactNode;

  /**
   * @description
   * group
   */
  Group: (props: AvatarGroupProps) => JSX.Element;
};

/**
 * @description
 * Context Value
 */
export type ContextValue = {
  /**
   * @description
   * shape
   */
  shape?: Shape;

  /**
   * @description
   * size
   */
  size?: Size;
};
