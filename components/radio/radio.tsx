import React, { useCallback, useContext, useMemo } from "react";
import { StyledInput, StyledWrapper } from "./styled";
import Context from "./context";
import { RadioProps } from "./types";
import { useControlledState } from "@aiszlab/relax";
import { Context as ConfigContext } from "../config";
import { ComponentToken, RadioClassToken } from "../../utils/class-name";

const Radio = (props: RadioProps) => {
  const contextValue = useContext(Context);
  const [_isChecked, _setIsChecked] = useControlledState(props.checked);
  const classNames = useContext(ConfigContext).classNames[ComponentToken.Radio];

  const isDisabled = useMemo(
    () => contextValue?.isDisabled ?? props.disabled ?? false,
    [contextValue?.isDisabled, props.disabled]
  );

  /// check current radio is checked
  /// if current radio is in provider, use provider context value first
  /// or not, use isChecked property
  /// otherwise, it control itself
  const isChecked = useMemo(() => {
    if (contextValue) {
      return props.value === contextValue.value;
    }
    return !!_isChecked;
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked, contextValue?.onChange, props.value, isDisabled]);

  return (
    <StyledWrapper className={classNames[RadioClassToken.Wrapper]} disabled={isDisabled}>
      <StyledInput type="radio" aria-checked={isChecked} checked={isChecked} onChange={change} disabled={isDisabled} />
      {props.children}
    </StyledWrapper>
  );
};

export default Radio;
