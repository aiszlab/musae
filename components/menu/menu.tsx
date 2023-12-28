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
  const [expandedKeys, setExpandedKeys] = useControlledState(props.expandedKeys);
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
      onExpand: (key) => {
        setExpandedKeys((_expandedKeys) => Array.from(new Set(_expandedKeys).add(key)));
      },
      onCollapse: (key) => {
        setExpandedKeys((_expandedKeys) => {
          const collapsed = new Set(_expandedKeys);
          collapsed.delete(key);
          return Array.from(collapsed);
        });
      },
      selectedKeys: new Set(selectedKeys),
      expandedKeys: new Set(expandedKeys),
    }),
    [selectedKeys, expandedKeys, setSelectedKeys, onClick, setExpandedKeys]
  );

  return (
    <Context.Provider value={contextValue}>
      <ul className={clsx(classNames[MenuClassToken.Menu], className)}>{props.items.map(() => {})}</ul>
      <Group className={} items={props.items} ref={groupRef} style={style} level={0} />
    </Context.Provider>
  );
});

export default Menu;
