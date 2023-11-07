import React, { useCallback, useMemo } from "react";
import type { ContextValue } from "../select/types";
import type { CascaderProps } from "./types";
import { useControlledState } from "@aiszlab/relax";
import { Menu } from "../menu";

/**
 * @description
 * context
 */
export const useSelectContextValue = () => {
  return useMemo<ContextValue>(() => {
    return {
      useSelector: () => {
        return {
          options: <Menu items={[]}></Menu>,
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
export const useValue = ([valueInProps]: [value: CascaderProps["value"]]) => {
  const [_value, setValue] = useControlledState(valueInProps);

  /// convert value into maps
  const values = useMemo(() => {}, [_value]);

  /// change handler
  const onChange = useCallback(() => {
    /// single mode
  }, []);
};
