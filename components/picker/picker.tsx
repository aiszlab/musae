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
import { useClassNames, useStyles } from "./hooks";
import { StyledOptions } from "./styled";
import InputContext from "../input/context";
import type { PickerProps, PickerRef } from "./types";
import type { ContextValue, InputRef } from "../input/types";
import type { PopperRef } from "../popper/types";

const InputProvider = InputContext.Provider;

const Picker = forwardRef<PickerRef, PickerProps>(({ selections, options, className }, ref) => {
  const inputRef = useRef<InputRef>(null);
  const dropdownWidth = inputRef.current?.getBoundingClientRect().width;
  const { isOn: isVisible, toggle, turnOff: close } = useBoolean();
  const classNames = useClassNames();
  const popper = useRef<PopperRef>(null);
  const styles = useStyles(classNames, { picker: className });

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
    <div className={styles.picker}>
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
    </div>
  );
});

export default Picker;
