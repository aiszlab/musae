import React, { type MouseEvent, useCallback, useMemo, useRef } from "react";
import { Popper } from "../popper";
import { useBoolean, useControlledState } from "@aiszlab/relax";
import { Input } from "../input";
import { useClassNames, useChildren } from "./hooks";
import { StyledSelector, StyledDropdownWrapper } from "./styled";
import { Empty } from "../empty";
import { Menu } from "../menu";
import type { SelectProps } from "./types";
import type { InputRef } from "../input/types";

const Select = (props: SelectProps) => {
  const ref = useRef<InputRef>(null);
  const dropdownWidth = ref.current?.getBoundingClientRect().width;

  const [value, setValue] = useControlledState(props.value);
  const { isOn: isVisible, toggle, turnOff: close } = useBoolean();
  const classNames = useClassNames();
  const { menuItems, selected } = useChildren([props.options, value]);

  const onDropdownClick = useCallback((e: MouseEvent<HTMLDivElement>) => e.preventDefault(), []);
  const onMenuClick = useCallback((key: string) => {
    // change value
    setValue(key);
    // after item selected, close dropdown
    close();
  }, []);

  const menu = useMemo(() => {
    if (!menuItems.length) {
      return <Empty />;
    }
    return <Menu items={menuItems} onClick={onMenuClick} />;
  }, [menuItems, onMenuClick]);

  return (
    <StyledSelector>
      <Input ref={ref} onClick={toggle} readOnly onBlur={close} value={selected} />

      <Popper
        trigger={ref.current}
        isVisible={isVisible}
        className={classNames.dropdown}
        // click on popper, keep select focused
        onMouseDown={onDropdownClick}
      >
        <StyledDropdownWrapper width={dropdownWidth}>{menu}</StyledDropdownWrapper>
      </Popper>
    </StyledSelector>
  );
};

export default Select;
