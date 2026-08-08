import type { ReactNode } from "react";
import type { ComponentProps } from "./element";

export interface TypographyProps extends ComponentProps {
  /**
   * @zh 字体尺寸等级
   * @en Font size level
   * @default "medium"
   */
  size?: "large" | "medium" | "small";

  /**
   * @zh 文本内容
   * @en Text content
   */
  children?: ReactNode;
}
