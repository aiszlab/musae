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
import { useBoolean, useFoucs } from "@aiszlab/relax";
import { useEvents } from "./hooks";
import type { PickerProps, PickerRef } from "./types";
import type { PopperRef } from "../popper/types";
import { ComponentToken, PickerClassToken } from "../../utils/class-name";
import Context from "./context";
import { useClassNames } from "../config";
import * as stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import clsx from "clsx";
import { BODY } from "../theme/theme";

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

  options: (backgroundColor: CSSProperties["backgroundColor"], minWidth: CSSProperties["minWidth"]) => ({
    marginBlock: spacing.xxsmall,
    borderRadius: spacing.small,
    backgroundColor,
    overflow: "auto",
    minWidth,
  }),
});

const Picker = forwardRef<PickerRef, PickerProps>(
  ({ pickable, picked, className, popupWidth = "match", ...props }, ref) => {
    const trigger = useRef<HTMLDivElement>(null);
    const [isVisible, { turnOff: close, toggle }] = useBoolean();

    const classNames = useClassNames(ComponentToken.Picker);
    const popper = useRef<PopperRef>(null);
    const theme = useTheme();

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
    const { blur, click } = useEvents({ onBlur: close, onClick: toggle });
    const [isFocused, focusProps] = useFoucs<HTMLInputElement>({
      onBlur: blur,
    });

    const styled = {
      picker: stylex.props(
        BODY.small,
        styles.picker(theme.colors[ColorToken.Outline]),
        isFocused && styles.focused(theme.colors[ColorToken.Primary])
      ),
      options: stylex.props(styles.options(theme.colors[ColorToken.Surface], dropdownWidthGetter())),
    };

    return (
      <>
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
          {...focusProps}
          onClick={click}
        >
          {picked}
        </div>

        <Popper
          trigger={trigger.current}
          open={isVisible}
          className={classNames[PickerClassToken.Dropdown]}
          // click on popper, keep select focused
          onMouseDown={onDropdownClick}
          ref={popper}
        >
          <div {...styled.options}>
            <Context.Provider
              value={{
                isVisible,
              }}
            >
              {pickable}
            </Context.Provider>
          </div>
        </Popper>
      </>
    );
  }
);

export default Picker;
