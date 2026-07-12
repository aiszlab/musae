import type { ReactNode } from "react";
import type { ComponentProps } from "./element";

/**
 * @zh 操作项，用于 ActionSheet 的操作列表。
 * @en An action item for the ActionSheet's action list.
 */
export interface ActionItem {
  /**
   * @zh 操作项唯一标识
   * @en Unique identifier for the action item
   */
  key: string;

  /**
   * @zh 操作项显示文本
   * @en Display text for the action item
   */
  text: ReactNode;

  /**
   * @zh 操作项描述文本（可选副标题），显示在 text 下方
   * @en Optional description text displayed below the main text
   */
  description?: ReactNode;

  /**
   * @zh 点击操作项时的回调
   * @en Callback when the action item is clicked
   */
  onClick?: () => void;
}

/**
 * @zh ActionSheet 组件的属性。
 * @en Props for the ActionSheet component.
 */
export interface ActionSheetProps extends ComponentProps {
  /**
   * @zh 控制 ActionSheet 的可见状态
   * @en Controls the visibility state of the ActionSheet
   */
  open: boolean;

  /**
   * @zh 当 ActionSheet 请求关闭时的回调
   * @en Called when the ActionSheet requests to close
   */
  onClose: VoidFunction;

  /**
   * @zh 操作项列表
   * @en List of action items
   */
  actions: ActionItem[];

  /**
   * @zh 顶部标题（可选）
   * @en Optional title displayed at the top
   */
  title?: ReactNode;

  /**
   * @zh 标题下方的描述文本（可选）
   * @en Optional description text displayed below the title
   */
  description?: ReactNode;

  /**
   * @zh 取消按钮文本。默认使用 locale 中的 cancel 文案
   * @en Cancel button text. Uses locale cancel text by default
   */
  cancelText?: ReactNode;

  /**
   * @zh 面板高度。接受数字（px）或任意 CSS 高度值
   * @en Height of the panel. Accepts number (px) or any CSS height value
   */
  height?: number | string;
}

/**
 * @zh 指令式 API `ActionSheet.show()` 的配置参数。
 * @en Configuration for the imperative API `ActionSheet.show()`.
 */
export type ActionSheetShowConfig = Omit<ActionSheetProps, "open" | "onClose">;

/**
 * @zh `useActionSheet` hook 返回的 show 函数类型。
 * @en The type of the show function returned by `useActionSheet` hook.
 */
export type ActionSheetTrigger = {
  /**
   * @zh 显示 ActionSheet，返回 Promise 在面板关闭后 resolve。
   * @en Show the ActionSheet, returns a Promise that resolves after the panel closes.
   */
  show: (config: ActionSheetShowConfig) => Promise<void>;
};
