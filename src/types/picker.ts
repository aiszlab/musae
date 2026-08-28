import type {
  CSSProperties,
  FocusEventHandler,
  MouseEventHandler,
  ReactNode,
  SyntheticEvent,
} from "react";
import type { ComponentProps } from "./element";
import type { Nullable } from "@aiszlab/relax/types";
import type { InputProps } from "./input";

/**
 * @zh Picker 触发器动作
 * @en Picker trigger action
 */
export type PickerTriggerAction = (event?: Pick<SyntheticEvent, "stopPropagation">) => void;

/**
 * @zh Picker 触发器渲染参数
 * @en Picker trigger render parameters
 */
export interface PickerTriggerRenderProps {
  /**
   * @zh 应传递给 Input 的属性
   * @en Props to pass to Input
   */
  inputProps: Required<Pick<InputProps, "disabled" | "invalid" | "onBlur" | "onClick">>;

  /**
   * @zh 打开弹层
   * @en Open the popup
   */
  open: PickerTriggerAction;

  /**
   * @zh 关闭弹层
   * @en Close the popup
   */
  close: PickerTriggerAction;

  /**
   * @zh 切换弹层状态
   * @en Toggle the popup state
   */
  toggle: PickerTriggerAction;
}

/**
 * @description
 * picker props
 */
export interface PickerProps extends ComponentProps {
  /**
   * @description
   * children
   */
  children: (props: PickerTriggerRenderProps) => ReactNode;

  /**
   * @zh 触发元素失去焦点时的处理函数
   * @en Handler invoked when the trigger element loses focus
   */
  onBlur?: FocusEventHandler<HTMLElement>;

  /**
   * @description
   * popup width
   */
  popupWidth?: "match" | number | false;

  /**
   * @description
   * when trigger on popper entering
   */
  onPopperEnter?: () => Promise<void> | void;

  /**
   * @description
   * when trigger on popper entered
   */
  onPopperEntered?: () => Promise<void> | void;

  /**
   * @description
   * when trigger on popper exited
   */
  onPopperExite?: () => Promise<void> | void;

  /**
   * @description
   * when trigger on popper exited
   */
  onPopperExited?: () => Promise<void> | void;

  /**
   * @description
   * click handler
   */
  onClick?: MouseEventHandler<HTMLElement>;

  /**
   * @description
   * pickable
   */
  pickable: ReactNode;

  /**
   * @description
   * pickable class name
   */
  pickableClassName?: string;

  /**
   * @description
   * pickable style
   */
  pickableStyle?: CSSProperties;

  /**
   * @description
   * invalid
   * @default false
   */
  invalid?: boolean;

  /**
   * @description
   * disabled state of the picker
   * @default false
   */
  disabled?: boolean;
}

/**
 * @description
 * picker ref
 */
export interface PickerRef {
  /**
   * @description
   * close
   */
  close: () => void;
}

/**
 * @description
 * picker context value
 * provide picker state for custom render
 *
 * like in searchable select, if picker is focused, should show search input
 */
export interface ContextValue {
  /**
   * @description
   * why put `open` into context
   *
   * answer:
   * in select case,
   * if select is searchable, when typing search key,
   * should show dropdown
   */
  open: Nullable<() => void>;

  /**
   * @zh 切换弹层的打开状态
   * @en Toggle the popup open state
   */
  toggle: Nullable<() => void>;

  /**
   * @description
   * why put `isOpen` into context
   *
   * answer:
   * in `Select` component, when `isOpen` is false, should keep the last state options
   */
  isOpen: boolean;
}
