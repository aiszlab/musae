import React, { type FocusEvent, useRef, useState } from "react";
import type { OtpInputProps } from "../../types/otp-input";
import { useInputEvents, useValue } from "./hooks";
import { Input } from "../input";
import type { InputRef } from "../../types/input";
import { clamp, useEvent } from "@aiszlab/relax";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { stringify } from "@aiszlab/relax/class-name";

const styles = $create({
  otp: {
    display: "flex",
    flexDirection: "row",
    gap: spacing.xxsmall,
  },

  input: {
    ":not(#\\#)": {
      width: `calc(1ch + ${spacing.medium} * 2)`,
    },
  },
});

const OtpInput = ({
  length = 6,
  onChange,
  value: _value,
  className,
  style,
  invalid,
}: OtpInputProps) => {
  const { value, change: _change } = useValue({ length, onChange, value: _value });
  const inputRefs = useRef(Array.from<InputRef | null>({ length }).fill(null));
  const [focusedAt, setFocusedAt] = useState(0);

  const refocus = useEvent((_foucsAt: number) => {
    const foucsAt = clamp(_foucsAt, 0, length - 1);

    // handle input, only select when prev input
    inputRefs.current[foucsAt]?.focus?.();

    if (_foucsAt < length) {
      inputRefs.current[foucsAt]?.select?.();
    }

    setFocusedAt(foucsAt);
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
    otp: $props(styles.otp),
    input: $props(styles.input),
  };

  return (
    <div
      className={stringify(styled.otp.className, className)}
      style={{
        ...styled.otp.style,
        ...style,
      }}
      tabIndex={-1}
    >
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
            invalid={invalid}
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
