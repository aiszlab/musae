import React, { type CSSProperties } from "react";
import clsx from "clsx";
import type { TagProps } from "./types";
import { useClassNames } from "../config";
import { TagClassToken, ComponentToken } from "../../utils/class-name";
import * as stylex from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { typography } from "../theme/theme";
import { ColorToken } from "../../utils/colors";
import { spacing } from "../theme/tokens.stylex";

const styles = stylex.create({
  tag: (props: { backgroundColor: CSSProperties["backgroundColor"]; color: CSSProperties["color"] }) => ({
    backgroundColor: props.backgroundColor,
    color: props.color,
  }),

  small: {
    paddingInline: spacing.small,
    paddingBlock: spacing.xxsmall,
    borderRadius: spacing.xxsmall,
  },

  large: {
    paddingInline: spacing.large,
    paddingBlock: spacing.small,
    borderRadius: spacing.small,
  },
});

const Tag = ({ children, size = "large", className, style }: TagProps) => {
  const classNames = useClassNames(ComponentToken.Tag);
  const theme = useTheme();

  const styled = stylex.props(
    typography.label.large,
    styles.tag({
      backgroundColor: theme.colors[ColorToken.PrimaryContainer],
      color: theme.colors[ColorToken.OnPrimaryContainer],
    }),
    styles[size]
  );

  return (
    <span
      className={clsx(classNames[TagClassToken.Tag], className, styled.className)}
      style={{
        ...styled.style,
        ...style,
      }}
    >
      {children}
    </span>
  );
};

export default Tag;
