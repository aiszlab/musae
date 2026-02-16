import type { Nullable } from "@aiszlab/relax/types";
import type { CSSProperties, DOMAttributes, ReactNode } from "react";
import type { ComponentProps } from "./element";
import type { Derivable, OffsetOptions, Placement } from "@floating-ui/dom";
import type { PortalProps } from "./portal";

/**
 * @author murukal
 *
 * @description
 * popper props
 */
export interface PopperProps
  extends Pick<DOMAttributes<HTMLDivElement>, "onMouseDown" | "onPointerEnter" | "onPointerLeave">,
    ComponentProps,
    Pick<PortalProps, "destroyable" | "container"> {
  /**
   * @description
   * children
   */
  children?: ReactNode;

  /**
   * @description
   * if popper is open
   */
  open: boolean;

  /**
   * @description
   * trigger
   */
  trigger?: Nullable<HTMLElement> | (() => Nullable<HTMLElement>);

  /**
   * @description
   * placement
   */
  placement?: Placement;

  /**
   * @description
   * offset
   */
  offset?: Exclude<OffsetOptions, Derivable<unknown>>;

  /**
   * @description
   * when trigger on popper entering, this function will be called
   */
  onEnter?: () => Promise<void> | void;

  /**
   * @description
   * when trigger on popper entered, this function will be called
   */
  onEntered?: () => Promise<void> | void;

  /**
   * @description
   * when trigger on popper exiting, this function will be called
   */
  onExit?: () => Promise<void> | void;

  /**
   * @description
   * when trigger on popper exited, this function will be called
   */
  onExited?: () => Promise<void> | void;

  /**
   * @description
   * render in overlay container
   */
  overlay?: boolean;

  /**
   * @description
   * arrow
   */
  arrow?: boolean;

  /**
   * @description
   * disappearable
   *
   * @default true
   *
   * default case, popper will auto disappear after private `open` state change to `false`
   * but sometimes, you want to control popper disappear animation
   * set `disappearable` to false, and use popper.ref to disappear
   */
  disappearable?: boolean;

  /**
   * @description elevation
   *
   * @default true
   */
  elevation?: boolean;

  /**
   * 定制样式名 - `portal`
   * @default undefined
   */
  portalClassName?: string;

  /**
   * 定制样式 - `portal`
   * @default undefined
   */
  portalStyle?: CSSProperties;
}

export type DropdownProps = Omit<PopperProps, "portal" | "placement" | "container"> & {
  /**
   * {@link} `PopperProps`.`placement`
   */
  placement: Placement;
};

/**
 * @description
 * Popper Ref
 */
export type PopperRef = {
  /**
   * @description
   * disappear popper
   */
  disappear: () => Promise<void>;

  /**
   * @description
   * contain
   *
   * used for `clickaway`, check clicked node is contained in popper
   */
  contains: (node: Nullable<Node>) => boolean;
};
