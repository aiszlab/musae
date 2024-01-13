import { FocusEventHandler, MouseEventHandler, useCallback, useContext, useMemo } from "react";
import Context from "../config/context";
import clsx from "clsx";
import { ComponentToken, PickerClassToken } from "../../utils/class-name";
import type { PickerProps } from "./types";

/**
 * @description
 * style
 */
export const useStyles = ([className, isFocused]: [PickerProps["className"], boolean]) => {
  const classNames = useContext(Context).classNames[ComponentToken.Picker];

  return useMemo(
    () => ({
      picker: clsx([
        classNames[PickerClassToken.Picker],
        className,
        {
          [classNames[PickerClassToken.Focused]]: isFocused,
        },
      ]),
    }),
    [classNames, className, isFocused]
  );
};

/**
 * @description
 * picker events
 */
/**
 * @description
 * use events for input
 */
export const useEvents = ([[_blur], [onBlur, onClick]]: [
  [_blur: VoidFunction],
  [FocusEventHandler<HTMLDivElement>, MouseEventHandler<HTMLInputElement>]
]) => {
  const blur = useCallback<FocusEventHandler<HTMLInputElement>>(
    (e) => {
      _blur();
      onBlur?.(e);
      e.stopPropagation();
    },
    [_blur, onBlur]
  );

  /// click handler
  const click = useCallback<typeof onClick>(
    (e) => {
      onClick?.(e);
      e.stopPropagation();
    },
    [onClick]
  );

  return {
    blur,
    click,
  };
};
