import type { ReactNode, CSSProperties } from "react";
import React, { forwardRef } from "react";
import { stringify } from "@aiszlab/relax/class-name";
import { props as $props } from "@stylexjs/stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { CLASS_NAMES } from "./context";
import styles from "./styles";

/**
 * @zh Title + Subhead 的紧凑分组(4px gap)
 * @en Compact group for Title + Subhead (4px gap)
 */
interface CardHeadlineProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

/**
 * @zh Title + Subhead 的 4px 紧凑分组。
 * @en 4px-gap group for Title + Subhead.
 */
const CardHeadline = forwardRef<HTMLDivElement, CardHeadlineProps>(
  ({ className, style, children }, ref) => {
    const classNames = useClassNames(CLASS_NAMES);
    const headlineStyled = $props(styles.headline.default);

    return (
      <div
        ref={ref}
        className={stringify(classNames.headline, className, headlineStyled.className)}
        style={{ ...headlineStyled.style, ...style }}
      >
        {children}
      </div>
    );
  },
);

export default CardHeadline;
export type { CardHeadlineProps };
