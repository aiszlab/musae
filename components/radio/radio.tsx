import React, { useCallback, useContext, useMemo } from "react";
import { StyledRadio } from "./styled";
import Context from "./context";
import { RadioProps } from "./types";
import { useControlledState } from "@aiszlab/relax";
import { Context as ConfigContext } from "../config";
import { ComponentToken, RadioClassToken } from "../../utils/class-name";

const Radio = ({ children, value, ...props }: RadioProps) => {
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
      return value === contextValue.value;
    }
    return !!_isChecked;
  }, [contextValue, _isChecked, value]);

  /// change handler for radio
  /// radio do not support cancel checked
  const change = useCallback(() => {
    // if chekced, ignore
    if (isChecked) return;
    // if context is valid, change context state
    if (contextValue) {
      contextValue.change(value);
      return;
    }
    // change self state
    _setIsChecked(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked, contextValue, value, isDisabled]);

  return (
    <StyledRadio className={classNames[RadioClassToken.Radio]} disabled={isDisabled}>
      <input type="radio" aria-checked={isChecked} checked={isChecked} onChange={change} disabled={isDisabled} />

      {children && <span>{children}</span>}
    </StyledRadio>
  );
};

export default Radio;
