import React, { useCallback, useMemo } from "react";
import Context from "./context";
import { ContextValue, RadioGroupProps } from "./types";
import { useControlledState } from "@aiszlab/relax";

const Group = ({ disabled = false, children, ...props }: RadioGroupProps) => {
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
      isDisabled: disabled,
    }),
    [value, change, disabled]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Group;
