import Context from "./context";
import React, { useCallback, useMemo, useState } from "react";
import type { ContextValue, CheckboxGroupProps } from "./types";

const Group = (props: CheckboxGroupProps) => {
  const [valueWithChecked, setValueWithChecked] = useState(new Map<string, boolean>());

  /// change handler
  const change = useCallback<ContextValue["onChange"]>(
    (value) => {
      setValueWithChecked((prev) => new Map(prev).set(value, !!prev.get(value)));
    },
    [setValueWithChecked]
  );

  /// context value
  const _contextValue = useMemo<ContextValue>(() => {
    return {
      value: valueWithChecked,
      onChange: change,
    };
  }, [valueWithChecked, change]);

  return <Context.Provider value={_contextValue}>{props.children}</Context.Provider>;
};

export default Group;
