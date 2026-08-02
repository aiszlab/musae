import type { ReactNode, CSSProperties } from "react";
import React, { forwardRef } from "react";
import { stringify } from "@aiszlab/relax/class-name";
import { props as $props } from "@stylexjs/stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { CLASS_NAMES } from "./context";
import styles from "./styles";

/**
 * @zh 卡片 Title 文本(16px body/large)
 * @en Card title text (16px body/large)
 */
interface CardTitleProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

/**
 * @zh 卡片 Title 文本(16px body/large)。
 * @en Card title text (16px body/large).
 */
const CardTitle = forwardRef<HTMLDivElement, CardTitleProps>(
  ({ className, style, children }, ref) => {
    const classNames = useClassNames(CLASS_NAMES);
    const titleStyled = $props(styles.title.default);

    return (
      <div
        ref={ref}
        className={stringify(classNames.title, className, titleStyled.className)}
        style={{ ...titleStyled.style, ...style }}
      >
        {children}
      </div>
    );
  },
);

export default CardTitle;
export type { CardTitleProps };
