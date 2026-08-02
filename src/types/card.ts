import type { ReactNode, MouseEvent, DragEvent } from "react";
import type { ComponentProps } from "./element";

/**
 * @zh 卡片样式变体
 * @en Card style variant
 */
export type CardVariant = "outlined" | "elevated" | "filled";

/**
 * @zh 卡片布局变体
 * - `stacked`: 垂直堆叠(Header 在上,Media 在中,Content/Actions 在下)
 * - `horizontal`: 水平排布(Header 在左,Media 在右,固定 80px 高)
 * @en Card layout variant
 * - `stacked`: vertical stack (Header on top, Media in middle, Content/Actions at bottom)
 * - `horizontal`: horizontal layout (Header on left, Media on right, fixed 80px height)
 */
export type CardLayout = "stacked" | "horizontal";

/**
 * @zh 卡片组件属性
 * @en Card component props
 */
export interface CardProps extends ComponentProps {
  /**
   * @zh 卡片样式变体
   * @en Card style variant
   * @default "outlined"
   */
  variant?: CardVariant;

  /**
   * @zh 卡片布局变体
   * @en Card layout variant
   * @default "stacked"
   */
  layout?: CardLayout;

  /**
   * @zh 卡片内容
   * @en Card content
   */
  children?: ReactNode;

  /**
   * @zh 点击事件处理函数,设置后卡片将展示交互状态层
   * @en Click handler, when set the card will show interaction state layers
   */
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;

  /**
   * @zh 禁用状态
   * @en Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * @zh 拖拽中状态(16% state layer + 提升 elevation),可通过 `draggable` 自动检测或手动控制
   * @en Dragged state (16% state layer + raised elevation), can be auto-detected via `draggable` or controlled manually
   * @default false
   */
  dragged?: boolean;

  /**
   * @zh 启用 HTML5 拖拽事件自动检测 dragged 状态。设置为 true 时,组件会监听 onDragStart/onDragEnd 自动切换 dragged。
   * @en Enable HTML5 drag events to auto-detect dragged state. When true, the component listens to onDragStart/onDragEnd to toggle dragged.
   * @default false
   */
  draggable?: boolean;

  /**
   * @zh 拖拽开始事件
   * @en Drag start event handler
   */
  onDragStart?: (event: DragEvent<HTMLDivElement>) => void;

  /**
   * @zh 拖拽结束事件
   * @en Drag end event handler
   */
  onDragEnd?: (event: DragEvent<HTMLDivElement>) => void;
}
