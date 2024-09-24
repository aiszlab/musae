import { ComponentProps } from "musae/types/element";
import { ButtonProps } from "../../types/button";

/**
 * @description
 * countable props
 */
export type CountableProps = Pick<
  ButtonProps,
  "children" | "disabled" | "variant" | "color" | "size" | "shape" | "ripple"
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
