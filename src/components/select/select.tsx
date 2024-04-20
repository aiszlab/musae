import React, { useRef, useCallback, useContext } from "react";
import { Picker, type PickerRef } from "../picker";
import { Menu } from "../menu";
import { useOptions, useValue } from "./hooks";
import Context from "../config/context";
import { ComponentToken, SelectClassToken } from "../../utils/class-name";
import type { SelectProps, SelectorRef } from "./types";
import clsx from "clsx";
import stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import Selector from "./selector";

const styles = stylex.create({
  picked: {
    gap: spacing.xxsmall,
    flexWrap: "wrap",
  },
});

const Select = ({ mode, searchable = false, onSearch, ...props }: SelectProps) => {
  const ref = useRef<PickerRef>(null);
  const selectorRef = useRef<SelectorRef>(null);
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

  const click = () => {
    selectorRef.current?.focus();
  };
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
      onClick={click}
    >
      <Selector value={value} mode={mode} searchable={searchable} ref={selectorRef} />
    </Picker>
  );
};

export default Select;
