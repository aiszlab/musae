import type { ReactNode, CSSProperties } from "react";
import React, { forwardRef } from "react";
import { stringify } from "@aiszlab/relax/class-name";
import { props as $props } from "@stylexjs/stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { CLASS_NAMES } from "./context";
import styles from "./styles";

/**
 * @zh 卡片 Subhead 文本(14px body/medium,on-surface-variant)
 * @en Card subhead text (14px body/medium, on-surface-variant)
 */
interface CardSubheadProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

/**
 * @zh 卡片 Subhead 文本(14px body/medium)。
 * @en Card subhead text (14px body/medium).
 */
const CardSubhead = forwardRef<HTMLDivElement, CardSubheadProps>(
  ({ className, style, children }, ref) => {
    const classNames = useClassNames(CLASS_NAMES);
    const subheadStyled = $props(styles.subhead.default);

    return (
      <div
        ref={ref}
        className={stringify(classNames.subhead, className, subheadStyled.className)}
        style={{ ...subheadStyled.style, ...style }}
      >
        {children}
      </div>
    );
  },
);

export default CardSubhead;
export type { CardSubheadProps };
