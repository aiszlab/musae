import styles from "./styles";
import { props as $props } from "@stylexjs/stylex";
import React, { forwardRef } from "react";
import type { VisuallyHiddenProps } from "../../types/visually-hidden";
import { stringify } from "@aiszlab/relax/class-name";
import { useClassNames } from "../../hooks/use-class-names";
import { CLASS_NAMES } from "./context";

const VisuallyHidden = forwardRef<HTMLDivElement, VisuallyHiddenProps>(
  ({ children, dangerouslySetInnerHTML, ...props }, ref) => {
    const styled = $props(styles.hidden);
    const classNames = useClassNames(CLASS_NAMES);

    return (
      <div
        {...props}
        className={stringify(classNames.visuallyHidden, styled.className)}
        style={styled.style}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);

export default VisuallyHidden;
