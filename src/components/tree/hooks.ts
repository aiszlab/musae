import { useControlledState } from "@aiszlab/relax";
import { useMemo, useCallback } from "react";
import type { ContextValue, TreeProps } from "./types";

/**
 * @description
 * expanded keys
 */
export const useExpandedKeys = ([expandedKeys, onExpand]: [TreeProps["expandedKeys"], TreeProps["onExpand"]]) => {
  const [_expandedKeys, _setExpandedKeys] = useControlledState(expandedKeys);
  const readableExpandedKeys = useMemo(() => new Set(_expandedKeys), [_expandedKeys]);

  const toggle = useCallback<Required<ContextValue>["toggle"]>(
    (key) => {
      // deal expanding key
      const readableExpandingKeys = new Set(_expandedKeys);
      readableExpandingKeys.has(key) ? readableExpandingKeys.delete(key) : readableExpandingKeys.add(key);
      const expandingKeys = Array.from(readableExpandingKeys);

      // change inner state
      // emit change handler
      _setExpandedKeys(expandingKeys);
      onExpand?.(expandingKeys);
    },
    [_expandedKeys, _setExpandedKeys, onExpand]
  );

  return {
    expandedKeys: readableExpandedKeys,
    toggle,
  };
};
