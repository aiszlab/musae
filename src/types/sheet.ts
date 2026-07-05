import type { CSSProperties, ReactNode } from "react";
import type { ComponentProps } from "./element";
import type { Closable } from "../hooks/use-closable";

/**
 * @zh 面板弹出方向。
 * @en Panel placement direction.
 */
export type Placement = "right" | "left" | "top" | "bottom";

/**
 * @zh 共享 Sheet 基础组件的属性。
 * @en Props for the shared Sheet base component.
 */
export interface SheetProps extends ComponentProps {
  /**
   * @zh 控制 sheet 的可见状态。
   * @en Controls the visibility state of the sheet.
   */
  visible: boolean;

  /**
   * @zh 当 sheet 请求关闭时的回调（点击遮罩层或按下 Esc 键）。
   * @en Called when the sheet requests to close (overlay click, Esc key).
   */
  onClose?: VoidFunction;

  /**
   * @zh 面板出现的方向。
   * @en The direction from which the panel appears.
   * @default "right"
   */
  placement: Placement;

  /**
   * @zh 面板尺寸。水平方向为宽度，垂直方向为高度。接受数字（px）或任意 CSS 尺寸字符串。
   * @en Panel size. For horizontal placements (left/right), this is width.
   * For vertical placements (top/bottom), this is height.
   * Accepts number (px) or any CSS dimension string.
   * @default 400
   */
  size?: number | string;

  /**
   * @zh 是否可以通过点击遮罩层或按 Esc 键关闭。传入 `Closable` 数组以启用特定的关闭触发器。
   * @en Whether the sheet can be closed by clicking on the overlay or pressing the Esc key.
   * Pass an array of `Closable` values to enable specific close triggers.
   * @default true
   */
  closable?: boolean | Closable[];

  /**
   * @zh 渲染在面板头部区域的内容。使用此插槽注入标题栏、拖拽手柄或任意自定义头部。
   * @en Content rendered in the header area of the panel.
   * Use this slot to inject a title bar, drag handle, or any custom header.
   */
  header?: ReactNode;

  /**
   * @zh 应用到面板元素上的额外类名。供调用方应用自定义 StyleX 样式（如背景色、圆角）。
   * @en Additional class name applied to the panel element.
   * Used by callers to apply custom StyleX styles (e.g., background color, border radius).
   */
  panelClassName?: string;

  /**
   * @zh 应用到面板元素上的额外内联样式。供调用方覆盖面板样式（如背景色）。
   * @en Additional inline styles applied to the panel element.
   * Used by callers to override panel styles (e.g., background color).
   */
  panelStyle?: CSSProperties;

  /**
   * @zh 是否启用模态锁定（锁定 body 滚动）。传入 `false` 可禁用滚动锁定。
   * @en Whether to enable modal locking (lock body scroll).
   * Pass `false` to disable scroll locking.
   * @default true
   */
  modal?: boolean;

  /**
   * @zh 渲染在头部下方的主体内容。
   * @en Body content rendered below the header.
   */
  children?: ReactNode;
}
