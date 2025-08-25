import React, {
  useCallback,
  useRef,
  forwardRef,
  useImperativeHandle,
  type MouseEvent,
  type CSSProperties,
  type FocusEvent,
} from "react";
import { Popper } from "../popper";
import { useBoolean, useFocus, useEvent } from "@aiszlab/relax";
import type { PickerProps, PickerRef } from "../../types/picker";
import { useClassNames } from "../../hooks/use-class-names";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { styles as inputStyles } from "../input";
import { CLASS_NAMES, Context } from "./context";
import { stringify } from "@aiszlab/relax/class-name";
import { Close } from "../icon/icons";
import { $body } from "../theme/theme";

const styles = $create({
  pickable: (props: { minWidth: CSSProperties["minWidth"] }) => ({
    minWidth: props.minWidth,
  }),
});

const Picker = forwardRef<PickerRef, PickerProps>(
  (
    {
      pickable,
      className,
      popupWidth = "match",
      style,
      children,
      onClick,
      pickableClassName,
      pickableStyle,
      onPopperEnter,
      onPopperEntered,
      onPopperExited,
      onPopperExite,
      onBlur: _onBlur,
      invalid = false,
      onClear,
    },
    ref,
  ) => {
    const trigger = useRef<HTMLDivElement>(null);
    const [isOpen, { turnOff: close, toggle, turnOn: open }] = useBoolean();
    const classNames = useClassNames(CLASS_NAMES);
    const theme = useTheme();
    const pickableRef = useRef<HTMLDivElement>(null);

    const getDropdownWidth = useCallback(() => {
      if (!popupWidth) return void 0;
      if (!trigger.current) return void 0;
      return Math.max(
        trigger.current.getBoundingClientRect().width,
        popupWidth === "match" ? 0 : popupWidth,
      );
    }, [popupWidth]);

    useImperativeHandle(ref, () => ({
      close,
    }));

    const click = useEvent((event: MouseEvent<HTMLSpanElement>) => {
      event.stopPropagation();
      onClick?.(event);
      toggle();
    });

    const onBlur = useEvent((e: FocusEvent<HTMLSpanElement>) => {
      e.stopPropagation();
      _onBlur?.(e);
      close();
    });

    const [isFocused, focusProps] = useFocus<HTMLDivElement>({
      onBlur,
    });

    const onDropdownClick = useCallback((e: MouseEvent<HTMLDivElement>) => e.preventDefault(), []);

    const clear = useEvent((event: MouseEvent) => {
      event.stopPropagation();
      onClear?.();
    });

    const styled = {
      picker: $props($body.medium, inputStyles.inputor, invalid && inputStyles.invalid),
      pickable: $props(
        styles.pickable({
          minWidth: getDropdownWidth(),
        }),
      ),
    };

    return (
      <Context.Provider value={{ open, isFocused, isOpen }}>
        <span
          className={stringify(
            classNames.picker,
            isFocused && classNames.focused,
            className,
            styled.picker.className,
          )}
          style={{
            ...styled.picker.style,
            ...style,
            "--color-outline": theme.colors.outline,
            "--color-primary": theme.colors.primary,
            "--color-error": theme.colors.error,
          }}
          ref={trigger}
          tabIndex={-1}
          onClick={click}
          {...focusProps}
        >
          {children}

          {!!onClear && <Close onClick={clear} />}
        </span>

        <Popper
          trigger={trigger.current}
          open={isOpen}
          className={classNames.dropdown}
          onEnter={onPopperEnter}
          onEntered={onPopperEntered}
          onExit={onPopperExite}
          onExited={onPopperExited}
          // click on popper, keep select focused
          onMouseDown={onDropdownClick}
        >
          <div
            ref={pickableRef}
            className={stringify(pickableClassName, styled.pickable.className)}
            style={{
              ...styled.pickable.style,
              ...pickableStyle,
            }}
          >
            {pickable}
          </div>
        </Popper>
      </Context.Provider>
    );
  },
);

export default Picker;
