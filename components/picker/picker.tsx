import React, {
  type MouseEvent,
  useCallback,
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useContext,
} from "react";
import { Popper } from "../popper";
import { useBoolean } from "@aiszlab/relax";
import { useEvents, useStyles } from "./hooks";
import { StyledOptions, StyledPicker } from "./styled";
import type { PickerProps, PickerRef } from "./types";
import type { PopperRef } from "../popper/types";
import Context from "../config/context";
import { ComponentToken, PickerClassToken } from "../../utils/class-name";

const Picker = forwardRef<PickerRef, PickerProps>(({ selections, options, className }, ref) => {
  const trigger = useRef<HTMLDivElement>(null);
  const dropdownWidth = trigger.current?.getBoundingClientRect().width;
  const { isOn: isVisible, turnOff: close, toggle } = useBoolean();
  const { isOn: isFocused, turnOn: _focus, turnOff: _blur } = useBoolean();
  const classNames = useContext(Context).classNames[ComponentToken.Picker];
  const popper = useRef<PopperRef>(null);
  const styles = useStyles([className, isFocused]);

  const onDropdownClick = useCallback((e: MouseEvent<HTMLDivElement>) => e.preventDefault(), []);

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

  /// events
  const { blur, click } = useEvents([[_blur], [close, toggle]]);

  return (
    <>
      <StyledPicker
        className={styles.picker}
        ref={trigger}
        tabIndex={-1}
        onFocus={_focus}
        onBlur={blur}
        onClick={click}
      >
        {selections}
      </StyledPicker>

      <Popper
        trigger={trigger.current}
        isVisible={isVisible}
        className={classNames[PickerClassToken.Dropdown]}
        // click on popper, keep select focused
        onMouseDown={onDropdownClick}
        ref={popper}
      >
        <StyledOptions width={dropdownWidth}>{options}</StyledOptions>
      </Popper>
    </>
  );
});

export default Picker;
