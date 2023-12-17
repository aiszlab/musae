import { useControlledState, type Partialable } from "@aiszlab/relax";
import { useMemo, type Key, useCallback } from "react";
import type { ExpandHandler } from "./types";

/**
 * @description
 * expanded keys
 */
export const useExpandedKeys = ([expandedKeys]: [Partialable<Key[]>]) => {
  const [_expandedKeys, _setExpandedKeys] = useControlledState(expandedKeys);

  const readableExpandedKeys = useMemo(() => new Set(_expandedKeys), [_expandedKeys]);

  const expand = useCallback<ExpandHandler>(
    (key) => {
      _setExpandedKeys((prev) => {
        const expanded = new Set(prev);
        expanded.has(key) ? expanded.delete(key) : expanded.add(key);
        return Array.from(expanded);
      });
    },
    [_setExpandedKeys]
  );

  return {
    expandedKeys: readableExpandedKeys,
    expand,
  };
};
