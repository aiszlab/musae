import { type Key, useMemo, useState } from "react";
import type { Filter, Mode, ReadableOptions, SelectProps, ValueOrValues } from "../../types/select";
import { isFunction, isNull, useControlledState, useEvent } from "@aiszlab/relax";
import { readOptions, toKey, toMenuItems, toValues } from "./utils";
import type { Option } from "musae/types/option";

/**
 * @description
 * use value
 */
export const useValue = <T extends ValueOrValues = ValueOrValues>({
  mode,
  close,
  isComplex,
  readableOptions,
  onChange: _onChange,
  ...props
}: {
  value: ValueOrValues | undefined;
  readableOptions: ReadableOptions;
  mode: Mode | undefined;
  close: () => void;
  reset: () => void;
  onChange?: (value: T) => void;
  isComplex: boolean;
}) => {
  const [value, setValue] = useControlledState(props.value);

  // convert prop value into a map
  // in this component, only use map for controlled state
  // only effect by value change
  const readableValues = useMemo(
    () =>
      toValues(value).reduce((prev, _value) => {
        const key = toKey(_value);
        return prev.set(
          key,
          // @ts-ignore
          _value.label ?? readableOptions.get(key) ?? _value.toString(),
        );
      }, new Map<Key, string>()),
    [value, readableOptions],
  );

  const onChange = useEvent((key: Key) => {
    // convert to complex value
    const _value = {
      value: key,
      label: readableOptions.get(key) ?? key.toString(),
    };

    // single mode
    if (!mode) {
      close();
      // same value, do not toggle again
      if (readableValues.has(key)) return;

      _onChange?.((isComplex ? _value : key) as T);
      setValue(_value);
      return;
    }

    // in multiple mode
    // click menu item twice mean cancel it
    // else add current values
    const prev = new Map(readableValues);
    const isRemoved = prev.has(key) && prev.delete(key);
    const next = isRemoved ? prev : prev.set(key, _value.label);

    const _changedValues = (
      isComplex
        ? Array.from(next.entries()).map(([value, label]) => ({
            value,
            label,
          }))
        : Array.from(next.keys())
    ) as T;

    _onChange?.(_changedValues);
    setValue(_changedValues);
  });

  return {
    value,
    readableValues,
    onChange,
  };
};

/**
 * @description
 * options
 */
export const useOptions = ({
  options,
  onSearch,
  onFilter,
}: {
  options: Option[];
  onFilter: SelectProps["onFilter"];
  onSearch: SelectProps["onSearch"];
}) => {
  const [searched, setSearched] = useState("");

  const filter = useEvent<Filter>((option) => {
    if (!searched) return true;
    if (isNull(onFilter) || onFilter === false) return true;
    if (isFunction(onFilter)) return onFilter(searched, option);

    const regExp = new RegExp(searched, "i");
    return regExp.test(option.value.toString()) || !!(option.label && regExp.test(option.label));
  });

  // wrapper search handler, set react state
  const search = useEvent<Required<SelectProps>["onSearch"]>((searched) => {
    setSearched(searched);
    onSearch?.(searched);
  });

  // reset search value
  const reset = useEvent(() => setSearched(""));

  const [menuItems, readableOptions] = useMemo(
    () => readOptions(options, toMenuItems, filter ?? (() => true)),
    [options, filter],
  );

  return {
    menuItems,
    readableOptions,
    search,
    searched,
    reset,
  };
};
