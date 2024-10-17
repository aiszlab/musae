import type { DOMAttributes } from "react";
import type { ComponentProps } from "./element";

/**
 * @description
 * textarea props
 */
export type TextareaProps = ComponentProps &
  Pick<DOMAttributes<HTMLTextAreaElement>, "onBlur"> & {
    /**
     * @description
     * value
     */
    value?: string;

    /**
     * @description
     * invalid
     * @default false
     */
    invalid?: boolean;

    /**
     * @description
     * value change handler
     */
    onChange?: (value: string) => void;
  };
