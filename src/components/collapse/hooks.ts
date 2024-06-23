import { useControlledState, useEvent } from "@aiszlab/relax";
import { useMemo, type Key } from "react";

/**
 * @description
 * `Collapse` active key hook
 */
export const useActiveKeys = ({
  defaultActiveKeys,
  activeKeys: _activeKeys,
  onChange: _onChange,
}: {
  defaultActiveKeys?: Key[];
  activeKeys?: Key[];
  onChange?: (keys: Key[]) => void;
}): [Set<Key>, (key: Key) => void] => {
  const [__activeKeys, _setActiveKeys] = useControlledState(_activeKeys, { defaultState: defaultActiveKeys });

  const activeKeys = useMemo(() => new Set(__activeKeys), [__activeKeys]);

  const toggle = useEvent((key: Key) => {
    const expandedKeys = new Set(activeKeys);
    const isExpanded = expandedKeys.has(key);

    if (isExpanded) {
      expandedKeys.delete(key);
    } else {
      expandedKeys.add(key);
    }

    const _expandedKeys = Array.from(expandedKeys);
    _setActiveKeys(_expandedKeys);
    _onChange?.(_expandedKeys);
  });

  return [activeKeys, toggle];
};
