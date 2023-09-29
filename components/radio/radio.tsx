import React, { useCallback, useContext, useMemo } from "react";
import { StyledInput, StyledWrapper } from "./styled";
import Context from "./context";
import { RadioProps } from "./types";
import { useControlledState } from "@aiszlab/relax";

const Radio = (props: RadioProps) => {
  const contextValue = useContext(Context);
  const [_isChecked, _setIsChecked] = useControlledState(props.isChecked);

  /// check current radio is checked
  /// if current radio is in provider, use provider context value first
  /// or not, use isChecked property
  /// otherwise, it control itself
  const isChecked = useMemo(() => {
    if (contextValue) {
      return props.value === contextValue.value;
    }
    return !!_isChecked;
  }, [props.value, contextValue?.value, _isChecked]);

  /// change handler for radio
  /// radio do not support cancel checked
  const change = useCallback(() => {
    // if chekced, ignore
    if (isChecked) return;
    // if context is valid, change context state
    if (contextValue) {
      contextValue.onChange(props.value);
      return;
    }
    // change self state
    _setIsChecked(true);
  }, [isChecked, contextValue?.onChange, props.value]);

  return (
    <StyledWrapper className="musae-radio-wrapper">
      <StyledInput type="radio" aria-checked={isChecked} checked={isChecked} onChange={change} />
      {props.children}
    </StyledWrapper>
  );
};

export default Radio;
