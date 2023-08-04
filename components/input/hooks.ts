import { useMemo } from "react";
import type { Variant } from "./types";
import clsx from "clsx";

/**
 * @description class name for input
 */
export const useStyles = ([variant, isFocused]: [variant: Variant, isFocused: boolean]) => {
  /// wrapper
  const wrapperClassName = useMemo(() => {
    return clsx({
      ["musae-input-wrapper"]: true,
    });
  }, []);

  return {
    wrapperClassName,
  };
};
