import React, { ChangeEventHandler, useCallback, useContext, useMemo } from "react";
import { StyledCheckbox } from "./styled";
import { useControlledState } from "@aiszlab/relax";
import Context from "./context";
import type { CheckboxProps } from "./types";
import { useClassNames } from "../config";
import { CheckboxClassToken, ComponentToken } from "../../utils/class-name";
import clsx from "clsx";

const Checkbox = ({ value, className, style, children, ...props }: CheckboxProps) => {
  const contextValue = useContext(Context);
  const classNames = useClassNames(ComponentToken.Checkbox);

  const [_isChecked, _setIsChecked] = useControlledState(props.checked!, {
    defaultState: false,
  });

  /// check current checkbox is checked
  /// if there is context value, use context value
  /// else use controlled state
  const isChecked = useMemo<boolean>(() => {
    if (!contextValue) return _isChecked;
    return !!contextValue.value?.get(value);
  }, [_isChecked, contextValue, value]);

  /// change handler
  /// if there is context value, just notify context
  /// else change the controlled state
  const change = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      contextValue?.onChange(value);
      _setIsChecked(event.target.checked);
    },
    [_setIsChecked, contextValue, value]
  );

  return (
    <StyledCheckbox className={clsx(className, classNames[CheckboxClassToken.Checkbox])}>
      <input type="checkbox" style={style} checked={isChecked} aria-checked={isChecked} onChange={change} />
      {children && <span>{children}</span>}
    </StyledCheckbox>
  );
};

export default Checkbox;
