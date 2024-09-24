import type { SiderProps } from "musae/types/layout";
import { Grid } from "../grid";
import React from "react";

const Sider = ({ style, children, className }: SiderProps) => {
  return (
    <Grid.Col style={style} className={className} span={5} as="aside">
      {children}
    </Grid.Col>
  );
};

export default Sider;
