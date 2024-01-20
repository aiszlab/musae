import React, { useMemo, type ReactNode, useRef, useCallback, useContext } from "react";
import { Chip } from "../chip";
import { Picker, type PickerRef } from "../picker";
import { Menu } from "../menu";
import { useOptions, useValue } from "./hooks";
import Context from "../config/context";
import { ComponentToken, SelectClassToken } from "../../utils/class-name";
import type { SelectProps } from "./types";
import clsx from "clsx";

const Select = ({ mode, ...props }: SelectProps) => {
  const ref = useRef<PickerRef>(null);
  const close = useCallback(() => ref.current?.close(), [ref]);
  const classNames = useContext(Context).classNames[ComponentToken.Select];

  /// options
  const { menuItems, readableOptions } = useOptions([props.options]);

  /// value
  const { value, onChange } = useValue([props.value, readableOptions, mode, close]);

  /// inputde value
  const picked = useMemo<ReactNode>(() => {
    // multiple value
    if (mode === "multiple") {
      return Array.from(value.entries()).map(([_value, label]) => (
        <Chip size="small" key={_value}>
          {label}
        </Chip>
      ));
    }
    // default display value
    return Array.from(value.values()).join(",");
  }, [value, mode]);

  /// options render
  const menu = useMemo(() => {
    return <Menu items={menuItems} onClick={onChange} selectedKeys={Array.from(value.keys())} />;
  }, [menuItems, onChange, value]);

  return (
    <Picker
      ref={ref}
      picked={picked}
      pickable={menu}
      className={clsx(classNames[SelectClassToken.Select], props.className)}
      style={props.style}
    />
  );
};

export default Select;
