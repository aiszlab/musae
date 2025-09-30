import { useMemo, type Key, type ReactNode } from "react";
import { MenuItem } from "../../../types/menu";
import type { Filter, Mode } from "../../../types/select";

interface UsingTagOptions {
  values: Map<Key, ReactNode>;
  options: Map<Key, ReactNode>;
  menuItems: MenuItem[];
  mode: Mode | undefined;
  keyword: string;
  filter: Filter;
}

/**
 * useTagOptions
 * @description 在`tags`模式下，需要自动注入自动生成的选项
 */
export const useTagOptions = ({
  menuItems,
  mode,
  options,
  values,
  filter,
  keyword,
}: UsingTagOptions) => {
  return useMemo(() => {
    if (mode !== "tags") return menuItems;
    if (values.size === 0 && !keyword) return menuItems;

    const _values = new Map(values);
    const mergedMenuItems = Array.from(menuItems);

    if (keyword && !_values.has(keyword)) {
      _values.set(keyword, keyword);
    }

    _values.forEach((label, value) => {
      if (options.has(value)) return;
      if (!filter({ value, label })) return;

      mergedMenuItems.push({
        key: value,
        label,
      });
    });

    return mergedMenuItems;
  }, [mode, values, keyword, menuItems, options, filter]);
};
