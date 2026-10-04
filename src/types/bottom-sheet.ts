import type { CSSProperties, ReactNode } from "react";
import type { ComponentProps } from "./element";
import type { Closable } from "../hooks/use-closable";

export interface BottomSheetProps extends ComponentProps {
  /**
   * @zh 控制 Bottom Sheet 的打开状态。
   * @en Controls whether the Bottom Sheet is open.
   * @default false
   */
  open?: boolean;

  /**
   * @zh Bottom Sheet 请求关闭时调用，例如点击遮罩层或按下 Esc 键。
   * @en Called when the Bottom Sheet requests to close, such as after an overlay click or Esc key press.
   * @default void 0
   */
  onClose?: VoidFunction;

  /**
   * @zh 渲染在拖拽手柄下方的内容。
   * @en Content rendered below the drag handle.
   * @default void 0
   */
  children?: ReactNode;

  /**
   * @zh 应用到 Bottom Sheet 面板元素上的额外类名。
   * @en Additional class name applied to the Bottom Sheet panel element.
   * @default void 0
   */
  panelClassName?: string;

  /**
   * @zh 应用到 Bottom Sheet 面板元素上的额外内联样式。
   * @en Additional inline styles applied to the Bottom Sheet panel element.
   * @default void 0
   */
  panelStyle?: CSSProperties;

  /**
   * @zh 面板高度，接受数字（px）或任意 CSS 高度值。
   * @en Height of the sheet panel. Accepts a number (px) or any CSS height value.
   * @default "50vh"
   */
  height?: number | string;

  /**
   * @zh 是否可以通过点击遮罩层或按 Esc 键关闭。传入 `Closable` 数组以启用特定关闭方式。
   * @en Whether the sheet can be closed by clicking the overlay or pressing Esc.
   * Pass an array of `Closable` values to enable specific close triggers.
   * @default true (all triggers enabled)
   */
  closable?: boolean | Closable[];

  /**
   * @zh 是否启用模态锁定（锁定 body 滚动）。传入 `false` 可禁用滚动锁定。
   * @en Whether to enable modal locking (lock body scroll). Pass `false` to disable scroll locking.
   * @default true
   */
  modal?: boolean;
}
