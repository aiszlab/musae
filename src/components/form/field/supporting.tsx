import styles from "../styles";
import React, { type ReactNode } from "react";
import { props as $props } from "@stylexjs/stylex";
import { useTheme } from "../../theme";

const Supporting = ({ children }: { children?: ReactNode }) => {
  const theme = useTheme();

  const styled = $props(styles.supporting.default);

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
