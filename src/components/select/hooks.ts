import { type Key, ReactNode, useMemo, useState } from "react";
import type { Filter, Mode, ReadableOptions, SelectProps, ValueOrValues } from "../../types/select";
import {
  isFunction,
  isNull,
  isString,
  toArray,
  useControlledState,
  useEvent,
} from "@aiszlab/relax";
import { readOptions, toKey, toMenuItem } from "./utils";
import type { Option } from "../../types/option";
import { Partialable } from "@aiszlab/relax/types";

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
  onClear: _onClear,
  ...props
}: {
  value: ValueOrValues | undefined;
  readableOptions: ReadableOptions;
  mode: Mode | undefined;
  isComplex: boolean;
  close: () => void;
  reset: () => void;
  onChange?: (value: T) => void;
  onClear?: () => void;
}) => {
  const [value, setValue] = useControlledState(props.value);

  // convert prop value into a map
  // in this component, only use map for controlled state
  // only effect by value change
  const readableValues = useMemo(
    () =>
      toArray(value).reduce((prev, _value) => {
        const key = toKey(_value);
        return prev.set(
          key,
          (_value as Pick<Option, "label">).label ?? readableOptions.get(key) ?? _value.toString(),
        );
      }, new Map<Key, ReactNode>()),
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

      setValue(_value);
      _onChange?.((isComplex ? _value : key) as T);
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

    setValue(_changedValues);
    _onChange?.(_changedValues);
  });

  // clear handler
  const onClear = useEvent(() => {
    const _emptyValue = (isComplex ? [] : void 0) as Partialable<T>;
    setValue(_emptyValue);
    _onClear?.();
  });

  return {
    value,
    readableValues,
    onChange,
    onClear,
  };
};

/**
 * @description
 * options
 */
export const useOptions = ({
  options,
  onSearch,
  onFilter = true,
  mode,
  value,
}: {
  options: Option[];
  onFilter: SelectProps["onFilter"];
  onSearch: SelectProps["onSearch"];
  mode: Mode | undefined;
  value: ValueOrValues | undefined;
}) => {
  const [keyword, setKeyword] = useState("");

  const filter = useEvent<Filter>((option) => {
    if (!keyword) return true;
    if (isNull(onFilter) || onFilter === false) return true;
    if (isFunction(onFilter)) return onFilter(keyword, option);

    const matcher = new RegExp(keyword, "i");

    return (
      matcher.test(option.value.toString()) ||
      !!(isString(option.label) && matcher.test(option.label))
    );
  });

  // wrapper search handler, set react state
  const search = useEvent<Required<SelectProps>["onSearch"]>((searched) => {
    setKeyword(searched);
    onSearch?.(searched);
  });

  // reset search value
  const reset = useEvent(() => setKeyword(""));

  const [menuItems, readableOptions] = useMemo(() => {
    const [_menuItems, _readableOptions] = readOptions(options, filter);

    // 在`tags`模式下，需要将搜索内容和选中结果自动注入
    if (mode === "tags") {
      [...toArray(value ?? []), ...(keyword ? [keyword] : [])].forEach((_value) => {
        const _menuItem = toMenuItem(_value);
        if (_readableOptions.has(_menuItem.key)) return;
        _readableOptions.set(_menuItem.key, _menuItem.label);
        _menuItems.push(_menuItem);
      });
    }

    return [_menuItems, _readableOptions];
  }, [options, filter, mode, value, keyword]);

  return {
    menuItems,
    readableOptions,
    search,
    keyword,
    reset,
  };
};
