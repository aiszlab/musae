import React from "react";
import { Grid } from "../grid";
import { LayoutProps } from "./types";
import { ChildToken, useChildren } from "./hooks";

const Layout = (props: LayoutProps) => {
  const { children, mainProps } = useChildren([props.children]);
  const sider = children.get(ChildToken.Sider);
  const hasSider = !!sider;

  return (
    <>
      {children.get(ChildToken.Header)}

      {hasSider ? (
        <Grid.Row as="main">
          {sider}

          <Grid.Col {...mainProps} span={19}>
            {children.get(ChildToken.Main)}
            {children.get(ChildToken.Footer)}
          </Grid.Col>
        </Grid.Row>
      ) : (
        <main {...mainProps}>
          {children.get(ChildToken.Main)}
          {children.get(ChildToken.Footer)}
        </main>
      )}
    </>
  );
};

export default Layout;
