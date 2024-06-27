import { isUndefined, useControlledState, useEvent } from "@aiszlab/relax";
import { useState, type Key } from "react";
import { TabItem } from "./types";

/**
 * @description
 * tabs
 */
export const useTabs = ({
  activeKey: _activeKey,
  items,
  defaultActiveKey,
}: {
  activeKey?: Key;
  items: TabItem[];
  defaultActiveKey?: Key;
}) => {
  const [activeKey, setActiveKey] = useControlledState(_activeKey, {
    defaultState: defaultActiveKey ?? items.at(0)?.key,
  });

  const [activatedKeys, setActivatedKeys] = useState<Set<Key>>(() => {
    return new Set(isUndefined(activeKey) ? [] : [activeKey]);
  });

  const changeActiveKey = useEvent((key: Key) => {
    setActiveKey(key);
    setActivatedKeys((prev) => new Set(prev).add(key));
  });

  return {
    activeKey,
    activatedKeys,
    changeActiveKey,
  };
};
