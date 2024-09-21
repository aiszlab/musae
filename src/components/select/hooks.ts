import { type Key, useMemo, useState } from "react";
import type { Filter, Mode, ReadableOptions, SelectProps, ValueOrValues } from "./types";
import { isFunction, isUndefined, useControlledState, useEvent } from "@aiszlab/relax";
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
  const isControlled = !isUndefined(props.value);
  const [value, setValue] = useControlledState(props.value);

  /// convert prop value into a map
  /// in this component, only use map for controlled state
  /// only effect by value change
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

      if (isControlled) {
        props.onChange?.((isComplex ? _value : key) as T);
        return;
      }

      setValue(_value);
      return;
    }

    // in multiple mode
    // click menu item twice mean cancel it
    // else add current values
    const prev = new Map(readableValues);
    const isRemoved = prev.has(key) && prev.delete(key);
    const next = isRemoved ? prev : prev.set(key, _value.label);

    if (isControlled) {
      props.onChange?.(
        (isComplex
          ? Array.from(next.entries()).map(([value, label]) => ({
              value,
              label,
            }))
          : Array.from(next.keys())) as T,
      );
      return;
    }

    setValue(
      Array.from(next.entries()).map(([value, label]) => ({
        value,
        label,
      })),
    );
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
  ...props
}: {
  options: Option[];
  onFilter: SelectProps["onFilter"];
  onSearch: SelectProps["onSearch"];
}) => {
  const [searched, setSearched] = useState("");
  const onFilterGetter = useEvent(() => props.onFilter ?? true);

  const filter = useMemo<Filter | null>(() => {
    if (!searched) return null;

    const onFilter = onFilterGetter();
    if (!onFilter) return null;
    if (isFunction(onFilter)) return (option) => onFilter(searched, option);
    return (option) => !!option.label?.includes(searched);
  }, [searched, onFilterGetter]);

  /// wrapper search handler, set react state
  const search = useEvent<Required<SelectProps>["onSearch"]>((searched) => {
    setSearched(searched);
    onSearch?.(searched);
  });

  /// reset search value
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
