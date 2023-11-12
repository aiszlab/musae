import {
  type ChangeEventHandler,
  type Dispatch,
  type FocusEventHandler,
  type MouseEventHandler,
  type SetStateAction,
  useCallback,
  useContext,
  useMemo,
  RefObject,
} from "react";
import clsx from "clsx";
import Context from "../config/context";
import { withPrefix } from "../../utils/class-name";
import type { InputProps } from "./types";
import type { Partialable } from "../../types/lib";

enum ClassName {
  Input = "input",
  Wrapper = "input-wrapper",
  FocusedWrapper = "input-wrapper-focused",
  InvalidWrapper = "input-wrapper-invalid",
  Selection = "input-selection",
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
      selection: withPrefix(prefix, ClassName.Selection),
    }),
    [prefix]
  );
};

/**
 * @description
 * class name for input
 */
export const useStyles = ([className, isFocused, isInvalid]: [
  className: Partialable<string>,
  isFocused: boolean,
  isInvalid: Partialable<boolean>
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [className, isFocused, isInvalid, ...Object.values(classNames)]);

  return {
    wrapperClassName,
  };
};

/**
 * @description
 * use events for input
 */
export const useInputEvents = ([[_focus, _blur, _change], [onFocus, onBlur, onChange, onClick]]: [
  [_focus: () => void, _blur: () => void, _change: Dispatch<SetStateAction<Partialable<string>>>],
  [InputProps["onFocus"], InputProps["onBlur"], InputProps["onChange"], InputProps["onClick"]]
]) => {
  const focus = useCallback<FocusEventHandler<HTMLInputElement>>(
    (e) => {
      _focus();
      onFocus?.(e);
      e.stopPropagation();
    },
    [_focus, onFocus]
  );

  const blur = useCallback<FocusEventHandler<HTMLInputElement>>(
    (e) => {
      _blur();
      onBlur?.(e);
      e.stopPropagation();
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
      e.stopPropagation();
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

/**
 * @description
 * wrapper events
 */
export const useWrapperEvents = ([inputRef]: [RefObject<HTMLInputElement>]) => {
  /// focus
  const focus = useCallback(() => {
    inputRef.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /// blur
  const blur = useCallback(() => {
    inputRef.current?.blur();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /// click
  const click = useCallback(() => {
    inputRef.current?.click();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    focus,
    blur,
    click,
  };
};
