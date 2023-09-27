import Context from "./context";
import React, { useCallback, useMemo, useState } from "react";
import type { ContextValue, CheckboxGroupProps } from "./types";

const Group = (props: CheckboxGroupProps) => {
  const [valueWithIsChecked, setValueWithIsChecked] = useState(new Map<string, boolean>());

  /// change handler
  const change = useCallback<ContextValue["onChange"]>(
    (value) => {
      setValueWithIsChecked((prev) => new Map(prev).set(value, !!prev.get(value)));
    },
    [setValueWithIsChecked]
  );

  /// context value
  const _contextValue = useMemo<ContextValue>(() => {
    return {
      value: valueWithIsChecked,
      onChange: change,
    };
  }, [valueWithIsChecked, change]);

  return <Context.Provider value={_contextValue}>{props.children}</Context.Provider>;
};

export default Group;
