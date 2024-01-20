import { HeaderProps } from "./types";
import React, { CSSProperties } from "react";
import { useTheme } from "../theme";
import * as stylex from "@stylexjs/stylex";
import { ColorToken } from "../../utils/colors";
import { sizes, spacing } from "../theme/tokens.stylex";

const styles = stylex.create({
  header: (backgroundColor: Required<CSSProperties>["backgroundColor"]) => ({
    height: sizes.xxlarge,
    paddingInline: spacing.xxlarge,
    marginBottom: spacing.xxlarge,
    position: "sticky",
    top: 0,
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    backgroundColor,
  }),
});

const Header = (props: HeaderProps) => {
  const theme = useTheme();

  return (
    <header {...stylex.props(styles.header(theme.colors[ColorToken.SurfaceContainerLowest]))}>{props.children}</header>
  );
};

export default Header;
