import React, { ChangeEventHandler, useCallback, useContext, useId, useMemo } from "react";
import { StyledWrapper } from "./styled";
import { useControlledState } from "@aiszlab/relax";
import Context from "./context";
import type { CheckboxProps } from "./types";

const Checkbox = (props: CheckboxProps) => {
  const contextValue = useContext(Context);
  const id = useId();

  /// use controlled state
  const [_isChecked, _setIsChecked] = useControlledState(!!props.checked);

  /// check current checkbox is checked
  /// if there is context value, use context value
  /// else use controlled state
  const isChecked = useMemo<boolean>(() => {
    if (contextValue) {
      return !!contextValue.value?.get(props.value || id);
    }
    return _isChecked;
  }, [contextValue?.value]);

  /// change handler
  /// if there is context value, just notify context
  /// else change the controlled state
  const change = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      if (contextValue) {
        contextValue.onChange(props.value || id);
        return;
      }
      _setIsChecked(event.target.checked);
    },
    [_setIsChecked, contextValue?.onChange]
  );

  return <StyledWrapper type="checkbox" checked={!!isChecked} aria-checked={!!isChecked} onChange={change} />;
};

export default Checkbox;
