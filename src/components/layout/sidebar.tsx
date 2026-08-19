import styles from "./styles";
import type { SidebarProps } from "../../types/layout";
import React, { useContext } from "react";
import { props as $props } from "@stylexjs/stylex";
import Context from "./context";
import { stringify } from "@aiszlab/relax/class-name";

const Sidebar = ({ style, children, className }: SidebarProps) => {
  const { classNames } = useContext(Context);
  const styled = {
    sidebar: $props(styles.sidebar.sidebar.default),
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
