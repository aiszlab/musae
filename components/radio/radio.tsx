import React, { useCallback, useContext, useMemo } from "react";
import { Wrapper } from "./styled";
import Context from "./context";
import { RadioProps } from "./types";

const Radio = ({ value }: RadioProps) => {
  const contextValue = useContext(Context);

  const isChecked = useMemo(() => contextValue?.value === value, [value, contextValue?.value]);

  /// change handler for radio
  const change = useCallback(() => {
    if (isChecked) return;
    contextValue?.onChange(value);
  }, [contextValue?.onChange, value, isChecked]);

  return <Wrapper type="radio" aria-checked={isChecked} checked={isChecked} onChange={change} />;
};

export default Radio;
