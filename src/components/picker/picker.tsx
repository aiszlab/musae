import React, {
  useCallback,
  useRef,
  forwardRef,
  useImperativeHandle,
  type MouseEvent,
  type CSSProperties,
} from "react";
import { Popper } from "../popper";
import { useBoolean, useFocus, chain } from "@aiszlab/relax";
import { useEvents } from "./hooks";
import type { PickerProps, PickerRef } from "./types";
import { ComponentToken, PickerClassToken } from "../../utils/class-name";
import { useClassNames } from "../../hooks/use-class-names";
import * as stylex from "@stylexjs/stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import clsx from "clsx";
import { typography } from "../theme/theme";
import { styles as inputStyles } from "../input";
import { Context } from "./context";

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
    },
    ref
  ) => {
    const trigger = useRef<HTMLDivElement>(null);
    const [isOpen, { turnOff: close, toggle, turnOn: open }] = useBoolean();
    const classNames = useClassNames(ComponentToken.Picker);
    const theme = useTheme();
    const pickableRef = useRef<HTMLDivElement>(null);

    const onDropdownClick = useCallback((e: MouseEvent<HTMLDivElement>) => e.preventDefault(), []);
    const getDropdownWidth = useCallback(() => {
      if (!popupWidth) return void 0;
      if (!trigger.current) return void 0;
      return Math.max(trigger.current.getBoundingClientRect().width, popupWidth === "match" ? 0 : popupWidth);
    }, [popupWidth]);

    useImperativeHandle(ref, () => ({
      close,
    }));

    /// events
    const { blur, click } = useEvents({
      onBlur: close,
      onClick: chain(onClick, toggle),
    });
    const [isFocused, focusProps] = useFocus<HTMLDivElement>({
      onBlur: blur,
    });

    const styled = {
      picker: stylex.props(
        typography.body.medium,
        inputStyles.wrapper({ outlineColor: theme.colors[ColorToken.Outline] }),
        isFocused && inputStyles.focused({ outlineColor: theme.colors[ColorToken.Primary] })
      ),
      pickable: stylex.props(
        styles.pickable({
          minWidth: getDropdownWidth(),
        })
      ),
    };

    return (
      <Context.Provider value={{ open, isFocused, isOpen }}>
        <div
          className={clsx(
            classNames[PickerClassToken.Picker],
            {
              [classNames[PickerClassToken.Focused]]: isFocused,
            },
            className,
            styled.picker.className
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
        </div>

        <Popper
          trigger={trigger.current}
          open={isOpen}
          className={classNames[PickerClassToken.Dropdown]}
          // click on popper, keep select focused
          onMouseDown={onDropdownClick}
          onEntered={onPopperEntered}
          onExit={onPopperExite}
          onExited={onPopperExited}
        >
          <div
            ref={pickableRef}
            className={clsx(pickableClassName, styled.pickable.className)}
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
  }
);

export default Picker;
