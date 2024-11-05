import type { TextareaHTMLAttributes } from "react";
import type { ComponentProps } from "./element";

/**
 * @description
 * textarea props
 */
export type TextareaProps = ComponentProps &
  Pick<TextareaHTMLAttributes<HTMLTextAreaElement>, "onBlur" | "placeholder"> & {
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

    /**
     * @description
     * resize
     * when `true`, show `resize`
     * @default true
     */
    resize?: boolean;
  };
