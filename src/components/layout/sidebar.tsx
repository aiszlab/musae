import type { SidebarProps } from "../../types/layout";
import React, { useContext } from "react";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import Context from "./context";
import { stringify } from "@aiszlab/relax/class-name";

const styles = {
  sidebar: $create({
    default: {
      gridArea: "sidebar",
      padding: spacing.xxxxlarge,
      overflow: "hidden",

      borderWidth: sizes.none,
      borderTopWidth: sizes.smallest,
      borderRightWidth: sizes.smallest,
      borderStyle: "solid",
      borderColor: "var(--color-outline-variant)",

      ":hover": {
        overflow: "auto",
      },
    },
  }),
};

const Sidebar = ({ style, children, className }: SidebarProps) => {
  const { classNames } = useContext(Context);
  const styled = {
    sidebar: $props(styles.sidebar.default),
  };

  return (
    <aside
      className={stringify(classNames.sidebar, className, styled.sidebar.className)}
      style={{
        ...styled.sidebar.style,
        ...style,
      }}
    >
      {children}
    </aside>
  );
};

export default Sidebar;
