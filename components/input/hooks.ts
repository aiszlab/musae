import { useMemo } from "react";
import type { Variant } from "./types";
import clsx from "clsx";

/**
 * @description class name for input
 */
export const useStyles = ([variant, isFocused, hasWrapper]: [
  variant: Variant,
  isFocused: boolean,
  hasWrapper: boolean
]) => {
  /// input
  const inputClassName = useMemo(() => {
    return clsx({
      ["musae-input"]: true,
      ["musae-input-focused"]: !hasWrapper && isFocused,
    });
  }, [isFocused, hasWrapper]);

  /// wrapper
  const wrapperClassName = useMemo(() => {
    return clsx({
      ["musae-input-wrapper"]: true,
      ["musae-input-wrapper-focused"]: isFocused,
    });
  }, [isFocused]);

  return {
    inputClassName,
    wrapperClassName,
  };
};
