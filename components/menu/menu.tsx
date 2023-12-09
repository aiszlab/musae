import React, { forwardRef, useImperativeHandle, useMemo, useRef } from "react";
import type { ContextValue, GroupRef, MenuProps, MenuRef } from "./types";
import Group from "./group";
import Context from "./context";
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
const Menu = forwardRef<MenuRef, MenuProps>(({ onClick, className, style, ...props }, ref) => {
  const [selectedKeys, setSelectedKeys] = useControlledState(props.selectedKeys);
  const classNames = useClassNames(ComponentToken.Menu);
  const groupRef = useRef<GroupRef>(null);

  useImperativeHandle(
    ref,
    () => ({
      scrollTo: (...args) => {
        groupRef.current?.scrollTo(...args);
      },
    }),
    []
  );

  /// context value
  const contextValue = useMemo<ContextValue>(
    () => ({
      onClick: (key) => {
        setSelectedKeys([key]);
        onClick?.(key);
      },
      selectedKeys: new Map(selectedKeys?.map((key) => [key, true])),
    }),
    [onClick, selectedKeys, setSelectedKeys]
  );

  return (
    <Context.Provider value={contextValue}>
      <Group
        className={clsx(classNames[MenuClassToken.Menu], className)}
        items={props.items}
        ref={groupRef}
        style={style}
      />
    </Context.Provider>
  );
});

export default Menu;
