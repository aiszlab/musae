import {
  type ChangeEventHandler,
  type Dispatch,
  type FocusEventHandler,
  type MouseEventHandler,
  type SetStateAction,
  useCallback,
  useContext,
  useMemo,
} from "react";
import clsx from "clsx";
import Context from "../config/context";
import { withPrefix } from "../../utils/class-name";
import type { InputProps } from "./types";

enum ClassName {
  Wrapper = "input-wrapper",
  FocusedWrapper = "input-wrapper-focused",
  InvalidWrapper = "input-wrapper-invalid",
  Input = "input",
  InputLabel = "input-label",
}

/**
 * @description
 * class name with prefix
 */
export const useClassNames = () => {
  const { prefix } = useContext(Context);

  return useMemo(
    () => ({
      wrapper: withPrefix(prefix, ClassName.Wrapper),
      focusedWrapper: withPrefix(prefix, ClassName.FocusedWrapper),
      invalidWrapper: withPrefix(prefix, ClassName.InvalidWrapper),
      input: withPrefix(prefix, ClassName.Input),
      inputLabel: withPrefix(prefix, ClassName.InputLabel),
    }),
    [prefix]
  );
};

/**
 * @description
 * class name for input
 */
export const useStyles = ([className, isFocused, isInvalid]: [
  className: string | undefined,
  isFocused: boolean,
  isInvalid: boolean | undefined
]) => {
  const classNames = useClassNames();

  /// wrapper
  const wrapperClassName = useMemo(() => {
    return clsx([
      classNames.wrapper,
      className,
      {
        [classNames.focusedWrapper]: isFocused,
        [classNames.invalidWrapper]: isInvalid,
      },
    ]);
  }, [className, isFocused, isInvalid, ...Object.values(classNames)]);

  return {
    wrapperClassName,
  };
};

/**
 * @description
 * use events for input
 */
export const useEvents = ([[_focus, _blur, _change], [onFocus, onBlur, onChange, onClick]]: [
  [_focus: () => void, _blur: () => void, _change: Dispatch<SetStateAction<string | undefined>>],
  [InputProps["onFocus"], InputProps["onBlur"], InputProps["onChange"], InputProps["onClick"]]
]) => {
  const focus = useCallback<FocusEventHandler<HTMLInputElement>>(
    (e) => {
      _focus();
      onFocus?.(e);
    },
    [_focus, onFocus]
  );

  const blur = useCallback<FocusEventHandler<HTMLInputElement>>(
    (e) => {
      _blur();
      onBlur?.(e);
    },
    [_blur, onBlur]
  );

  /// change handler
  const change = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      _change(e.target.value);
      onChange?.(e.target.value);
    },
    [_change, onChange]
  );

  /// click handler
  const click = useCallback<MouseEventHandler<HTMLInputElement>>(
    (e) => {
      onClick?.(e);
    },
    [onClick]
  );

  return {
    focus,
    blur,
    change,
    click,
  };
};
