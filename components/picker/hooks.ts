import { FocusEventHandler, MouseEventHandler, useCallback, useContext, useMemo } from "react";
import Context from "../config/context";
import { withPrefix } from "../../utils/class-name";
import clsx from "clsx";
import { Partialable } from "../../types/lib";

enum ClassName {
  Picker = "picker",
  Focused = "focused",
  Invalid = "invalid",
  Dropdown = "picker-dropdown",
}

/**
 * @description
 * class names
 */
export const useClassNames = () => {
  const { prefix } = useContext(Context);

  return useMemo(
    () => ({
      picker: withPrefix(prefix, ClassName.Picker),
      focused: withPrefix(prefix, ClassName.Focused),
      invalid: withPrefix(prefix, ClassName.Invalid),
      dropdown: withPrefix(prefix, ClassName.Dropdown),
    }),
    [prefix]
  );
};

/**
 * @description
 * style
 */
export const useStyles = (
  classNames: {
    picker: string;
  },
  {
    picker,
  }: {
    picker: Partialable<string>;
    isFocused: boolean;
  }
) => {
  return useMemo(
    () => ({
      picker: clsx([classNames.picker, picker]),
    }),
    [classNames.picker, picker]
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
