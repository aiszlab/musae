import Context from "./context";
import React, { useCallback, useMemo } from "react";
import type { ContextValue, CheckboxGroupProps } from "./types";
import { useControlledState, toggle } from "@aiszlab/relax";

const Group = ({ value: controlledValue, children, onChange, disabled = false }: CheckboxGroupProps) => {
  const [_value, setValue] = useControlledState(controlledValue!, {
    defaultState: [],
  });

  const value = useMemo(() => new Set(_value), [_value]);

  // change handler
  const change = useCallback<ContextValue["change"]>(
    (key, isChecked) => {
      const checkedKeys = new Set(value);

      if (isChecked) {
        checkedKeys.add(key);
      } else {
        checkedKeys.delete(key);
      }

      const _checkedKeys = Array.from(checkedKeys);
      onChange?.(_checkedKeys);
      setValue(_checkedKeys);
    },
    [setValue, value],
  );

  // context value
  const contextValue = useMemo<ContextValue>(() => {
    return {
      value,
      change,
      disabled,
    };
  }, [value, change, disabled]);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Group;
