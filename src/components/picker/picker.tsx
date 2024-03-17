import React, {
  type MouseEvent,
  useCallback,
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
  CSSProperties,
  useMemo,
} from "react";
import { Popper } from "../popper";
import { useBoolean, useFocus } from "@aiszlab/relax";
import { useEvents } from "./hooks";
import type { ContextValue, PickerProps, PickerRef } from "./types";
import type { PopperRef } from "../popper/types";
import { ComponentToken, PickerClassToken } from "../../utils/class-name";
import Context from "./context";
import { useClassNames } from "../config";
import * as stylex from "@stylexjs/stylex";
import { elevations, sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import clsx from "clsx";
import { typography } from "../theme/theme";
import { useFadeAnimate } from "./hooks";

const styles = stylex.create({
  picker: (borderColor: CSSProperties["borderColor"]) => ({
    minHeight: "36px",
    minWidth: sizes.none,
    width: 240,
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    cursor: "text",
    gap: spacing.xxsmall,

    // border
    borderColor,
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "4px",

    // layout
    margin: spacing.none,
    paddingBlock: spacing.xxsmall,
    paddingInline: spacing.medium,
  }),

  focused: (borderColor: CSSProperties["borderColor"]) => ({
    borderWidth: "2px",
    borderColor,
  }),

  invalid: (borderColor: CSSProperties["borderColor"]) => ({
    borderColor,
  }),

  pickable: (props: { backgroundColor: CSSProperties["backgroundColor"]; minWidth: CSSProperties["minWidth"] }) => ({
    marginBlock: spacing.xxsmall,
    borderRadius: spacing.small,
    backgroundColor: props.backgroundColor,
    overflow: "auto",
    minWidth: props.minWidth,
    boxShadow: elevations.small,
    paddingInline: spacing.xxsmall,
    opacity: 0,
  }),
});

const Picker = forwardRef<PickerRef, PickerProps>(
  ({ pickable, children, className, popupWidth = "match", ...props }, ref) => {
    const trigger = useRef<HTMLDivElement>(null);
    const [isVisible, { turnOff: close, toggle }] = useBoolean();
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

    useImperativeHandle(
      ref,
      () => ({
        close,
      }),
      [close]
    );

    /// for selection change, force render for next tick
    /// for why?
    /// if user select many choices, it will cause the input become larger
    useEffect(() => {
      popper.current?.update?.();
    }, [children]);

    /// events
    const { blur, click } = useEvents({ onBlur: close, onClick: toggle });
    const [isFocused, focusProps] = useFocus<HTMLDivElement>({
      onBlur: blur,
    });

    const styled = {
      picker: stylex.props(
        typography.body.small,
        styles.picker(theme.colors[ColorToken.Outline]),
        isFocused && styles.focused(theme.colors[ColorToken.Primary])
      ),
      pickable: stylex.props(
        styles.pickable({ backgroundColor: theme.colors[ColorToken.Surface], minWidth: getDropdownWidth() })
      ),
    };

    const contextValue = useMemo<ContextValue>(() => ({ isVisible, getDropdownWidth }), [isVisible, getDropdownWidth]);

    return (
      <Context.Provider value={contextValue}>
        <div
          className={clsx(classNames[PickerClassToken.Picker], className, styled.picker.className, {
            [classNames[PickerClassToken.Focused]]: isFocused,
          })}
          style={{
            ...styled.picker.style,
            ...props.style,
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
          onEntered={fadeIn}
          onExit={fadeOut}
        >
          <div ref={scope} className={styled.pickable.className} style={styled.pickable.style}>
            {pickable}
          </div>
        </Popper>
      </Context.Provider>
    );
  }
);

export default Picker;
