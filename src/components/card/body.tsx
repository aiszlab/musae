import type { ReactNode, CSSProperties } from "react";
import React, { forwardRef } from "react";
import { stringify } from "@aiszlab/relax/class-name";
import { props as $props } from "@stylexjs/stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { CLASS_NAMES } from "./context";
import styles from "./styles";

/**
 * @zh 卡片 Body 文本(14px body/medium,on-surface-variant)
 * @en Card body text (14px body/medium, on-surface-variant)
 */
interface CardBodyProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

/**
 * @zh 卡片 Body 文本(14px body/medium)。
 * @en Card body text (14px body/medium).
 */
const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, style, children }, ref) => {
    const classNames = useClassNames(CLASS_NAMES);
    const bodyStyled = $props(styles.body.default);

    return (
      <div
        ref={ref}
        className={stringify(classNames.body, className, bodyStyled.className)}
        style={{ ...bodyStyled.style, ...style }}
      >
        {children}
      </div>
    );
  },
);

export default CardBody;
export type { CardBodyProps };
