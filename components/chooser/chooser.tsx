import React, { type MouseEvent, useCallback, useRef, useMemo, forwardRef, useImperativeHandle } from "react";
import { Popper } from "../popper";
import { useBoolean } from "@aiszlab/relax";
import { Input } from "../input";
import { useClassNames } from "./hooks";
import { StyledChooser, StyledOptions } from "./styled";
import InputContext from "../input/context";
import type { ChooserProps, ChooserRef } from "./types";
import type { ContextValue, InputRef } from "../input/types";

const InputProvider = InputContext.Provider;

const Chooser = forwardRef<ChooserRef, ChooserProps>(({ selections, options }, ref) => {
  const inputRef = useRef<InputRef>(null);
  const dropdownWidth = inputRef.current?.getBoundingClientRect().width;
  const { isOn: isVisible, toggle, turnOff: close } = useBoolean();
  const classNames = useClassNames();

  const onDropdownClick = useCallback((e: MouseEvent<HTMLDivElement>) => e.preventDefault(), []);

  const inputContextValue = useMemo<ContextValue>(() => {
    return {
      inputed: selections,
    };
  }, [selections]);

  useImperativeHandle(
    ref,
    () => ({
      close,
    }),
    [close]
  );

  return (
    <StyledChooser>
      <InputProvider value={inputContextValue}>
        <Input ref={inputRef} onClick={toggle} readOnly onBlur={close} />
      </InputProvider>

      <Popper
        trigger={inputRef.current}
        isVisible={isVisible}
        className={classNames.dropdown}
        // click on popper, keep select focused
        onMouseDown={onDropdownClick}
      >
        <StyledOptions width={dropdownWidth}>{options}</StyledOptions>
      </Popper>
    </StyledChooser>
  );
});

export default Chooser;
