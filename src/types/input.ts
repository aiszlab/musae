import type { CSSProperties, InputHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import type { ComponentProps } from "./element";
import type { VirtualElement } from "@floating-ui/dom";

/**
 * @description
 * Variant
 */
export type Variant = "outlined" | "filled" | "standard";

/**
 * @description
 * component props
 */
export interface InputProps
  extends
    Pick<
      InputHTMLAttributes<HTMLInputElement>,
      | "onFocus"
      | "onBlur"
      | "name"
      | "value"
      | "disabled"
      | "readOnly"
      | "onClick"
      | "maxLength"
      | "onKeyDown"
    >,
    ComponentProps {
  /**
   * @zh 点击输入框外壳时的处理函数
   * @en Handler invoked when the input shell is clicked
   */
  onInputorClick?: MouseEventHandler<HTMLDivElement>;

  /**
   * @description
   * value
   * @default void 0
   */
  value?: string;

  /**
   * @description
   * placeholder for input
   * @default void 0
   */
  placeholder?: string;

  /**
   * @description
   * variant for input, display different style
   * @default "outlined"
   */
  variant?: Variant;

  /**
   * @description
   * leading node
   * @default void 0
   */
  leading?: ReactNode;

  /**
   * @description
   * trailing node
   * @default void 0
   */
  trailing?: ReactNode;

  /**
   * @description
   * input type
   * @default "text"
   */
  type?: "text" | "password" | "number";

  /**
   * @description
   * invalid
   * @default false
   */
  invalid?: boolean;

  /**
   * @description
   * change handler
   * @default void 0
   */
  onChange?: (value: string) => void;
}

/**
 * @zh 输入组件引用
 * @en Input component ref
 */
export interface InputRef
  extends Pick<HTMLInputElement, "blur" | "focus" | "select">, VirtualElement {
  /**
   * @zh 获取组件内部值
   * @en Get the current internal value
   */
  getValue: () => string;
}

/**
 * @description
 * context value
 */
export interface ContextValue {
  /**
   * @description
   * selection
   */
  selection?: ReactNode;
}
