import React, { ChangeEventHandler, useCallback, useContext, useMemo } from "react";
import { Wrapper } from "./styled";
import { useControlledState } from "@aiszlab/relax";
import { CheckboxProps } from "./types";
import Context from "./context";

const Checkbox = (props: CheckboxProps) => {
  const contextValue = useContext(Context);

  const controlledIsChecked = useMemo(() => {
    if (props.isChecked !== void 0) {
      return props.isChecked;
    }

    if (contextValue?.value === void 0) {
      return void 0;
    }

    return contextValue.value === props.value;
  }, [props.isChecked, props.value, contextValue?.value]);

  const [isChecked, setIsChecked] = useControlledState(controlledIsChecked);

  /// change handler
  const change = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      setIsChecked(event.target.checked);
    },
    [setIsChecked]
  );

  return <Wrapper type="checkbox" checked={!!isChecked} aria-checked={!!isChecked} onChange={change} />;
};

export default Checkbox;
