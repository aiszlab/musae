import Context from "./context";
import React, { useCallback, useMemo, useState } from "react";
import type { ContextValue, CheckboxGroupProps } from "./types";

const Group = (props: CheckboxGroupProps) => {
  const [value, setValue] = useState(new Set<string>());

  /// change handler
  const change = useCallback<ContextValue["change"]>((value) => {
    setValue((prev) => {
      const next = new Set(prev);
      if (next.has(value)) {
        next.delete(value);
      } else {
        next.add(value);
      }
      return next;
    });
  }, []);

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
