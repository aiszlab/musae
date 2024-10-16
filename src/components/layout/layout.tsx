import React, { type CSSProperties } from "react";
import { Grid } from "../grid";
import type { LayoutProps } from "musae/types/layout";
import { ChildToken, useChildren } from "./hooks";
import stylex from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { clsx } from "@aiszlab/relax";

const styles = stylex.create({
  layout: (props: {
    backgroundColor: CSSProperties["backgroundColor"];
    color: CSSProperties["color"];
  }) => ({
    backgroundColor: props.backgroundColor,
    color: props.color,
    display: "flex",
    flexDirection: "column",
  }),
});

const Layout = ({ className, style, ...props }: LayoutProps) => {
  const theme = useTheme();
  const { children, mainProps } = useChildren([props.children]);
  const sider = children.get(ChildToken.Sider);
  const hasSider = !!sider;

  const styled = stylex.props(
    styles.layout({
      backgroundColor: theme.colors["surface-container-lowest"],
      color: theme.colors["on-surface"],
    }),
  );

  return (
    <div
      className={clsx(className, styled.className)}
      style={{
        ...styled.style,
        ...style,
      }}
    >
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
    </div>
  );
};

export default Layout;
