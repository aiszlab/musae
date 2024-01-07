import { SiderProps, Token } from "./types";
import { Grid } from "../grid";
import React from "react";

const Sider = (props: SiderProps) => {
  return (
    <Grid.Col
      style={{
        height: `calc(100vh - ${Token.HeaderHeight + Token.RowGap}px)`,
        position: "sticky",
        top: Token.HeaderHeight + Token.RowGap,
        ...props.style,
      }}
      className={props.className}
      span={4}
      as="aside"
    >
      {props.children}
    </Grid.Col>
  );
};

export default Sider;
