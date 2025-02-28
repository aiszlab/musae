import React, { type ReactNode, type CSSProperties } from "react";
import stylex from "@stylexjs/stylex";
import { useTheme } from "../../theme";
import { spacing } from "../../theme/tokens.stylex";

const styles = stylex.create({
  support: (props: { color: CSSProperties["color"] }) => ({
    color: props.color,
    marginBlock: spacing.xxxxxsmall,
  }),
});

const Support = ({ children }: { children?: ReactNode }) => {
  const theme = useTheme();

  const styled = stylex.props(
    styles.support({
      color: theme.colors.secondary,
    }),
  );

  return <div {...styled}>{children}</div>;
};

export default Support;
