import { createElement, useMemo } from "react";
import type { ContextValue } from "../select/types";
import { CascaderProps } from "./types";

/**
 * @description
 * context
 */
export const useSelectContextValue = () => {
  return useMemo<ContextValue>(() => {
    return {
      useSelector: () => {
        return {
          options: createElement("a"),
          value: new Map(),
        };
      },
    };
  }, []);
};

/**
 * @description
 * cascader value
 */
export const useValue = ([value]: [value: CascaderProps["value"]]) => {};
