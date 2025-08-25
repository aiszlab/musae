import React from "react";
import type { LayoutProps } from "../../types/layout";
import { useChildren } from "./hooks";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import Context, { CLASS_NAMES } from "./context";
import { useClassNames } from "../../hooks/use-class-names";
import Heading from "./heading";
import Header from "./header";
import Sidebar from "./sidebar";
import Main from "./main";
import Footer from "./footer";
import { useThemeColorVars } from "../../hooks/use-theme-color-vars";

const styles = {
  layout: $create({
    default: {
      display: "grid",
      gridTemplateAreas: "var(--layout)",
    },
  }),
};

const Layout = ({ className, style, ...props }: LayoutProps) => {
  const classNames = useClassNames(CLASS_NAMES);
  const { children, gridTemplateAreas } = useChildren({
    children: props.children,
  });
  const _themeColorVars = useThemeColorVars(["outline-variant"]);

  const styled = {
    layout: $props(styles.layout.default),
  };

  return (
    <Context.Provider value={{ classNames }}>
      <div
        className={stringify(className, classNames.layout, styled.layout.className)}
        style={{
          ...styled.layout.style,
          ..._themeColorVars,
          ...style,
          "--layout": gridTemplateAreas,
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
