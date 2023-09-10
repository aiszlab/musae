import React, { useMemo, useState } from "react";
import type { ContextValue, MenuProps } from "./types";
import Group from "./group";
import MenuContext from "./context";

/**
 * @author murukal
 *
 * @description
 * menu component
 */
const Menu = (props: MenuProps) => {
  const [selectedKeys, setSelectedKeys] = useState<ContextValue["selectedKeys"]>([]);

  /// context value
  const contextValue = useMemo<ContextValue>(
    () => ({
      onClick: (key) => {
        setSelectedKeys([key]);
        props.onClick?.(key);
      },
      selectedKeys,
    }),
    [props.onClick, selectedKeys]
  );

  return (
    <MenuContext.Provider value={contextValue}>
      <Group items={props.items} />
    </MenuContext.Provider>
  );
};

export default Menu;
