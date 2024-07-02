import React, { useRef, useCallback, useContext } from "react";
import { Picker, type PickerRef } from "../picker";
import { useOptions, useValue } from "./hooks";
import Context from "../config/context";
import { ComponentToken, SelectClassToken } from "../../utils/class-name";
import type { SelectProps, SelectorRef } from "./types";
import clsx from "clsx";
import stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import Selector from "./selector";
import Selections from "./selections";

const styles = stylex.create({
  picked: {
    gap: spacing.xxsmall,
    flexWrap: "wrap",
  },

  pickable: {
    paddingInline: spacing.xxsmall,
  },
});

const Select = ({
  mode,
  searchable = false,
  onSearch,
  className,
  style,
  options = [],
  onFilter,
  complex = false,
  value,
  onChange: _onChange,
}: SelectProps) => {
  const ref = useRef<PickerRef>(null);
  const selectorRef = useRef<SelectorRef>(null);
  const classNames = useContext(Context).classNames[ComponentToken.Select];
  const close = useCallback(() => ref.current?.close(), []);

  /// options
  const { menuItems, readableOptions, search, searched, reset } = useOptions({
    options,
    onFilter,
    onSearch,
  });
  /// value
  const { readableValues, onChange } = useValue({
    value,
    readableOptions,
    mode,
    close,
    reset,
    onChange: _onChange,
    isComplex: complex,
  });

  const click = () => {
    selectorRef.current?.focus();
  };
  const styled = {
    picker: stylex.props(styles.picked),
    pickable: stylex.props(styles.pickable),
  };

  return (
    <Picker
      ref={ref}
      pickable={<Selections items={menuItems} onSelect={onChange} selectedKeys={Array.from(readableValues.keys())} />}
      className={clsx(classNames[SelectClassToken.Select], className, styled.picker.className)}
      style={{
        ...styled.picker.style,
        ...style,
      }}
      onClick={click}
      pickableClassName={styled.pickable.className}
      pickableStyle={styled.pickable.style}
      onPopperExite={reset}
    >
      <Selector
        value={readableValues}
        mode={mode}
        searchable={searchable}
        ref={selectorRef}
        searched={searched}
        onSearch={search}
      />
    </Picker>
  );
};

export default Select;
