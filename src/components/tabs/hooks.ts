import { isVoid, useControlledState } from "@aiszlab/relax";
import { ReactNode, useMemo, useState, type Key } from "react";
import { TabItem } from "./types";

/**
 * @description
 * tabs
 */
export const useTabs = ({
  activeKey: _activeKey,
  items: _items,
  defaultActiveKey,
}: {
  activeKey?: Key;
  items: TabItem[];
  defaultActiveKey?: Key;
}) => {
  // convert to mapped items
  // content count
  const [items, hasChildren] = useMemo(() => {
    return _items.reduce<[Map<Key, TabItem>, boolean]>(
      ([collected, hasChildren], item) => {
        return [collected.set(item.key, item), hasChildren || !!item.children];
      },
      [new Map(), false]
    );
  }, [_items]);

  const [activeKey, setActiveKey] = useControlledState(_activeKey, {
    defaultState: defaultActiveKey ?? _items.at(0)?.key,
  });

  const [children, setChildren] = useState<Map<Key, ReactNode>>(() => {
    if (isVoid(activeKey)) return new Map();
    return new Map().set(activeKey, items.get(activeKey)?.children);
  });

  return {
    children,
    setActiveKey,
    activeKey,
    items,
    setChildren,
    hasChildren,
  };
};
