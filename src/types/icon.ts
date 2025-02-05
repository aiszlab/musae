import type {
  CSSProperties,
  FC,
  HTMLAttributes,
  MouseEventHandler,
  ReactNode,
  ReactPortal,
} from "react";
import type { ComponentProps } from "./element";

export type AsProps = Required<Pick<IconProps, "size">>;

type Size = "small" | "medium" | "large";

/**
 * @description
 * icon props
 */
export interface IconProps
  extends ComponentProps,
    Pick<HTMLAttributes<HTMLSpanElement>, "onMouseDown" | "onMouseUp"> {
  /**
   * @description
   * as render
   */
  as?: Exclude<ReactNode, ReactPortal> | FC<AsProps>;

  /**
   * @description
   * size
   */
  size?: number | Size;

  /**
   * @description
   * color
   */
  color?: CSSProperties["fill"];

  /**
   * @description
   * click handler
   */
  onClick?: MouseEventHandler<HTMLSpanElement>;

  /**
   * @description
   * role
   */
  role?: HTMLAttributes<HTMLSpanElement>["role"];
}
