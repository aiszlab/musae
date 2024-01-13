import { HeaderProps, Token } from "./types";
import React from "react";
import { useTheme } from "../theme";

const Header = (props: HeaderProps) => {
  const theme = useTheme();

  return (
    <header
      style={{
        height: Token.HeaderHeight,
        position: "sticky",
        top: 0,
        paddingInline: 40,
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        background: theme.colorRole.onPrimary,
        marginBottom: Token.RowGap,
      }}
    >
      {props.children}
    </header>
  );
};

export default Header;
