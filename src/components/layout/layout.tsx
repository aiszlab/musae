import React from "react";
import type { LayoutProps } from "../../types/layout";
import { useChildren } from "./hooks";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { stringify } from "@aiszlab/relax/class-name";
import Context, { CLASS_NAMES } from "./context";
import { useClassNames } from "../../hooks/use-class-names";
import Heading from "./heading";
import Header from "./header";
import Sidebar from "./sidebar";
import Main from "./main";
import Footer from "./footer";

const styles = {
  layout: $create({
    default: (props: { gridTemplateAreas: string }) => ({
      display: "grid",
      gridTemplateAreas: props.gridTemplateAreas,
    }),
  }),
};

const Layout = ({ className, style, ...props }: LayoutProps) => {
  const theme = useTheme();
  const classNames = useClassNames(CLASS_NAMES);
  const { children, gridTemplateAreas } = useChildren({
    children: props.children,
  });

  const styled = {
    layout: $props(styles.layout.default({ gridTemplateAreas })),
  };

  return (
    <Context.Provider value={{ classNames }}>
      <div
        className={stringify(className, classNames.layout, styled.layout.className)}
        style={{
          ...styled.layout.style,
          ...style,
          // @ts-expect-error style vars
          "--color-outline-variant": theme.colors["outline-variant"],
        }}
      >
        {children.get(Heading)}
        {children.get(Header)}
        {children.get(Sidebar)}
        {children.get(Main)}
        {children.get(Footer)}
      </div>
    </Context.Provider>
  );
};

export default Layout;
