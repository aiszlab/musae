import React, { type FocusEvent, useRef, useState } from "react";
import type { OtpInputProps } from "./types";
import { useInputEvents, useValue } from "./hooks";
import { Input, type InputRef } from "../input";
import { clamp, useEvent } from "@aiszlab/relax";
import stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";

const styles = stylex.create({
  otp: {
    display: "flex",
    flexDirection: "row",
    gap: spacing.small,
  },

  input: {
    width: `calc(1ch + ${spacing.medium} * 2)`,
  },
});

const OtpInput = ({ length = 6, onChange, value: _value }: OtpInputProps) => {
  const { value, change: _change } = useValue({ length, onChange, value: _value });
  const inputRefs = useRef(Array.from<InputRef | null>({ length }).fill(null));
  const [focusedAt, setFocusedAt] = useState(0);

  const refocus = useEvent((foucsAt: number) => {
    const _foucsAt = clamp(foucsAt, 0, length - 1);
    // handle input
    inputRefs.current[_foucsAt]?.focus?.();
    inputRefs.current[_foucsAt]?.select?.();
    setFocusedAt(_foucsAt);
  });

  const changeValue = useEvent((value: string) => {
    _change(focusedAt, value);
  });

  const change = useEvent((otp: string) => {
    // value
    changeValue(otp);
    // focus
    refocus(focusedAt + 1);
  });

  const focus = useEvent((e: FocusEvent<HTMLInputElement>, index: number) => {
    setFocusedAt(index);
    e.target.select();
  });

  const { keyDown } = useInputEvents({
    refocus,
    focusedAt,
    value,
    changeValue,
  });

  const styled = {
    otp: stylex.props(styles.otp),
    input: stylex.props(styles.input),
  };

  return (
    <div className={styled.otp.className} style={styled.otp.style}>
      {value.map((item, index) => {
        return (
          <Input
            key={index}
            value={item}
            maxLength={1}
            className={styled.input.className}
            style={{
              ...styled.input.style,
              minWidth: 0,
            }}
            ref={(inputRef) => {
              inputRefs.current[index] = inputRef;
            }}
            onChange={change}
            onKeyDown={keyDown}
            onFocus={(e) => focus(e, index)}
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
