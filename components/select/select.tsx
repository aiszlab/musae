import React, { FocusEvent, useCallback, useRef } from "react";
import { Popper } from "../popper";
import { useBoolean } from "@aiszlab/relax";
import { Input } from "../input";
import { InputRef, UsedInputProps } from "../input/types";

const Select = () => {
  const ref = useRef<InputRef>(null);
  const { isOn: isVisible, turnOn: open, turnOff: close } = useBoolean();

  return (
    <>
      <Input ref={ref} type="text" onFocus={open} onBlur={close} />

      <Popper trigger={ref.current?.wrapperRef} isVisible={isVisible}>
        <ul
          id="11111"
          role="listbox"
          onMouseDown={(e) => {
            e.preventDefault();
          }}
        >
          <li>12321</li>
          <li>222</li>
          <li>2333</li>
        </ul>
      </Popper>
    </>
  );
};

export default Select;
