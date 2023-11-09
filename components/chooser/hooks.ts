import { useContext, useMemo } from "react";
import Context from "../config/context";
import { withPrefix } from "../../utils/class-name";

enum ClassName {
  Chooser = "chooser",
  Dropdown = "chooser-dropdown",
}

/**
 * @description
 * class names
 */
export const useClassNames = () => {
  const { prefix } = useContext(Context);

  return useMemo(
    () => ({
      chooser: withPrefix(prefix, ClassName.Chooser),
      dropdown: withPrefix(prefix, ClassName.Dropdown),
    }),
    [prefix]
  );
};
