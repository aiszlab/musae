import React, { useMemo } from "react";
import type { ContextValue, MenuProps } from "./types";
import Group from "./group";
import MenuContext from "./context";
import { useControlledState } from "@aiszlab/relax";
import { useClassNames } from "../config";
import { ComponentToken, MenuClassToken } from "../../utils/class-name";
import clsx from "clsx";

/**
 * @author murukal
 *
 * @description
 * menu component
 */
const Menu = ({ onClick, className, ...props }: MenuProps) => {
  const [selectedKeys, setSelectedKeys] = useControlledState(props.selectedKeys);
  const classNames = useClassNames(ComponentToken.Menu);

  /// context value
  const contextValue = useMemo<ContextValue>(
    () => ({
      onClick: (key) => {
        setSelectedKeys([key]);
        onClick?.(key);
      },
      selectedKeys: selectedKeys ?? [],
    }),
    [onClick, selectedKeys, setSelectedKeys]
  );

  return (
    <MenuContext.Provider value={contextValue}>
      <Group className={clsx(classNames[MenuClassToken.Menu], className)} items={props.items} />
    </MenuContext.Provider>
  );
};

export default Menu;
