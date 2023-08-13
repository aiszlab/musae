import { useMemo } from "react";
import type { Variant } from "./types";
import clsx from "clsx";

/**
 * @description class name for input
 */
export const useStyles = ([variant, isFocused, className]: [
  variant: Variant,
  isFocused: boolean,
  className?: string
]) => {
  /// wrapper
  const wrapperClassName = useMemo(() => {
    return clsx(["musae-input-wrapper", className]);
  }, [className]);

  return {
    wrapperClassName,
  };
};
