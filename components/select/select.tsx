import React, { useMemo, type ReactNode, useRef, useCallback } from "react";
import { Chip } from "../chip";
import { Picker, type PickerRef } from "../picker";
import { Menu } from "../menu";
import { useClassNames, useOptions, useValue } from "./hooks";
import type { SelectProps } from "./types";

const Select = ({ mode, ...props }: SelectProps) => {
  const ref = useRef<PickerRef>(null);
  const close = useCallback(() => ref.current?.close(), [ref]);
  const classNames = useClassNames();

  /// options
  const { menuItems, readableOptions } = useOptions([props.options]);

  /// value
  const { value, onChange } = useValue([props.value, readableOptions, mode, close]);

  /// inputde value
  const inputed = useMemo<ReactNode>(() => {
    // multiple value
    if (mode === "multiple") {
      return [...value.entries()].map(([_value, label]) => (
        <Chip size="small" key={_value}>
          {label}
        </Chip>
      ));
    }
    // default display value
    return [...value.values()].join(",");
  }, [value, mode]);

  /// options render
  const menu = useMemo(() => {
    return <Menu items={menuItems} onClick={onChange} selectedKeys={[...value.values()]} />;
  }, [menuItems, onChange, value]);

  return <Picker ref={ref} selections={inputed} options={menu} className={classNames.select} />;
};

export default Select;
