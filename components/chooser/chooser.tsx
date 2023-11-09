import React, { type MouseEvent, useCallback, useRef, useMemo } from "react";
import { Popper } from "../popper";
import { useBoolean } from "@aiszlab/relax";
import { Input } from "../input";
import { useClassNames } from "./hooks";
import { StyledOptions } from "./styled";
import InputContext from "../input/context";
import type { ChooserProps } from "./types";
import type { ContextValue, InputRef } from "../input/types";

const InputProvider = InputContext.Provider;

const Chooser = ({ selections, options }: ChooserProps) => {
  const ref = useRef<InputRef>(null);
  const dropdownWidth = ref.current?.getBoundingClientRect().width;
  const { isOn: isVisible, toggle, turnOff: close } = useBoolean();
  const classNames = useClassNames();

  const onDropdownClick = useCallback((e: MouseEvent<HTMLDivElement>) => e.preventDefault(), []);

  const inputContextValue = useMemo<ContextValue>(() => {
    return {
      inputed: selections,
    };
  }, [selections]);

  return (
    <div>
      <InputProvider value={inputContextValue}>
        <Input ref={ref} onClick={toggle} readOnly onBlur={close} />
      </InputProvider>

      <Popper
        trigger={ref.current}
        isVisible={isVisible}
        className={classNames.dropdown}
        // click on popper, keep select focused
        onMouseDown={onDropdownClick}
      >
        <StyledOptions width={dropdownWidth}>{options}</StyledOptions>
      </Popper>
    </div>
  );
};

export default Chooser;
