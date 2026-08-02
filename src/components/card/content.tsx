import type { ReactNode, CSSProperties } from "react";
import React, { forwardRef } from "react";
import { stringify } from "@aiszlab/relax/class-name";
import { props as $props } from "@stylexjs/stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { CLASS_NAMES } from "./context";
import styles from "./styles";

/**
 * @zh 卡片内容区属性
 * @en Card content props
 */
interface CardContentProps {
  /**
   * @zh 自定义类名
   * @en Custom class name
   */
  className?: string;
  /**
   * @zh 自定义样式
   * @en Custom style
   */
  style?: CSSProperties;
  /**
   * @zh 内容
   * @en Content
   */
  children?: ReactNode;
}

/**
 * @zh 卡片内容区,用于展示结构化文本(padding 16, gap 32)。
 * 推荐组合:Headline(Title + Subhead) + Body + Actions。
 *
 * @en Card content area for displaying structured text (padding 16, gap 32).
 * Recommended composition: Headline (Title + Subhead) + Body + Actions.
 */
const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, style, children }, ref) => {
    const classNames = useClassNames(CLASS_NAMES);
    const contentStyled = $props(styles.content.default);

    return (
      <div
        ref={ref}
        className={stringify(classNames.content, className, contentStyled.className)}
        style={{ ...contentStyled.style, ...style }}
      >
        {children}
      </div>
    );
  },
);

export default CardContent;
export type { CardContentProps };
