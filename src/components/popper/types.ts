import type { Nullable } from "@aiszlab/relax/types";
import type { DOMAttributes, ReactNode } from "react";
import type { ComponentProps } from "../../types/element";
import type { Derivable, OffsetOptions, Placement } from "@floating-ui/dom";
import type { PortalProps } from "../portal/types";

/**
 * @author murukal
 *
 * @description
 * popper props
 */
export interface PopperProps
  extends Pick<DOMAttributes<HTMLDivElement>, "onMouseDown" | "onPointerEnter" | "onPointerLeave">,
    ComponentProps,
    Pick<PortalProps, "destroyable"> {
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
  trigger?: Nullable<Element> | (() => Nullable<Element>);

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
   * animatable
   *
   * @default true
   *
   * default case, popper will auto animate after open change
   * but sometimes, you want to control popper open/close animation
   * set `animatable` to false, and use popper.ref to show animations
   */
  animatable?: boolean;
}

export type DropdownProps = Omit<PopperProps, "portal" | "placement"> & {
  /**
   * {@link} `PopperProps`.`placement`
   */
  placement: Placement;
};

/**
 * @description
 * Popper Ref
 */
export type PopperRef = HTMLDivElement & {
  /**
   * @description
   * close popper
   */
  close: () => Promise<void>;

  /**
   * @description
   * open popper
   */
  open: () => Promise<void>;
};
