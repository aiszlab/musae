import React, { type CSSProperties } from "react";
import { clsx } from "@aiszlab/relax";
import type { TagProps } from "musae/types/tag";
import { useClassNames } from "../../hooks/use-class-names";
import { TagClassToken } from "../../utils/class-name";
import stylex from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { typography } from "../theme/theme";
import { spacing } from "../theme/tokens.stylex";
import { Close } from "musae/icons";

const styles = stylex.create({
  tag: (props: {
    backgroundColor: CSSProperties["backgroundColor"];
    color: CSSProperties["color"];
  }) => ({
    backgroundColor: props.backgroundColor,
    color: props.color,
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
  }),

  small: {
    paddingInline: spacing.small,
    paddingBlock: spacing.xxsmall,
    borderRadius: spacing.xxsmall,
    gap: spacing.xxsmall,
  },

  medium: {
    paddingInline: spacing.medium,
    paddingBlock: spacing.xsmall,
    borderRadius: spacing.xsmall,
    gap: spacing.xsmall,
  },

  large: {
    paddingInline: spacing.large,
    paddingBlock: spacing.small,
    borderRadius: spacing.small,
    gap: spacing.small,
  },
});

const Tag = ({
  children,
  size = "medium",
  className,
  style,
  closable = false,
  onClose,
  leading,
}: TagProps) => {
  const classNames = useClassNames("tag");
  const theme = useTheme();

  const styled = stylex.props(
    typography.label[size],
    styles.tag({
      backgroundColor: theme.colors["primary-container"],
      color: theme.colors["on-primary-container"],
    }),
    styles[size],
  );

  return (
    <span
      className={clsx(classNames[TagClassToken.Tag], className, styled.className)}
      style={{
        ...styled.style,
        ...style,
      }}
    >
      {leading}
      {children}
      {closable && <Close onClick={onClose} />}
    </span>
  );
};

export default Tag;
