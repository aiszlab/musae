import React, { useRef, useCallback, useMemo } from "react";
import { Picker } from "../picker";
import { useOptions, useValue } from "./hooks";
import type { SelectProps, SelectorRef, ValueOrValues } from "../../types/select";
import { stringify } from "@aiszlab/relax/class-name";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import Selector from "./selector";
import Selections from "./selections";
import { useClassNames } from "../../hooks/use-class-names";
import type { PickerRef } from "../../types/picker";
import { CLASS_NAMES } from "./context";

const styles = $create({
  picked: {
    gap: spacing.xxxxxsmall,
    flexWrap: "wrap",
  },

  pickable: {
    padding: spacing.xxxxxsmall,
  },
});

const Select = <T extends ValueOrValues = ValueOrValues>({
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
  onBlur,
  invalid = false,
  placeholder,
  onClear,
}: SelectProps<T>) => {
  const ref = useRef<PickerRef>(null);
  const selectorRef = useRef<SelectorRef>(null);
  const close = useCallback(() => ref.current?.close(), []);
  const classNames = useClassNames(CLASS_NAMES);

  const { menuItems, readableOptions, search, searched, reset } = useOptions({
    options,
    onFilter,
    onSearch,
  });

  const {
    readableValues,
    onChange,
    onClear: _onClear,
  } = useValue({
    value,
    readableOptions,
    mode,
    close,
    reset,
    onChange: _onChange,
    isComplex: complex,
    onClear,
  });

  const click = () => {
    selectorRef.current?.focus();
  };

  const styled = {
    picker: $props(styles.picked),
    pickable: $props(styles.pickable),
  };

  const selectedKeys = useMemo(() => Array.from(readableValues.keys()), [readableValues]);

  return (
    <Picker
      ref={ref}
      pickable={<Selections items={menuItems} onSelect={onChange} selectedKeys={selectedKeys} />}
      className={stringify(classNames.select, className, styled.picker.className)}
      style={{
        ...styled.picker.style,
        ...style,
      }}
      onClick={click}
      pickableClassName={styled.pickable.className}
      pickableStyle={styled.pickable.style}
      onPopperExite={reset}
      invalid={invalid}
      onClear={!!onClear ? _onClear : void 0}
      {...(!searchable && {
        onBlur,
      })}
    >
      <Selector
        value={readableValues}
        mode={mode}
        searchable={searchable}
        ref={selectorRef}
        searched={searched}
        onSearch={search}
        onChange={onChange}
        {...(searchable && { onBlur })}
        placeholder={placeholder}
      />
    </Picker>
  );
};

export default Select;
