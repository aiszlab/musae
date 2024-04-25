import React, {
  type MouseEvent,
  useCallback,
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
  CSSProperties,
} from "react";
import { Popper } from "../popper";
import { useBoolean, useEvent, useFocus, chain } from "@aiszlab/relax";
import { useEvents } from "./hooks";
import type { PickerProps, PickerRef } from "./types";
import type { PopperRef } from "../popper/types";
import { ComponentToken, PickerClassToken } from "../../utils/class-name";
import { useClassNames } from "../config";
import * as stylex from "@stylexjs/stylex";
import { elevations, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import clsx from "clsx";
import { typography } from "../theme/theme";
import { useFadeAnimate } from "./hooks";
import { styles as inputStyles } from "../input";
import { Context } from "./context";

const styles = stylex.create({
  pickable: (props: { backgroundColor: CSSProperties["backgroundColor"]; minWidth: CSSProperties["minWidth"] }) => ({
    marginBlock: spacing.xxsmall,
    borderRadius: spacing.small,
    backgroundColor: props.backgroundColor,
    overflow: "auto",
    minWidth: props.minWidth,
    boxShadow: elevations.small,

    // initial style, for animation
    opacity: 0,
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
      onPopperEntered,
      onPopperExited,
      onClick,
      pickableClassName,
      pickableStyle,
    },
    ref
  ) => {
    const trigger = useRef<HTMLDivElement>(null);
    const [isVisible, { turnOff: close, toggle, turnOn: open }] = useBoolean();
    const classNames = useClassNames(ComponentToken.Picker);
    const popper = useRef<PopperRef>(null);
    const theme = useTheme();
    const { fadeIn, fadeOut, scope } = useFadeAnimate();

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

    /// for selection change, force render for next tick
    /// for why?
    /// if user select many choices, it will cause the input become larger
    useEffect(() => {
      popper.current?.update?.();
    }, [children]);

    const styled = {
      picker: stylex.props(
        typography.body.small,
        inputStyles.wrapper({ outlineColor: theme.colors[ColorToken.Outline] }),
        isFocused && inputStyles.focused({ outlineColor: theme.colors[ColorToken.Primary] })
      ),
      pickable: stylex.props(
        styles.pickable({
          backgroundColor: theme.colors[ColorToken.SurfaceContainerLowest],
          minWidth: getDropdownWidth(),
        })
      ),
    };

    const entered = useEvent(async () => {
      await fadeIn();
      onPopperEntered?.();
    });

    return (
      <Context.Provider value={{ open, isFocused }}>
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
          ref={popper}
          trigger={trigger.current}
          open={isVisible}
          className={classNames[PickerClassToken.Dropdown]}
          // click on popper, keep select focused
          onMouseDown={onDropdownClick}
          onEntered={entered}
          onExit={fadeOut}
          onExited={onPopperExited}
        >
          <div
            ref={scope}
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
