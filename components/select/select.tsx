import React, { useCallback, useMemo, useRef } from "react";
import { Popper } from "../popper";
import { useBoolean } from "@aiszlab/relax";
import { Input } from "../input";
import { useClassNames, useChildren } from "./hooks";
import { StyledSelector, StyledDropdownWrapper } from "./styled";
import { Empty } from "../empty";
import { Menu } from "../menu";
import type { SelectProps } from "./types";
import type { InputRef } from "../input/types";

const Select = <Value extends string | number>(props: SelectProps<Value>) => {
  const ref = useRef<InputRef>(null);
  const dropdownWidth = ref.current?.getBoundingClientRect().width;

  const { isOn: isVisible, turnOn: open, turnOff: close } = useBoolean();
  const classNames = useClassNames();
  const { menuItems, selected } = useChildren([props.options, props.value]);

  const onClick = useCallback((key: string) => {
    console.log("key======", key);
  }, []);

  const menu = useMemo(() => {
    if (!menuItems.length) {
      return <Empty />;
    }
    return <Menu items={menuItems} onClick={onClick} />;
  }, [menuItems, onClick]);

  return (
    <StyledSelector>
      <Input ref={ref} onFocus={open} readOnly onBlur={close} value={selected} />

      <Popper trigger={ref.current} isVisible={isVisible} className={classNames.dropdown}>
        <StyledDropdownWrapper
          width={dropdownWidth}
          onClick={(e) => {
            console.log("e=======", e);
            e.stopPropagation();
          }}
        >
          {menu}
        </StyledDropdownWrapper>
      </Popper>
    </StyledSelector>
  );
};

export default Select;
