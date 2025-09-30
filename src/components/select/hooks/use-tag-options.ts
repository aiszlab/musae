import { useMemo, type Key, type ReactNode } from "react";
import { MenuItem } from "../../../types/menu";
import { Mode } from "../../../types/select";

interface UsingTagOptions {
  values: Map<Key, ReactNode>;
  options: Map<Key, ReactNode>;
  menuItems: MenuItem[];

  mode: Mode | undefined;
}

/**
 * useTagOptions
 * @description 在`tags`模式下，需要自动注入自动生成的选项
 */
export const useTagOptions = ({ menuItems, mode, options, values }: UsingTagOptions) => {
  return useMemo(() => {
    if (mode !== "tags") {
      return {
        menuItems,
        options,
      };
    }

    return {
      menuItems,
      options,
    };
  }, [menuItems, options, values, mode]);
};
