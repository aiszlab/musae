import React, { useCallback, useMemo } from "react";
import Context from "./context";
import { ContextValue, RadioGroupProps } from "./types";
import { useControlledState } from "@aiszlab/relax";

const Group = (props: RadioGroupProps) => {
  /// controlled value
  const [value, setValue] = useControlledState(props.value);

  /// value change handler
  const change = useCallback<ContextValue["change"]>(
    (value) => {
      setValue(value);
    },
    [setValue]
  );

  /// context value
  const contextValue = useMemo<ContextValue>(
    () => ({
      value,
      change,
      isDisabled: !!props.disabled,
    }),
    [value, change, props.disabled]
  );

  return <Context.Provider value={contextValue}>{props.children}</Context.Provider>;
};

export default Group;
