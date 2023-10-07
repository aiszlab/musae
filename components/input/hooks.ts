import { useMemo } from "react";
import clsx from "clsx";

/**
 * @description
 * class name for input
 */
export const useStyles = ([className]: [className?: string]) => {
  /// wrapper
  const wrapperClassName = useMemo(() => {
    return clsx(["musae-input-wrapper", className]);
  }, [className]);

  return {
    wrapperClassName,
  };
};
