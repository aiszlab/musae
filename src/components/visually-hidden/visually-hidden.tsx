import stylex from "@stylexjs/stylex";
import React from "react";
import type { VisuallyHiddenProps } from "./types";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { ComponentToken, VisuallyHiddenClassToken } from "../../utils/class-name";
import clsx from "clsx";

const styles = stylex.create({
  hidden: {
    width: sizes.smallest,
    height: sizes.smallest,
    margin: spacing.smallest,
    position: "absolute",
    clip: "rect(0, 0, 0, 0)",
  },
});

const VisuallyHidden = ({ children }: VisuallyHiddenProps) => {
  const styled = stylex.props(styles.hidden);
  const classNames = useClassNames(ComponentToken.VisuallyHidden);

  return (
    <span className={clsx(classNames[VisuallyHiddenClassToken.VisuallyHidden], styled.className)} style={styled.style}>
      {children}
    </span>
  );
};

export default VisuallyHidden;
