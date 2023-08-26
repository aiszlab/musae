import React, { useMemo } from "react";
import type { ContextValue, MenuProps } from "./types";
import Group from "./group";
import MenuContext from "./context";

/**
 * @author murukal
 *
 * @description
 * menu component
 */
const Menu = ({ items, onClick }: MenuProps) => {
  const contextValue = useMemo<ContextValue>(
    () => ({
      onClick,
    }),
    [onClick]
  );

  return (
    <MenuContext.Provider value={contextValue}>
      <Group items={items} />
    </MenuContext.Provider>
  );
};

export default Menu;
