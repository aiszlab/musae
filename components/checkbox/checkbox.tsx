import React, { ChangeEventHandler, useCallback, useContext, useId, useMemo } from "react";
import { StyledCheckbox } from "./styled";
import { useControlledState } from "@aiszlab/relax";
import Context from "./context";
import type { CheckboxProps } from "./types";
import { useClassNames } from "../config";
import { CheckboxClassToken, ComponentToken } from "../../utils/class-name";

const Checkbox = ({ value, ...props }: CheckboxProps) => {
  const contextValue = useContext(Context);
  const id = useId();
  const classNames = useClassNames(ComponentToken.Checkbox);

  /// use controlled state
  const [_isChecked, _setIsChecked] = useControlledState(!!props.checked);

  /// check current checkbox is checked
  /// if there is context value, use context value
  /// else use controlled state
  const isChecked = useMemo<boolean>(() => {
    if (!contextValue) return _isChecked;
    return !!contextValue.value?.get(value || id);
  }, [_isChecked, contextValue, id, value]);

  /// change handler
  /// if there is context value, just notify context
  /// else change the controlled state
  const change = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      contextValue?.onChange(value || id);
      _setIsChecked(event.target.checked);
    },
    [_setIsChecked, contextValue, id, value]
  );

  return (
    <StyledCheckbox
      type="checkbox"
      checked={isChecked}
      aria-checked={isChecked}
      onChange={change}
      className={classNames[CheckboxClassToken.Checkbox]}
    />
  );
};

export default Checkbox;
