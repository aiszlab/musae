import { type CSSProperties, useContext, useMemo } from "react";
import Context from "../config/context";
import { withPrefix } from "../../utils/class-name";
import type { Partialable } from "../../types/lib";
import clsx from "clsx";

enum ClassName {
  Dropdown = "dropdown",
}

/**
 * @description
 * class names
 */
export const useClassNames = ([dropdown]: [dropdown: Partialable<string>]) => {
  const { prefix } = useContext(Context);

  return useMemo(() => {
    return {
      dropdown: clsx([withPrefix(prefix, ClassName.Dropdown), dropdown]),
    };
  }, [prefix, dropdown]);
};

/**
 * @description
 * initial style
 */
export const useStyles = () => {
  return useMemo<Record<ClassName, CSSProperties>>(() => {
    return {
      dropdown: {
        display: "none",
        opacity: 0,
      },
    };
  }, []);
};
