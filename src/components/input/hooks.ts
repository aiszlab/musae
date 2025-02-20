import {
  type ChangeEventHandler,
  type Dispatch,
  type FocusEventHandler,
  type MouseEventHandler,
  type SetStateAction,
  type RefObject,
  useCallback,
} from "react";
import type { InputProps } from "../../types/input";
import type { Nullable } from "@aiszlab/relax/types";

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
  setValue: Dispatch<SetStateAction<string>>;
}) => {
  const focus = useCallback<FocusEventHandler<HTMLInputElement>>(
    (e) => {
      onFocus?.(e);
      e.stopPropagation();
    },
    [onFocus],
  );

  const blur = useCallback<FocusEventHandler<HTMLInputElement>>(
    (e) => {
      onBlur?.(e);
      e.stopPropagation();
    },
    [onBlur],
  );

  // change handler
  const change = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      setValue(e.target.value);
      onChange?.(e.target.value);
    },
    [setValue, onChange],
  );

  // click handler
  const click = useCallback<MouseEventHandler<HTMLInputElement>>(
    (e) => {
      onClick?.(e);
      e.stopPropagation();
    },
    [onClick],
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
 * inputor events
 */
export const useInputorEvents = ({
  inputRef,
}: {
  inputRef: RefObject<Nullable<HTMLInputElement>>;
}) => {
  // click
  const click = useCallback(() => {
    inputRef.current?.focus();
  }, [inputRef]);

  return {
    click,
  };
};
