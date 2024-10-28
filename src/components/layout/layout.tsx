import React, { type CSSProperties } from "react";
import { Grid } from "../grid";
import type { LayoutProps } from "musae/types/layout";
import { ChildToken, useChildren } from "./hooks";
import stylex from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { stringify } from "@aiszlab/relax/class-name";
import { positions } from "../theme/tokens.stylex";

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

  main: {
    zIndex: positions.min,
  },
});

const Layout = ({ className, style, ...props }: LayoutProps) => {
  const theme = useTheme();
  const { children, mainProps } = useChildren([props.children]);
  const sider = children.get(ChildToken.Sider);
  const hasSider = !!sider;

  const styled = {
    layout: stylex.props(
      styles.layout({
        backgroundColor: theme.colors["surface-container-lowest"],
        color: theme.colors["on-surface"],
      }),
    ),
    main: stylex.props(styles.main),
  };

  return (
    <div
      className={stringify(className, styled.layout.className)}
      style={{
        ...styled.layout.style,
        ...style,
      }}
    >
      {children.get(ChildToken.Header)}

      {hasSider && (
        <Grid.Row as="main" className={styled.main.className} style={styled.main.style}>
          {sider}

          <Grid.Col {...mainProps} span={19}>
            {children.get(ChildToken.Main)}
            {children.get(ChildToken.Footer)}
          </Grid.Col>
        </Grid.Row>
      )}

      {!hasSider && (
        <main
          {...mainProps}
          className={stringify(mainProps.className, styled.main.className)}
          style={{ ...styled.main.style, ...mainProps.style }}
        >
          {children.get(ChildToken.Main)}
          {children.get(ChildToken.Footer)}
        </main>
      )}
    </div>
  );
};

export default Layout;
