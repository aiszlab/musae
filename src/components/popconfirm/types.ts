import type { DOMAttributes, RefAttributes } from "react";
import type { PopoverProps } from "../popover";
import { ComponentProps } from "../../types/element";

export type ChildProps<T> = Pick<DOMAttributes<T>, "onClick"> & RefAttributes<T>;

/**
 * @description
 * popconfirm props
 */
export type PopconfirmProps<P extends ChildProps<T>, T extends HTMLElement> = Pick<
  PopoverProps<P, T>,
  "children" | "placement" | "title" | "description"
> &
  ComponentProps;
