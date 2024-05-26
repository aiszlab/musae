import { SiderProps } from "./types";
import { Grid } from "../grid";
import React from "react";
import * as stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import clsx from "clsx";

const styles = stylex.create({
  sider: {
    height: `calc(100vh - ${sizes.xxxlarge} - ${spacing.xxlarge})`,
    position: "sticky",
    top: `calc(${sizes.xxxlarge} + ${spacing.xxlarge})`,
  },
});

const Sider = (props: SiderProps) => {
  const styled = stylex.props(styles.sider);

  return (
    <Grid.Col
      style={{
        ...styled.style,
        ...props.style,
      }}
      className={clsx(props.className, styled.className)}
      span={5}
      as="aside"
    >
      {props.children}
    </Grid.Col>
  );
};

export default Sider;
