import { type Key, useMemo, useCallback, useState, useRef } from "react";
import type { Filter, ReadableOptions, SelectProps, Value } from "./types";
import { useControlledState, useEvent } from "@aiszlab/relax";
import { readOptions, toKey, toMenuItems, toValues } from "./utils";

/**
 * @description
 * use value
 */
export const useValue = ({
  mode,
  close,
  ...props
}: {
  value: SelectProps["value"];
  readableOptions: ReadableOptions;
  mode: SelectProps["mode"];
  close: () => void;
  reset: () => void;
  onChange: SelectProps["onChange"];
}) => {
  const [value, setValue] = useControlledState(props.value);
  const readableOptions = useRef<ReadableOptions>(props.readableOptions);
  readableOptions.current = props.readableOptions;

  /// convert prop value into a map
  /// in this component, only use map for controlled state
  /// only effect by value change
  const readableValues = useMemo(
    () =>
      toValues(value).reduce((prev, _value) => {
        const key = toKey(_value);
        return prev.set(
          key,
          (_value as Exclude<Value, Key>).label ?? readableOptions.current.get(key) ?? _value.toString()
        );
      }, new Map<Key, string>()),
    [value]
  );

  const onChange = useCallback(
    (key: Key) => {
      // if this select is single mode, just use key value
      // close dropdown after click
      // handler reset searched value
      if (!mode) {
        close();

        if (!readableValues.has(key)) {
          setValue({
            value: key,
            label: readableOptions.current.get(key) ?? key.toString(),
          });
        }

        return;
      }

      // in multiple mode
      // click menu item twice mean cancel it
      // else add current values
      const _values = new Map(readableValues);
      const isRemoved = _values.has(key) && _values.delete(key);
      setValue([
        ...Array.from(_values.entries()).map(([value, label]) => ({
          value,
          label,
        })),
        ...(isRemoved
          ? []
          : [
              {
                value: key,
                label: readableOptions.current.get(key) ?? key.toString(),
              },
            ]),
      ]);
    },
    [mode, readableValues, setValue, close]
  );

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
  options: SelectProps["options"];
  onFilter: SelectProps["onFilter"];
  onSearch: SelectProps["onSearch"];
}) => {
  const [searched, setSearched] = useState("");
  const onFilter = useRef<SelectProps["onFilter"]>(props.onFilter);
  onFilter.current = props.onFilter;

  const filter = useMemo<Filter | null>(() => {
    if (!searched) {
      return null;
    }
    if (onFilter.current === false) {
      return null;
    }
    if (onFilter.current === true || !onFilter.current) {
      return (option) => !!option.label?.includes(searched);
    }
    // @ts-ignore
    return (option) => onFilter.current(searched, option);
  }, [searched]);

  /// wrapper search handler, set react state
  const search = useEvent<Required<SelectProps>["onSearch"]>((searched) => {
    setSearched(searched);
    onSearch?.(searched);
  });

  /// reset search value
  const reset = useEvent(() => setSearched(""));

  const [menuItems, readableOptions] = useMemo(
    () => {
      return readOptions(options || [], toMenuItems, filter ?? (() => true));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [options, filter]
  );

  return {
    menuItems,
    readableOptions,
    search,
    searched,
    reset,
  };
};
