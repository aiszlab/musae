import { type Key, useMemo, useCallback, useState } from "react";
import type { Filter, ReadableOptions, SelectProps, ToMenuItem } from "./types";
import { useControlledState, useEvent } from "@aiszlab/relax";
import { readOptions, toKey, toOption, toValues } from "./utils";
import { Option } from "../../types/option";

/**
 * @description
 * use value
 */
export const useValue = ({
  readableOptions,
  mode,
  close,
  ...props
}: {
  value: SelectProps["value"];
  readableOptions: ReadableOptions;
  mode: SelectProps["mode"];
  close: VoidFunction;
}) => {
  const [_value, setValue] = useControlledState(props.value);

  /// convert prop value into a map
  /// in this component, only use map for controlled state
  const values = useMemo<Map<Key, string>>(
    () =>
      toValues(_value).reduce((prev, _value) => {
        const key = toKey(_value);
        return prev.set(key, readableOptions.get(key) ?? toOption(_value).label);
      }, new Map()),
    [_value, readableOptions]
  );

  const onChange = useCallback(
    (key: Key) => {
      // if this select is single mode, just use key value
      // close dropdown after click
      if (!mode) {
        close();
        setValue(key);
        return;
      }

      // in multiple mode
      // click menu item twice mean cancel it
      // else add current values
      const isRemoved = values.has(key) && values.delete(key);
      setValue([...values.keys(), ...(isRemoved ? [] : [key])]);
    },
    [mode, values, setValue, close]
  );

  return {
    value: values,
    onChange,
  };
};

/**
 * @description
 * options
 */
export const useOptions = ({
  options,
  onFilter,
  onSearch,
}: {
  options: SelectProps["options"];
  onFilter: SelectProps["onFilter"];
  onSearch: SelectProps["onSearch"];
}) => {
  const [searched, setSearched] = useState("");

  const _filter = useEvent((searched: string, option: Option) => {
    if (!searched) return true;
    if (onFilter === false) return true;
    if (onFilter === true || !onFilter) return !!option.label?.includes(searched);
    return onFilter(searched, option);
  });

  /// make sure filter function will changed by searched value
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filter = useCallback<Filter>((option) => _filter(searched, option), [searched]);

  /// wrapper search handler, set react state
  const search = useEvent<Required<SelectProps>["onSearch"]>((searched) => {
    setSearched(searched);
    onSearch?.(searched);
  });

  const reset = () => setSearched("");

  const toMenuItems = useCallback<ToMenuItem>((option) => {
    return {
      key: option.value,
      label: option.label,
    };
  }, []);

  const readable = useMemo(() => {
    const [menuItems, readableOptions] = readOptions(options || [], toMenuItems, filter);
    return {
      menuItems,
      readableOptions,
    };
  }, [options, toMenuItems, filter]);

  return {
    menuItems: readable.menuItems,
    readableOptions: readable.readableOptions,
    search,
    searched,
    reset,
  };
};
