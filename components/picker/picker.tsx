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

const Picker = forwardRef<PickerRef, PickerProps>(({ pickable, picked, className, popupWidth = "match" }, ref) => {
  const trigger = useRef<HTMLDivElement>(null);
  const { isOn: isVisible, turnOff: close, toggle } = useBoolean();
  const { isOn: isFocused, turnOn: _focus, turnOff: _blur } = useBoolean();
  const classNames = useContext(Context).classNames[ComponentToken.Picker];
  const popper = useRef<PopperRef>(null);
  const styles = useStyles([className, isFocused]);

  const onDropdownClick = useCallback((e: MouseEvent<HTMLDivElement>) => e.preventDefault(), []);
  const dropdownWidthGetter = useCallback(() => {
    if (!popupWidth) return void 0;
    if (!trigger.current) return void 0;
    return Math.max(trigger.current.getBoundingClientRect().width, popupWidth === "match" ? 0 : popupWidth);
  }, [popupWidth]);

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
  }, [picked]);

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
        {picked}
      </StyledPicker>

      <Popper
        trigger={trigger.current}
        isVisible={isVisible}
        className={classNames[PickerClassToken.Dropdown]}
        // click on popper, keep select focused
        onMouseDown={onDropdownClick}
        ref={popper}
      >
        <StyledOptions widthGetter={dropdownWidthGetter}>{pickable}</StyledOptions>
      </Popper>
    </>
  );
});

export default Picker;
