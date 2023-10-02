import React, { useCallback, useMemo } from "react";
import Context from "./context";
import { ContextValue, RadioGroupProps } from "./types";
import { useControlledState } from "@aiszlab/relax";

const Group = (props: RadioGroupProps) => {
  /// controlled value
  const [selectedValue, setSelectedValue] = useControlledState(props.value);

  /// value change handler
  const change = useCallback<ContextValue["onChange"]>(
    (value) => {
      setSelectedValue(value);
    },
    [setSelectedValue]
  );

  /// context value
  const contextValue = useMemo<ContextValue>(
    () => ({
      value: selectedValue,
      onChange: change,
      isDisabled: !!props.disabled,
    }),
    [selectedValue, change, props.disabled]
  );

  return <Context.Provider value={contextValue}>{props.children}</Context.Provider>;
};

export default Group;
