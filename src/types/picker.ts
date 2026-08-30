import type { CSSProperties, ReactNode, RefObject } from "react";
import type { PopperTrigger } from "./popper";

/**
 * @zh Picker 触发器渲染参数
 * @en Picker trigger render parameters
 */
export interface PickerTriggerRenderProps<T extends PopperTrigger = PopperTrigger> {
  open: () => void;
  close: () => void;
  toggle: () => void;
  isOpen: boolean;
  triggerRef: RefObject<T | null>;
}

/**
 * @zh Picker 属性
 * @en Picker props
 */
export interface PickerProps<T extends PopperTrigger = PopperTrigger> {
  /**
   * @zh 触发器渲染函数
   * @en Trigger render function
   */
  children: (props: PickerTriggerRenderProps<T>) => ReactNode;

  /**
   * @zh 弹层宽度
   * @en Popup width
   */
  popupWidth?: "match" | number | false;

  /**
   * @zh 弹层开始进入时的处理函数
   * @en Handler invoked when the popup starts entering
   */
  onPopperEnter?: () => Promise<void> | void;

  /**
   * @zh 弹层进入完成时的处理函数
   * @en Handler invoked when the popup has entered
   */
  onPopperEntered?: () => Promise<void> | void;

  /**
   * @zh 弹层开始退出时的处理函数
   * @en Handler invoked when the popup starts exiting
   */
  onPopperExite?: () => Promise<void> | void;

  /**
   * @zh 弹层退出完成时的处理函数
   * @en Handler invoked when the popup has exited
   */
  onPopperExited?: () => Promise<void> | void;

  /**
   * @zh 可选内容或其渲染函数
   * @en Pickable content or its render function
   */
  pickable: ReactNode | ((props: PickerTriggerRenderProps<T>) => ReactNode);

  /**
   * @zh 可选内容的类名
   * @en Class name for the pickable content
   */
  pickableClassName?: string;

  /**
   * @zh 可选内容的样式
   * @en Style for the pickable content
   */
  pickableStyle?: CSSProperties;
}
