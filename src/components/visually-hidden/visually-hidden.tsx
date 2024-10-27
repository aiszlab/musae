import stylex from "@stylexjs/stylex";
import React from "react";
import type { VisuallyHiddenProps } from "musae/types/visually-hidden";
import { sizes, spacing } from "../theme/tokens.stylex";
import { clsx } from "@aiszlab/relax";
import { useClassNames } from "../../hooks/use-class-names.component";
import { CLASS_NAMES } from "./context";

const styles = stylex.create({
  hidden: {
    width: sizes.smallest,
    height: sizes.smallest,
    margin: spacing.smallest,
    position: "absolute",
    clip: "rect(0, 0, 0, 0)",
    overflow: "hidden",
  },
});

const VisuallyHidden = ({ children, dangerouslySetInnerHTML }: VisuallyHiddenProps) => {
  const styled = stylex.props(styles.hidden);
  const classNames = useClassNames(CLASS_NAMES);

  return (
    <div
      className={clsx(classNames.visuallyHidden, styled.className)}
      style={styled.style}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {children}
    </div>
  );
};

export default VisuallyHidden;
