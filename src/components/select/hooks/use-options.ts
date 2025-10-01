import { useMemo, useState } from "react";
import type { Filter, SelectProps } from "../../../types/select";
import { isFunction, isNull, isString, useEvent } from "@aiszlab/relax";
import { readOptions } from "../utils";
import type { Option } from "../../../types/option";

/**
 * @description
 * options
 */
export const useOptions = ({
  options,
  onSearch,
  onFilter = true,
}: {
  options: Option[];
  onFilter: SelectProps["onFilter"];
  onSearch: SelectProps["onSearch"];
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

  // clear search keyword
  const clearKeyword = useEvent(() => setKeyword(""));

  const [menuItems, readableOptions] = useMemo(
    () => readOptions(options, filter),
    [options, filter],
  );

  return {
    menuItems,
    readableOptions,
    search,
    keyword,
    clearKeyword,
    filter,
  };
};
