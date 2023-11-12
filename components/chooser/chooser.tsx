import React, {
  type MouseEvent,
  useCallback,
  useRef,
  useMemo,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import { Popper } from "../popper";
import { useBoolean } from "@aiszlab/relax";
import { Input } from "../input";
import { useClassNames } from "./hooks";
import { StyledChooser, StyledOptions } from "./styled";
import InputContext from "../input/context";
import type { ChooserProps, ChooserRef } from "./types";
import type { ContextValue, InputRef } from "../input/types";
import type { PopperRef } from "../popper/types";

const InputProvider = InputContext.Provider;

const Chooser = forwardRef<ChooserRef, ChooserProps>(({ selections, options }, ref) => {
  const inputRef = useRef<InputRef>(null);
  const dropdownWidth = inputRef.current?.getBoundingClientRect().width;
  const { isOn: isVisible, toggle, turnOff: close } = useBoolean();
  const classNames = useClassNames();
  const popper = useRef<PopperRef>(null);

  const onDropdownClick = useCallback((e: MouseEvent<HTMLDivElement>) => e.preventDefault(), []);

  const inputContextValue = useMemo<ContextValue>(() => {
    return {
      selection: selections,
    };
  }, [selections]);

  useImperativeHandle(
    ref,
    () => ({
      close,
    }),
    [close]
  );

  // for selection change, force render for next tick
  useEffect(() => {
    popper.current?.update?.();
  }, [selections]);

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
        ref={popper}
      >
        <StyledOptions width={dropdownWidth}>{options}</StyledOptions>
      </Popper>
    </StyledChooser>
  );
});

export default Chooser;
