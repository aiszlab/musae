type Size = "small" | "medium" | "large";
type Shape = "circle" | "square";

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
