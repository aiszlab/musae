import type { ReactNode } from "react";

type Size = "small" | "medium" | "large";

type Shape = "circular" | "squared";

/**
 * @description
 * avatar props
 */
export type AvatarProps = {
  /**
   * @description
   * src
   * @default void 0
   */
  src?: string;

  /**
   * @description
   * alt
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
  (props: AvatarProps): JSX.Element;

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
  shape: Shape;

  /**
   * @description
   * size
   */
  size: Size;
};
