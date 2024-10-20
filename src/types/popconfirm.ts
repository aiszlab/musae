import type { DOMAttributes, ReactNode, RefAttributes } from "react";
import type { PopoverProps } from "../components/popover";
import type { ComponentProps } from "musae/types/element";

export type ChildProps<T> = Pick<DOMAttributes<T>, "onClick"> & RefAttributes<T>;

/**
 * @description
 * popconfirm props
 */
export type PopconfirmProps = Pick<
  PopoverProps<ChildProps<HTMLDivElement>, HTMLDivElement>,
  "placement" | "title" | "content" | "offset"
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

    /**
     * @description
     * children
     */
    children?: ReactNode;
  };
