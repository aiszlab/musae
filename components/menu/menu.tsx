import React, { useMemo } from "react";
import type { ContextValue, MenuProps } from "./types";
import Group from "./group";
import MenuContext from "./context";
import { useControlledState } from "@aiszlab/relax";

/**
 * @author murukal
 *
 * @description
 * menu component
 */
const Menu = ({ onClick, ...props }: MenuProps) => {
  const [selectedKeys, setSelectedKeys] = useControlledState(props.selectedKeys);

  /// context value
  const contextValue = useMemo<ContextValue>(
    () => ({
      onClick: (key) => {
        setSelectedKeys([key]);
        onClick?.(key);
      },
      selectedKeys: selectedKeys ?? [],
    }),
    [onClick, selectedKeys]
  );

  return (
    <MenuContext.Provider value={contextValue}>
      <Group items={props.items} />
    </MenuContext.Provider>
  );
};

export default Menu;
