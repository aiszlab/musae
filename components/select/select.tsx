import React, { useMemo, useRef } from "react";
import { Popper } from "../popper";
import { useBoolean } from "@aiszlab/relax";
import { Input } from "../input";
import { type SelectProps } from "./types";
import { Menu } from "../menu";
import { useClassNames, useMenuItems } from "./hooks";
import { StyledSelector, StyledDropdownWrapper } from "./styled";
import type { InputRef } from "../input/types";
import { Empty } from "../empty";

const Select = <Value extends string | number>(props: SelectProps<Value>) => {
  const ref = useRef<InputRef>(null);
  const { isOn: isVisible, turnOn: open, turnOff: close } = useBoolean();
  const classNames = useClassNames();

  const menuItems = useMenuItems([props.options]);

  const _child = useMemo(() => {
    if (!menuItems.length) {
      return <Empty />;
    }
    return <Menu items={menuItems} />;
  }, []);

  return (
    <StyledSelector>
      <Input ref={ref} onFocus={open} onBlur={close} readOnly />

      <Popper trigger={ref.current} isVisible={isVisible} className={classNames.dropdown}>
        <StyledDropdownWrapper width={ref.current?.getBoundingClientRect().width}>{_child}</StyledDropdownWrapper>
      </Popper>
    </StyledSelector>
  );
};

export default Select;
