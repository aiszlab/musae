import React, { useCallback, useMemo } from "react";
import Context from "./context";
import { ContextValue, GroupRenderProps } from "./types";
import { useControlledState } from "@aiszlab/relax";

const Group = (props: GroupRenderProps) => {
  /// controlled value
  const [selectedValue, setSelectedValue] = useControlledState(props.value);

  /// value change handler
  const change = useCallback(
    (value: string) => {
      setSelectedValue(value);
    },
    [setSelectedValue]
  );

  /// context value
  const contextValue = useMemo<ContextValue>(
    () => ({
      value: selectedValue,
      onChange: change,
    }),
    [selectedValue, change]
  );

  return <Context.Provider value={contextValue}>{props.children}</Context.Provider>;
};

export default Group;
