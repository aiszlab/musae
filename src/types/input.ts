import type { InputHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import type { ComponentProps } from "./element";
import type { VirtualElement } from "@floating-ui/dom";

/**
 * @zh 输入框变体
 * @en Input variant
 */
export type Variant = "outlined" | "filled";

/**
 * @zh 输入框组件属性
 * @en Input component props
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
      | "role"
      | "aria-expanded"
      | "aria-controls"
      | "aria-activedescendant"
      | "aria-autocomplete"
    >,
    ComponentProps {
  /**
   * @zh 点击输入框外壳时的处理函数
   * @en Handler invoked when the input shell is clicked
   */
  onInputorClick?: MouseEventHandler<HTMLDivElement>;

  /**
   * @zh 输入框值
   * @en Input value
   * @default void 0
   */
  value?: string;

  /**
   * @zh 输入框占位符
   * @en Input placeholder
   * @default void 0
   */
  placeholder?: string;

  /**
   * @zh 输入框变体，展示不同样式
   * @en Input variant for displaying different styles
   * @default "outlined"
   */
  variant?: Variant;

  /**
   * @default false
   */
  shaped?: boolean;

  /**
   * @zh 前置节点
   * @en Leading node
   * @default void 0
   */
  leading?: ReactNode;

  /**
   * @zh 后置节点
   * @en Trailing node
   * @default void 0
   */
  trailing?: ReactNode;

  /**
   * @zh 输入框类型
   * @en Input type
   * @default "text"
   */
  type?: "text" | "password" | "number";

  /**
   * @zh 是否无效
   * @en Whether the input is invalid
   * @default false
   */
  invalid?: boolean;

  /**
   * @zh 值变更处理函数
   * @en Value change handler
   * @default void 0
   */
  onChange?: (value: string) => void;

  /**
   * @zh 输入框标签
   * @en Input label
   */
  label?: string;
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
