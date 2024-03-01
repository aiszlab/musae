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
import type { InputProps } from "./types";
import type { Partialable } from "@aiszlab/relax/types";
import { ComponentToken, InputClassToken } from "../../utils/class-name";

/**
 * @description
 * class name for input
 */
export const useStyles = ([className, isFocused, isInvalid]: [
  className: Partialable<string>,
  isFocused: boolean,
  isInvalid: Partialable<boolean>
]) => {
  const classNames = useContext(Context).classNames[ComponentToken.Input];

  /// wrapper class name
  const wrapper = useMemo(() => {
    return clsx([
      classNames[InputClassToken.Wrapper],
      className,
      {
        [classNames[InputClassToken.Focused]]: isFocused,
        [classNames[InputClassToken.Invalid]]: isInvalid,
      },
    ]);
  }, [className, classNames, isFocused, isInvalid]);

  return {
    wrapper,
  };
};

/**
 * @description
 * use events for input
 */
export const useInputEvents = ({
  setValue,
  onBlur,
  onChange,
  onClick,
  onFocus,
}: Pick<InputProps, "onFocus" | "onBlur" | "onChange" | "onClick"> & {
  setValue: Dispatch<SetStateAction<Partialable<string>>>;
}) => {
  const focus = useCallback<FocusEventHandler<HTMLInputElement>>(
    (e) => {
      onFocus?.(e);
      e.stopPropagation();
    },
    [onFocus]
  );

  const blur = useCallback<FocusEventHandler<HTMLInputElement>>(
    (e) => {
      onBlur?.(e);
      e.stopPropagation();
    },
    [onBlur]
  );

  /// change handler
  const change = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      setValue(e.target.value);
      onChange?.(e.target.value);
    },
    [setValue, onChange]
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
