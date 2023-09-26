import React, { useCallback, useContext, useMemo } from "react";
import { StyledWrapper } from "./styled";
import Context from "./context";
import { RadioProps } from "./types";

const Radio = ({ value }: RadioProps) => {
  const contextValue = useContext(Context);

  console.log("contextValue======", contextValue);

  /// check current radio is checked
  /// if current radio is in provider, use provider context value first
  /// or not, use isChecked property
  /// otherwise, it control itself
  const isChecked = useMemo(() => {
    return contextValue?.value === value;
  }, [value, contextValue?.value]);

  /// change handler for radio
  const change = useCallback(() => {
    console.log("111")
    if (isChecked) return;
    contextValue?.onChange(value);
  }, [contextValue?.onChange, value, isChecked]);

  return <StyledWrapper type="radio" aria-checked={isChecked} checked={isChecked} onChange={change} />;
};

export default Radio;
