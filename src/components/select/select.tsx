import React, { useMemo, type ReactNode, useRef, useCallback, useContext, useEffect } from "react";
import { Tag } from "../tag";
import { Picker, type PickerRef } from "../picker";
import { Menu } from "../menu";
import { useOptions, useValue } from "./hooks";
import Context from "../config/context";
import { ComponentToken, SelectClassToken } from "../../utils/class-name";
import type { SelectProps } from "./types";
import clsx from "clsx";
import stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";

const styles = stylex.create({
  picked: {
    gap: spacing.xxsmall,
    flexWrap: "wrap",
  },
});

const Select = ({ mode, searchable = false, ...props }: SelectProps) => {
  const ref = useRef<PickerRef>(null);
  const classNames = useContext(Context).classNames[ComponentToken.Select];
  const close = useCallback(() => ref.current?.close(), []);
  /// options
  const { menuItems, readableOptions } = useOptions([props.options]);
  /// value
  const { value, onChange } = useValue([props.value, readableOptions, mode, close]);

  /// inputde value
  const picked = useMemo<ReactNode>(() => {
    // multiple value
    if (mode === "multiple") {
      return Array.from(value.entries()).map(([_value, label]) => (
        <Tag size="small" key={_value}>
          {label}
        </Tag>
      ));
    }
    // default display value
    return Array.from(value.values()).join(",");
  }, [value, mode]);

  /// options render
  const menu = useMemo(() => {
    return <Menu items={menuItems} onClick={onChange} selectedKeys={Array.from(value.keys())} />;
  }, [menuItems, onChange, value]);

  const styled = stylex.props(styles.picked);

  return (
    <Picker
      ref={ref}
      pickable={menu}
      className={clsx(classNames[SelectClassToken.Select], props.className, styled.className)}
      style={{
        ...styled.style,
        ...props.style,
      }}
    >
      {picked}
    </Picker>
  );
};

export default Select;
