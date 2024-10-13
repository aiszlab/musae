import { useControlledState, useEvent } from "@aiszlab/relax";
import { type KeyboardEvent, useMemo } from "react";
import { Keyboard } from "../../utils/keyboard";
import type { Partialable } from "@aiszlab/relax/types";

/**
 * @description
 * use value
 */
export const useValue = ({
  length,
  onChange,
  value: _value,
}: {
  length: number;
  onChange: Partialable<(value: string) => void>;
  value?: string;
}) => {
  const [value, setValue] = useControlledState(_value, { defaultState: "" });
  const values = useMemo(
    () => Array.from<string[], string>({ length }, (_, index) => value.charAt(index)),
    [length, value],
  );

  const change = useEvent((index: number, otp: string) => {
    const changed = Array.from(values);
    changed[index] = otp;
    const changedValue = changed.join("");

    setValue(changedValue);
    onChange?.(changedValue);
  });

  return {
    value: values,
    change,
  };
};

/**
 * @description
 * events
 */
export const useInputEvents = ({
  refocus,
  focusedAt,
  value,
  changeValue,
}: {
  value: string[];
  refocus: (focusAt: number) => void;
  focusedAt: number;
  changeValue: (value: string) => void;
}) => {
  const keyDown = useEvent((e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case Keyboard.Backspace:
        e.preventDefault();
        changeValue("");
        refocus(focusedAt - 1);
        break;
      case Keyboard.Delete:
        e.preventDefault();
        changeValue("");
        break;
      case Keyboard.ArrowLeft:
        e.preventDefault();
        refocus(focusedAt - 1);
        break;
      case Keyboard.Space:
        e.preventDefault();
        break;
      case Keyboard.ArrowRight:
      case value[focusedAt]:
        e.preventDefault();
        refocus(focusedAt + 1);
        break;
      default:
        break;
    }
  });

  return {
    keyDown,
  };
};
