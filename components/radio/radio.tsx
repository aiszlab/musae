import React, { useCallback, useContext, useMemo } from "react";
import Wrapper from "./wrapper";
import Context from "./context";
import { RadioRenderProps } from "./types";

const Radio = ({ value }: RadioRenderProps) => {
  const contextValue = useContext(Context);

  const isSelected = useMemo(() => contextValue?.value === value, [value, contextValue?.value]);

  /// click handler for radio
  const onClick = useCallback(() => {
    contextValue?.onChange(value);
  }, [contextValue?.onChange, value]);

  return <Wrapper type="radio" aria-selected={isSelected} onClick={onClick} />;
};

export default Radio;
