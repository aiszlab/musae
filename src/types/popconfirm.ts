import type { DOMAttributes, RefAttributes } from "react";
import type { PopoverProps } from "../components/popover";
import type { ComponentProps } from "musae/types/element";

export type ChildProps<T> = Pick<DOMAttributes<T>, "onClick"> & RefAttributes<T>;

/**
 * @description
 * popconfirm props
 */
export type PopconfirmProps<P extends ChildProps<T>, T extends HTMLElement> = Pick<
  PopoverProps<P, T>,
  "children" | "placement" | "title" | "content"
> &
  ComponentProps & {
    /**
     * @description
     * confirm handler
     */
    onConfirm?: () => void;

    /**
     * @description
     * cancel handler
     */
    onCancel?: () => void;
  };
