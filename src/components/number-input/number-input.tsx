import React, { useMemo } from "react";
import { Input } from "../input";
import { useEvent, useFocus } from "@aiszlab/relax";
import { useValue } from "./hooks";
import type { NumberInputProps } from "musae/types/number-input";

const NumberInput = ({ value: __value, formatter: _formatter }: NumberInputProps) => {
  const [isFocused, focusProps] = useFocus();
  const { value: _value, change } = useValue({ value: __value });

  /// formatter
  const formatter = useEvent((value?: string) => {
    if (!_formatter) return _value;
    formatter(value);
  });

  const value = useMemo(() => {
    if (isFocused) {
      return _value;
    }
    return formatter(_value);
  }, [isFocused, formatter, _value]);

  return <Input type="number" value={value} onChange={change} {...focusProps} />;
};

export default NumberInput;
