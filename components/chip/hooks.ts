import { useContext, useMemo } from "react";
import Context from "../config/context";
import { withPrefix } from "../../utils/class-name";

enum ClassName {
  Chip = "chip",
}

/**
 * @description
 * class names
 */
export const useClassNames = () => {
  const { prefix } = useContext(Context);

  return useMemo(
    () => ({
      chip: withPrefix(prefix, ClassName.Chip),
    }),
    [prefix]
  );
};
