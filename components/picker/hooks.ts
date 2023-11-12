import { useContext, useMemo } from "react";
import Context from "../config/context";
import { withPrefix } from "../../utils/class-name";
import clsx from "clsx";
import { Partialable } from "../../types/lib";

enum ClassName {
  Picker = "picker",
  Dropdown = "picker-dropdown",
}

/**
 * @description
 * class names
 */
export const useClassNames = () => {
  const { prefix } = useContext(Context);

  return useMemo(
    () => ({
      picker: withPrefix(prefix, ClassName.Picker),
      dropdown: withPrefix(prefix, ClassName.Dropdown),
    }),
    [prefix]
  );
};

/**
 * @description
 * style
 */
export const useStyles = (
  classNames: {
    picker: string;
  },
  {
    picker,
  }: {
    picker: Partialable<string>;
  }
) => {
  return useMemo(
    () => ({
      picker: clsx([classNames.picker, picker]),
    }),
    [classNames.picker, picker]
  );
};
