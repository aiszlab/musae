import React, { useMemo, useRef, useCallback, useContext } from "react";
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
import type { PickerProps } from "../picker/types";

const styles = stylex.create({
  picked: {
    gap: spacing.xxsmall,
    flexWrap: "wrap",
  },
});

const Select = ({ mode, searchable = false, onSearch, ...props }: SelectProps) => {
  const ref = useRef<PickerRef>(null);
  const classNames = useContext(Context).classNames[ComponentToken.Select];
  const close = useCallback(() => ref.current?.close(), []);
  /// options
  const { menuItems, readableOptions } = useOptions([props.options]);
  /// value
  const { value, onChange } = useValue({
    value: props.value,
    readableOptions,
    mode,
    close,
  });

  /// inputde value
  const picked = useMemo<PickerProps["children"]>(() => {
    // multiple value
    if (mode === "multiple") {
      const rendered = Array.from(value.entries()).map(([_value, label]) => (
        <Tag size="small" key={_value}>
          {label}
        </Tag>
      ));

      if (searchable) {
        return rendered.concat(<input onChange={(e) => onSearch?.(e.target.value)} />);
      }
      return rendered;
    }

    // single select value display
    // if searchable
    const rendered = Array.from(value.values()).join(",");
    if (searchable) {
      return ({ isFocused }) => (
        <input
          value={isFocused ? void 0 : rendered}
          placeholder={rendered}
          onChange={(e) => onSearch?.(e.target.value)}
        />
      );
    }
    return rendered;
  }, [value, mode, searchable, onSearch]);

  const styled = stylex.props(styles.picked);

  return (
    <Picker
      ref={ref}
      pickable={<Menu items={menuItems} onClick={onChange} selectedKeys={Array.from(value.keys())} />}
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
