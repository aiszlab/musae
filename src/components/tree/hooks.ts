import { useControlledState, useEvent } from "@aiszlab/relax";
import { useMemo, useCallback, Key } from "react";
import type { ContextValue, TreeProps } from "./types";

/**
 * @description
 * expanded keys
 */
export const useExpandedKeys = ({
  expandedKeys,
  onExpand,
  defaultExpandedKeys,
}: {
  expandedKeys?: Key[];
  onExpand: TreeProps["onExpand"];
  defaultExpandedKeys: Key[];
}) => {
  const [_expandedKeys, _setExpandedKeys] = useControlledState(expandedKeys!, { defaultState: defaultExpandedKeys });
  const readableExpandedKeys = useMemo(() => new Set(_expandedKeys), [_expandedKeys]);

  const toggle = useCallback(
    (key: Key) => {
      // deal expanding key
      const _keys = new Set(_expandedKeys);
      _keys.has(key) ? _keys.delete(key) : _keys.add(key);
      const expandingKeys = Array.from(_keys);

      // change inner state
      // emit change handler
      _setExpandedKeys(expandingKeys);
      onExpand?.(expandingKeys);
    },
    [_expandedKeys, _setExpandedKeys, onExpand],
  );

  return {
    expandedKeys: readableExpandedKeys,
    toggle,
  };
};

/**
 * @description
 * selected keys
 */
export const useSelectedKeys = ({
  selectedKeys: _selectedKeys,
  defaultSelectedKeys,
  onSelect,
}: {
  selectedKeys?: Key[];
  defaultSelectedKeys: Key[];
  onSelect?: (key: Key) => void;
}) => {
  const [selectedKeys, setSelectedKeys] = useControlledState(_selectedKeys!, { defaultState: defaultSelectedKeys });
  const readableSelectedKeys = useMemo(() => new Set(selectedKeys), [selectedKeys]);

  const toggle = useEvent((key: Key) => {
    setSelectedKeys(() => [key]);
    onSelect?.(key);
  });

  return {
    selectedKeys: readableSelectedKeys,
    toggle,
  };
};
