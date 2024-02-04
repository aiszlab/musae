import React, { useMemo } from "react";
import { MenuChildProps, MenuChildRenderProps } from "./types";
import Group from "./group";
import Item from "./item";
import { useMenuContext } from "./hooks";

const Child = ({ item, level }: MenuChildProps) => {
  const { click, collect } = useMenuContext();

  const _props = useMemo<MenuChildRenderProps>(
    () => ({
      key: item.key,
      _key: item.key,
      level,
      label: item.label,
      prefix: item.prefix,
      className: item.className,
      style: item.style,
    }),
    [item, level]
  );

  /// if item with children, use group for child render
  if (item.children) {
    return <Group {..._props} items={item.children} />;
  }

  /// only render menu item
  return (
    <Item
      {..._props}
      onClick={click}
      ref={(_ref) => {
        collect(item.key, _ref!);
      }}
    />
  );
};

export default Child;
