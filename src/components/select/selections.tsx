import React, { useContext } from "react";
import { Menu } from "../menu";
import { Context } from "../picker";
import { useMemorized } from "@aiszlab/relax";
import type { SelectionsProps } from "../../types/select";
import { Empty } from "../empty";

/**
 * @description
 * just display the selections for user selectable like options
 * use `Menu` component for react render
 *
 * other way, use `memo` HOC to wrapper
 * because in options close, we use timeout animations
 * but in animation time, we do not need to re-render the component, keep options in last state
 */
const Selections = ({ onSelect, selectedKeys, items: menuItems }: SelectionsProps) => {
  const { isOpen } = useContext(Context);

  const items = useMemorized<typeof menuItems>(
    (prev) => {
      if (!isOpen) return prev ?? menuItems;
      return menuItems;
    },
    [isOpen, menuItems],
  );

  if (items.length === 0) {
    return <Empty />;
  }

  return <Menu items={items} onClick={onSelect} selectedKeys={selectedKeys} />;
};

export default Selections;
