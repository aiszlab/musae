import type { ReactNode, CSSProperties } from "react";
import React, { forwardRef } from "react";
import { stringify } from "@aiszlab/relax/class-name";
import { props as $props } from "@stylexjs/stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { CLASS_NAMES } from "./context";
import styles from "./styles";

/**
 * @zh 卡片操作区属性
 * @en Card actions props
 */
interface CardActionsProps {
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
   * @zh 操作按钮等
   * @en Action buttons etc.
   */
  children?: ReactNode;
}

/**
 * @zh 卡片操作区,通常包含按钮等交互元素(flex, justify-end, gap 8px)。
 * @en Card actions area, typically containing buttons and other interactive
 * elements (flex, justify-end, gap 8px).
 */
const CardActions = forwardRef<HTMLDivElement, CardActionsProps>(
  ({ className, style, children }, ref) => {
    const classNames = useClassNames(CLASS_NAMES);
    const actionsStyled = $props(styles.actions.default);

    return (
      <div
        ref={ref}
        className={stringify(classNames.actions, className, actionsStyled.className)}
        style={{ ...actionsStyled.style, ...style }}
      >
        {children}
      </div>
    );
  },
);

export default CardActions;
export type { CardActionsProps };
