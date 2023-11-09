import React, { type MouseEvent, useCallback, useMemo, useRef, useContext } from "react";
import { Popper } from "../popper";
import { useBoolean } from "@aiszlab/relax";
import { Input } from "../input";
import { useClassNames } from "./hooks";
import { StyledSelector, StyledDropdownWrapper } from "./styled";
import InputContext from "../input/context";
import type { SelectProps } from "./types";
import type { InputRef } from "../input/types";
import Chip from "../chip/chip";
import SelectContext from "./context";

const InputProvider = InputContext.Provider;

const Select = ({ mode, ...props }: SelectProps) => {
  const ref = useRef<InputRef>(null);
  const dropdownWidth = ref.current?.getBoundingClientRect().width;
  const { isOn: isVisible, toggle, turnOff: close } = useBoolean();
  const classNames = useClassNames();

  const onDropdownClick = useCallback((e: MouseEvent<HTMLDivElement>) => e.preventDefault(), []);

  /// options
  // const { menuItems, readableOptions } = useOptions([options]);

  /// value
  // const { value, onChange } = useValue([props.value, readableOptions, mode, close]);

  // return {
  //   value: value,
  //   options: <Menu items={menuItems} onClick={onChange} selectedKeys={[...value.values()]} />,
  // };

  const { options, selections } = useContext(SelectContext);

  const { value, options } = useSelector({
    value: props.value,
    options: props.options,
    mode,
    close,
  });

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
      <InputProvider value={inputContextValue}>
        <Input ref={ref} onClick={toggle} readOnly onBlur={close} />
      </InputProvider>

      <Popper
        trigger={ref.current}
        isVisible={isVisible}
        className={classNames.dropdown}
        // click on popper, keep select focused
        onMouseDown={onDropdownClick}
      >
        <StyledDropdownWrapper width={dropdownWidth}>{options}</StyledDropdownWrapper>
      </Popper>
    </StyledSelector>
  );
};

export default Select;
