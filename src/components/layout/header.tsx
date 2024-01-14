import { HeaderProps, Token } from "./types";
import React, { CSSProperties } from "react";
import { useTheme } from "../theme";
import stylex from "@stylexjs/stylex";
import { ColorToken } from "../../utils/colors";

const styles = stylex.create({
  header: (backgroundColor: Required<CSSProperties>["backgroundColor"]) => ({
    height: Token.HeaderHeight,
    position: "sticky",
    top: 0,
    paddingInline: 40,
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    backgroundColor,
    marginBottom: Token.RowGap,
  }),
});

const Header = (props: HeaderProps) => {
  const theme = useTheme();

  return (
    <header {...stylex.props(styles.header(theme.colors[ColorToken.SurfaceContainerLowest]))}>{props.children}</header>
  );
};

export default Header;
