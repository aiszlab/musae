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
   */
  src?: string;

  /**
   * @description
   * alt
   */
  alt?: string;

  /**
   * @description
   * size
   */
  size?: Size;

  /**
   * @description
   * shape
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
   */
  children: ReactNode;

  /**
   * @description
   * max
   */
  max?: number;

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
