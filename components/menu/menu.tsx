import React from "react";
import type { MenuProps } from "./types";
import Group from "./group";

/**
 * @author murukal
 *
 * @description
 * menu component
 */
const Menu = (props: MenuProps) => {
  return <Group level={0} {...props} isCollapsed={false} />;
};

export default Menu;
