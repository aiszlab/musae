import type { HeaderProps } from "../../types/layout";
import React, { type CSSProperties } from "react";
import { useTheme } from "../theme";
import stylex from "@stylexjs/stylex";
import { positions, sizes, spacing } from "../theme/tokens.stylex";
import { stringify } from "@aiszlab/relax/class-name";

const styles = stylex.create({
  header: (props: { backgroundColor: CSSProperties["backgroundColor"] }) => ({
    display: "flex",
    alignItems: "center",
    height: sizes.xxxlarge,
    paddingInline: spacing.xxxlarge,
    marginBlockEnd: spacing.xxxlarge,

    position: "sticky",
    top: 0,
    zIndex: positions.header,

    backgroundColor: props.backgroundColor,
  }),
});

const Header = ({ className, style, children }: HeaderProps) => {
  const theme = useTheme();
  const styled = stylex.props(
    styles.header({
      backgroundColor: theme.colors["surface-container-lowest"],
    }),
  );

  return (
    <header
      className={stringify(className, styled.className)}
      style={{
        ...styled.style,
        ...style,
      }}
    >
      {children}
    </header>
  );
};

export default Header;
