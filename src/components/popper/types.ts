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
   * default case, popper will auto disappear after open change
   * but sometimes, you want to control popper disappear animation
   * set `disappearable` to false, and use popper.ref to disappear
   */
  disappearable?: boolean;
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
