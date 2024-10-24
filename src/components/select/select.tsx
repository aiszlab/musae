import React, { useRef, useCallback, useMemo } from "react";
import { Picker } from "../picker";
import { useOptions, useValue } from "./hooks";
import { SelectClassToken } from "../../utils/class-name";
import type { SelectProps, SelectorRef, ValueOrValues } from "musae/types/select";
import { clsx } from "@aiszlab/relax";
import stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import Selector from "./selector";
import Selections from "./selections";
import { useClassNames } from "../../hooks/use-class-names";
import type { PickerRef } from "musae/types/picker";

const styles = stylex.create({
  picked: {
    gap: spacing.xxxsmall,
    flexWrap: "wrap",
  },

  pickable: {
    padding: spacing.xxxsmall,
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
}: SelectProps<T>) => {
  const ref = useRef<PickerRef>(null);
  const selectorRef = useRef<SelectorRef>(null);
  const classNames = useClassNames("select");
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

  const selectedKeys = useMemo(() => Array.from(readableValues.keys()), [readableValues]);

  return (
    <Picker
      ref={ref}
      pickable={<Selections items={menuItems} onSelect={onChange} selectedKeys={selectedKeys} />}
      className={clsx(classNames[SelectClassToken.Select], className, styled.picker.className)}
      style={{
        ...styled.picker.style,
        ...style,
      }}
      onClick={click}
      pickableClassName={styled.pickable.className}
      pickableStyle={styled.pickable.style}
      onPopperExite={reset}
      invalid={invalid}
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
      />
    </Picker>
  );
};

export default Select;
