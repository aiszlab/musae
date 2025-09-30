import { useMemo, useState } from "react";
import type { Filter, Mode, SelectProps, ValueOrValues } from "../../../types/select";
import { isFunction, isNull, isString, toArray, useEvent } from "@aiszlab/relax";
import { readOptions, toMenuItem } from "../utils";
import type { Option } from "../../../types/option";

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
    filter,
  };
};
