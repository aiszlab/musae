import React from "react";
import { Grid } from "../grid";
import { LayoutProps } from "./types";
import { useChildren } from "./hooks";

const Layout = (props: LayoutProps) => {
  const children = useChildren([props.children]);
  const hasSider = !!children.sider;

  return (
    <>
      {children.header}

      {hasSider ? (
        <Grid.Row as="main">
          {children.sider}

          <Grid.Col span={20}>
            {children.main}
            {children.footer}
          </Grid.Col>
        </Grid.Row>
      ) : (
        <main>
          {children.main}
          {children.footer}
        </main>
      )}
    </>
  );
};

export default Layout;
