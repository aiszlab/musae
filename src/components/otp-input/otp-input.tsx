import React, { useRef } from "react";
import type { OtpInputProps } from "./types";
import { useValue } from "./hooks";
import { Input, type InputRef } from "../input";
import { clamp, useEvent } from "@aiszlab/relax";

const OtpInput = ({ length = 6, onChange }: OtpInputProps) => {
  const { value, change: changeValue } = useValue({ length });
  const inputRefs = useRef(Array.from<InputRef | null>({ length }).fill(null));

  const change = useEvent((index: number, otp: string) => {
    const foucsAt = clamp(index + 1, 0, length - 1);
    // change current otp
    changeValue(index, otp);
    // foucs at next input
    inputRefs.current[foucsAt]?.focus?.();

    // onChange()
  });

  return (
    <div>
      {value.map((item, index) => {
        return (
          <Input
            value={item}
            maxLength={1}
            ref={(inputRef) => {
              inputRefs.current[index] = inputRef;
            }}
            onChange={(value) => change(index, value)}
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
