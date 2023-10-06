import React, { useRef } from "react";
import { Popper } from "../popper";
import { useBoolean } from "@aiszlab/relax";
import { Input } from "../input";
import { type SelectProps } from "./types";
import { Menu } from "../menu";
import { useMenuItems } from "./hooks";

const Select = <Value extends string | number>(props: SelectProps<Value>) => {
  const ref = useRef<HTMLInputElement>(null);
  const { isOn: isVisible, turnOn: open, turnOff: close } = useBoolean();

  const menuItems = useMenuItems([props.options]);

  const _open = () => {};

  return (
    <>
      <Input ref={ref} type="text" onFocus={open} onBlur={close} />

      <Popper trigger={ref.current} isVisible={isVisible}>
        <Menu items={menuItems} />
      </Popper>
    </>
  );
};

export default Select;
