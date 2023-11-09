import React, { useMemo, type ReactNode, useRef, useCallback } from "react";
import { Chip } from "../chip";
import { Chooser, useClassNames as useChooserClassNames, ChooserRef } from "../chooser";
import { Menu } from "../menu";
import { useOptions, useValue } from "./hooks";
import type { SelectProps } from "./types";

const Select = ({ mode, ...props }: SelectProps) => {
  const ref = useRef<ChooserRef>(null);
  const close = useCallback(() => ref.current?.close(), [ref]);
  const chooserClassNames = useChooserClassNames();

  /// options
  const { menuItems, readableOptions } = useOptions([props.options]);

  /// value
  const { value, onChange } = useValue([props.value, readableOptions, mode, close]);

  /// inputde value
  const inputed = useMemo<ReactNode>(() => {
    // multiple value
    if (mode === "multiple") {
      return [...value.entries()].map(([_value, label]) => (
        <Chip className={chooserClassNames.chosenItem} size="small" key={_value}>
          {label}
        </Chip>
      ));
    }
    // default display value
    return [...value.values()].join(",");
  }, [value, mode, chooserClassNames.chosenItem]);

  /// options render
  const menu = useMemo(() => {
    return <Menu items={menuItems} onClick={onChange} selectedKeys={[...value.values()]} />;
  }, [menuItems, onChange, value]);

  return <Chooser ref={ref} selections={inputed} options={menu} />;
};

export default Select;
