import type { ReactNode } from "react";
import type { Closable } from "../hooks/use-closable";
import type { ComponentProps } from "./element";

/**
 * @zh Side Sheet 类型。`standard` 内嵌在布局中展示（无遮罩层），`modal` 以带遮罩层的模态形式展示。
 * @en Side sheet type. `standard` renders inline alongside layout content (no scrim);
 * `modal` renders above content with a scrim.
 */
export type SideSheetType = "standard" | "modal";

/**
 * @zh Side Sheet 停靠方向。
 * @en The edge the side sheet is anchored to.
 */
export type SideSheetPlacement = "left" | "right";

/**
 * @zh SideSheet 组件属性。
 * @en Props for the SideSheet component.
 */
export interface SideSheetProps extends ComponentProps {
  /**
   * @zh 是否打开。
   * @en Whether the side sheet is open.
   */
  open: boolean;

  /**
   * @zh 类型。`standard` 与主内容并排展示，`modal` 覆盖在主内容之上并带有遮罩层。
   * @en Type. `standard` sits alongside the main content;
   * `modal` overlays the main content with a scrim.
   * @default "modal"
   */
  type?: SideSheetType;

  /**
   * @zh 头部标题。
   * @en Headline rendered in the header.
   * @default void 0
   */
  title?: ReactNode;

  /**
   * @zh 返回回调。传入后头部展示返回按钮。
   * @en Back handler. When provided, a back button is rendered in the header.
   * @default void 0
   */
  onBack?: VoidFunction;

  /**
   * @zh 是否可关闭。控制关闭按钮的展示，以及是否可以通过点击遮罩层或按 Esc 键关闭（仅 `modal` 生效）。
   * 传入 `Closable` 数组以启用特定的关闭触发器。
   * @en Whether the side sheet is closable. Controls the close button, and whether it can be
   * closed by clicking on the overlay or pressing the Esc key (`modal` only).
   * Pass an array of `Closable` values to enable specific close triggers.
   * @default true
   */
  closable?: boolean | Closable[];

  /**
   * @zh 关闭回调。
   * @en Called when the side sheet requests to close.
   * @default void 0
   */
  onClose?: VoidFunction;

  /**
   * @zh 底部操作区内容。传入后在主体下方渲染分割线和操作按钮行。
   * @en Footer actions. When provided, a divider and an actions row are rendered below the body.
   * @default void 0
   */
  actions?: ReactNode;

  /**
   * @zh 面板宽度。接受数字（px）或任意 CSS 尺寸字符串。
   * @en Panel width. Accepts a number (px) or any CSS dimension string.
   * @default 320
   */
  size?: number | string;

  /**
   * @zh 停靠方向。
   * @en The edge the side sheet is anchored to.
   * @default "right"
   */
  placement?: SideSheetPlacement;

  /**
   * @zh 主体内容。
   * @en Body content.
   * @default void 0
   */
  children?: ReactNode;
}
