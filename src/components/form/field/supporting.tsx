import React, { type ReactNode } from "react";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { useTheme } from "../../theme";
import { spacing } from "../../theme/tokens.stylex";

const styles = $create({
  supporting: {
    color: "var(--color-secondary)",
    marginBlock: spacing.xxxxxsmall,
  },
});

const Supporting = ({ children }: { children?: ReactNode }) => {
  const theme = useTheme();

  const styled = $props(styles.supporting);

  return (
    <div
      className={styled.className}
      style={{
        ...styled.style,
        "--color-secondary": theme.colors.secondary,
      }}
    >
      {children}
    </div>
  );
};

export default Supporting;
