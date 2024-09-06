import React, { useRef, useCallback } from "react";
import { Picker, type PickerRef } from "../picker";
import { useOptions, useValue } from "./hooks";
import { SelectClassToken } from "../../utils/class-name";
import type { SelectProps, SelectorRef, ValueOrValues } from "./types";
import { clsx } from "@aiszlab/relax";
import stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import Selector from "./selector";
import Selections from "./selections";
import { useClassNames } from "../../hooks/use-class-names";
import { ComponentToken } from "../../utils/component-token";

const styles = stylex.create({
  picked: {
    gap: spacing.xxsmall,
    flexWrap: "wrap",
  },

  pickable: {
    padding: spacing.xxsmall,
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
}: SelectProps<T>) => {
  const ref = useRef<PickerRef>(null);
  const selectorRef = useRef<SelectorRef>(null);
  const classNames = useClassNames(ComponentToken.Select);
  const close = useCallback(() => ref.current?.close(), []);

  const { menuItems, readableOptions, search, searched, reset } = useOptions({
    options,
    onFilter,
    onSearch,
  });

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
      pickable={
        <Selections
          items={menuItems}
          onSelect={onChange}
          selectedKeys={Array.from(readableValues.keys())}
        />
      }
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
