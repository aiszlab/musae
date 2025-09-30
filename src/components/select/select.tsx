import React, { useRef, useCallback } from "react";
import { Picker } from "../picker";
import type { SelectProps, SelectorRef, ValueOrValues } from "../../types/select";
import { stringify } from "@aiszlab/relax/class-name";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import Selector from "./selector";
import Selections from "./selections";
import { useClassNames } from "../../hooks/use-class-names";
import type { PickerRef } from "../../types/picker";
import { CLASS_NAMES } from "./context";
import { useTagOptions } from "./hooks/use-tag-options";
import { useSelectedValue } from "./hooks/use-selected-value";
import { useOptions } from "./hooks/use-options";

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
  searchable: _searchable = false,
  onSearch,
  className,
  style,
  options = [],
  onFilter,
  complex = false,
  value,
  onChange,
  onBlur,
  invalid = false,
  placeholder,
  onClear,
}: SelectProps<T>) => {
  const ref = useRef<PickerRef>(null);
  const selectorRef = useRef<SelectorRef>(null);
  const close = useCallback(() => ref.current?.close(), []);
  const classNames = useClassNames(CLASS_NAMES);
  const searchable = _searchable || mode === "tags";

  const {
    menuItems: _menuItems,
    readableOptions: _readableOptions,
    search,
    keyword,
    reset,
    filter,
  } = useOptions({
    options,
    onFilter,
    onSearch,
    mode,
    value,
  });

  const { readableValues, change, clear, selectedKeys } = useSelectedValue({
    value,
    readableOptions: _readableOptions,
    mode,
    close,
    reset,
    onChange,
    complex,
    onClear,
  });

  const menuItems = useTagOptions({
    menuItems: _menuItems,
    options: _readableOptions,
    mode,
    values: readableValues,
    filter,
    keyword,
  });

  const click = () => {
    selectorRef.current?.focus();
  };

  const styled = {
    picker: $props(styles.picked),
    pickable: $props(styles.pickable),
  };

  return (
    <Picker
      ref={ref}
      pickable={<Selections items={menuItems} onSelect={change} selectedKeys={selectedKeys} />}
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
      onClear={onClear ? clear : void 0}
      {...(!searchable && {
        onBlur,
      })}
    >
      <Selector
        value={readableValues}
        mode={mode}
        searchable={searchable}
        ref={selectorRef}
        keyword={keyword}
        onSearch={search}
        onChange={change}
        {...(searchable && { onBlur })}
        placeholder={placeholder}
      />
    </Picker>
  );
};

export default Select;
