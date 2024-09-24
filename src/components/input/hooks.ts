import {
  type ChangeEventHandler,
  type Dispatch,
  type FocusEventHandler,
  type MouseEventHandler,
  type SetStateAction,
  type RefObject,
  useCallback,
} from "react";
import type { InputProps } from "musae/types/input";

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

  /// change handler
  const change = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      setValue(e.target.value);
      onChange?.(e.target.value);
    },
    [setValue, onChange],
  );

  /// click handler
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
 * wrapper events
 */
export const useWrapperEvents = (props: { inputRef: RefObject<HTMLInputElement> }) => {
  /// focus
  const focus = useCallback(() => {
    props.inputRef.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /// blur
  const blur = useCallback(() => {
    props.inputRef.current?.blur();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /// click
  const click = useCallback(() => {
    props.inputRef.current?.click();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    focus,
    blur,
    click,
  };
};
