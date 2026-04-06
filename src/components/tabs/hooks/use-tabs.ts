import { useState, type Key } from "react";
import { type TabItem, type TabsProps } from "../../../types/tabs";
import { isUndefined, useControlledState, useEvent } from "@aiszlab/relax";
import type { Partialable } from "@aiszlab/relax/types";

/**
 * @description
 * tabs
 */
export const useTabs = ({
  activeKey: _activeKey,
  items,
  defaultActiveKey,
  onChange,
}: {
  activeKey?: Key;
  items: TabItem[];
  defaultActiveKey?: Key;
  onChange?: TabsProps["onChange"];
}) => {
  const [activeKey, setActiveKey] = useControlledState<Partialable<Key>>(_activeKey, {
    defaultState: defaultActiveKey ?? items.at(0)?.key,
    onChange: useEvent((selectedKey) => {
      if (isUndefined(selectedKey)) return;
      onChange?.(selectedKey);
    }),
  });

  const [activatedKeys, setActivatedKeys] = useState<Set<Key>>(() => {
    return new Set(isUndefined(activeKey) ? void 0 : [activeKey]);
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
