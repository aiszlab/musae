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
import type { PickerProps, PickerRef } from "musae/types/picker";
import { PickerClassToken } from "../../utils/class-name";
import { useClassNames } from "../../hooks/use-class-names";
import stylex from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { typography } from "../theme/theme";
import { styles as inputStyles } from "../input";
import { Context } from "./context";
import { stringify } from "@aiszlab/relax/class-name";

const styles = stylex.create({
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
      onPopperEntered,
      onPopperExited,
      onPopperExite,
      onBlur: _onBlur,
      invalid = false,
    },
    ref,
  ) => {
    const trigger = useRef<HTMLDivElement>(null);
    const [isOpen, { turnOff: close, toggle, turnOn: open }] = useBoolean();
    const classNames = useClassNames("picker");
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

    const styled = {
      picker: stylex.props(
        typography.body.medium,
        inputStyles.inputor({
          outlineColor: theme.colors.outline,
          focusedOutlineColor: theme.colors.primary,
        }),
        invalid &&
          inputStyles.invalid({
            outlineColor: theme.colors.error,
          }),
      ),
      pickable: stylex.props(
        styles.pickable({
          minWidth: getDropdownWidth(),
        }),
      ),
    };

    return (
      <Context.Provider value={{ open, isFocused, isOpen }}>
        <span
          className={stringify(
            classNames[PickerClassToken.Picker],
            {
              [classNames[PickerClassToken.Focused]]: isFocused,
            },
            className,
            styled.picker.className,
          )}
          style={{
            ...styled.picker.style,
            ...style,
          }}
          ref={trigger}
          tabIndex={-1}
          onClick={click}
          {...focusProps}
        >
          {children}
        </span>

        <Popper
          trigger={trigger.current}
          open={isOpen}
          className={classNames[PickerClassToken.Dropdown]}
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
