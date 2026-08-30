import styles from "./styles";
import React from "react";
import { Picker } from "../picker";
import type { SelectProps, ValueOrValues } from "../../types/select";
import { stringify } from "@aiszlab/relax/class-name";
import { props as $props } from "@stylexjs/stylex";
import Selector from "./selector";
import Selections from "./selections";
import { useClassNames } from "../../hooks/use-class-names";
import { CLASS_NAMES } from "./context";
import { useTagOptions } from "./hooks/use-tag-options";
import { useSelectedValue } from "./hooks/use-selected-value";
import { useOptions } from "./hooks/use-options";
import type { InputRef } from "../../types/input";

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
  disabled = false,
}: SelectProps<T>) => {
  const classNames = useClassNames(CLASS_NAMES);
  const searchable = _searchable || mode === "tags";

  const {
    menuItems: _menuItems,
    readableOptions: _readableOptions,
    search,
    keyword,
    clearKeyword,
    filter,
  } = useOptions({
    options,
    onFilter,
    onSearch,
  });

  const { readableValues, change, clear, selectedKeys } = useSelectedValue({
    value,
    readableOptions: _readableOptions,
    mode,
    clearKeyword,
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

  const styled = {
    pickable: $props(styles.select.pickable),
  };

  return (
    <Picker<InputRef>
      pickable={({ close, isOpen }) => (
        <Selections
          isOpen={isOpen}
          items={menuItems}
          onSelect={(key) => {
            change(key, close);
          }}
          selectedKeys={selectedKeys}
        />
      )}
      pickableClassName={styled.pickable.className}
      pickableStyle={styled.pickable.style}
      onPopperExite={clearKeyword}
    >
      {({ open, toggle, close, triggerRef }) => (
        <Selector
          className={stringify(classNames.select, className)}
          style={style}
          value={readableValues}
          mode={mode}
          searchable={searchable}
          ref={triggerRef}
          keyword={keyword}
          onSearch={(keyword) => {
            search(keyword);
          }}
          onChange={change}
          onBlur={onBlur}
          onClose={close}
          onOpen={open}
          onClear={onClear ? clear : void 0}
          placeholder={placeholder}
          disabled={disabled}
          invalid={invalid}
          onClick={() => {
            toggle();
          }}
        />
      )}
    </Picker>
  );
};

export default Select;
