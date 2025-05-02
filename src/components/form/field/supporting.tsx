import React, { type ReactNode, type CSSProperties } from "react";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { useTheme } from "../../theme";
import { spacing } from "../../theme/tokens.stylex";

const styles = $create({
  supporting: (props: { color: CSSProperties["color"] }) => ({
    color: props.color,
    marginBlock: spacing.xxxxxsmall,
  }),
});

const Support = ({ children }: { children?: ReactNode }) => {
  const theme = useTheme();

  const styled = $props(
    styles.supporting({
      color: theme.colors.secondary,
    }),
  );

  return <div {...styled}>{children}</div>;
};

export default Support;
