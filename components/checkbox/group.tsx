import Context from "./context";
import React, { useCallback, useMemo } from "react";
import type { ContextValue, CheckboxGroupProps } from "./types";
import { useControlledState } from "@aiszlab/relax";

const Group = (props: CheckboxGroupProps) => {
  const [_value, _setValue] = useControlledState(props.value!, {
    defaultState: [],
  });
  const value = useMemo(() => new Set(_value), [_value]);

  /// change handler
  const change = useCallback<ContextValue["change"]>(
    (value) => {
      _setValue((prev) => {
        const next = new Set(prev);
        if (next.has(value)) {
          next.delete(value);
        } else {
          next.add(value);
        }
        return Array.from(next);
      });
    },
    [_setValue]
  );

  /// context value
  const _contextValue = useMemo<ContextValue>(() => {
    return {
      value,
      change,
    };
  }, [value, change]);

  return <Context.Provider value={_contextValue}>{props.children}</Context.Provider>;
};

export default Group;
