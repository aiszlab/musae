import { ComponentProps } from "musae/types/element";
import { ButtonProps } from "./button";

/**
 * @description
 * countdown props
 */
export type CountdownProps = Pick<
  ButtonProps,
  "children" | "disabled" | "variant" | "color" | "size" | "shape" | "ripple" | "onClick"
> &
  ComponentProps & {
    /**
     * @description
     * count total after every trigger
     * @default 60
     */
    count?: number;

    /**
     * @description
     * interval, unit(ms)
     * @default 1000
     */
    interval?: number;
  };
