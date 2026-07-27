import type { ReactNode, MouseEvent } from "react";
import type { ComponentProps } from "./element";

/**
 * @zh 卡片样式变体
 * @en Card style variant
 */
export type CardVariant = "outlined" | "elevated" | "filled";

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
   * @zh 卡片内容
   * @en Card content
   */
  children?: ReactNode;

  /**
   * @zh 点击事件处理函数，设置后卡片将展示交互状态层
   * @en Click handler, when set the card will show interaction state layers
   */
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;

  /**
   * @zh 禁用状态
   * @en Disabled state
   * @default false
   */
  disabled?: boolean;
}
