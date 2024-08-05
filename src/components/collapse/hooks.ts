import { useControlledState, useEvent, toArray, exclude } from "@aiszlab/relax";
import { useMemo, type Key } from "react";
import type { Value } from "./types";

/**
 * @description
 * `Collapse` active key hook
 */
export const useActiveKeys = ({
  defaultActiveKey,
  activeKey: _activeKey,
  onChange: _onChange,
  accordion,
}: {
  defaultActiveKey?: Value;
  activeKey?: Value;
  onChange?: (value: Key[]) => void;
  accordion: boolean;
}): [Set<Key>, (key: Key) => void] => {
  const [_activeKeys, _setActiveKeys] = useControlledState<Value | undefined>(_activeKey, {
    defaultState: defaultActiveKey,
  });

  const activeKeys = useMemo(() => {
    const keys = exclude(toArray(_activeKeys), [void 0]);
    if (accordion) {
      return new Set(keys.slice(0, 1));
    }
    return new Set(keys);
  }, [_activeKeys, accordion]);

  const toggle = useEvent((key: Key) => {
    const expandedKeys = new Set(activeKeys);
    const isExpanded = expandedKeys.has(key);

    // `accordion` mode, just toggle `key`
    // otherwise, normally toggle `key`
    if (accordion) {
      expandedKeys.clear();
      if (!isExpanded) {
        expandedKeys.add(key);
      }
    } else {
      if (isExpanded) {
        expandedKeys.delete(key);
      } else {
        expandedKeys.add(key);
      }
    }

    const _expandedKeys = Array.from(expandedKeys);
    _setActiveKeys(_expandedKeys);
    _onChange?.(_expandedKeys);
  });

  return [activeKeys, toggle];
};
