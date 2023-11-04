import React, { type MouseEvent, useCallback, useMemo, useRef } from "react";
import { Popper } from "../popper";
import { useBoolean } from "@aiszlab/relax";
import { Input } from "../input";
import { useClassNames, useOptions, useValue } from "./hooks";
import { StyledSelector, StyledDropdownWrapper } from "./styled";
import { Empty } from "../empty";
import { Menu } from "../menu";
import Context from "../input/context";
import type { SelectProps } from "./types";
import type { InputRef } from "../input/types";
import Chip from "../chip/chip";

const Provider = Context.Provider;

const Select = ({ mode, options, ...props }: SelectProps) => {
  const ref = useRef<InputRef>(null);
  const dropdownWidth = ref.current?.getBoundingClientRect().width;
  const { isOn: isVisible, toggle, turnOff: close } = useBoolean();
  const classNames = useClassNames();

  const { menuItems, valueWithLabel } = useOptions([options]);
  const { value, onChange } = useValue([props.value, mode, valueWithLabel, close]);

  const onDropdownClick = useCallback((e: MouseEvent<HTMLDivElement>) => e.preventDefault(), []);

  /// rendered dropdown menu
  const menu = useMemo(() => {
    if (!menuItems.length) {
      return <Empty />;
    }
    return <Menu items={menuItems} onClick={onChange} selectedKeys={[...value.keys()]} />;
  }, [menuItems, onChange, value]);

  /// context for input
  const inputContextValue = useMemo(() => {
    const inputed =
      mode === "multiple"
        ? [...value.entries()].map(([_value, label]) => (
            <Chip size="small" key={_value}>
              {label}
            </Chip>
          ))
        : [...value.values()].join(",");

    return {
      inputed,
    };
  }, [value, mode]);

  return (
    <StyledSelector>
      <Provider value={inputContextValue}>
        <Input ref={ref} onClick={toggle} readOnly onBlur={close} />
      </Provider>

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
