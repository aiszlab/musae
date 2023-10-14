import { useContext, useMemo } from "react";
import Context from "../config/context";
import { withPrefix } from "../../utils/class-name";

enum ClassName {
  Description = "empty-description",
}

/**
 * @description
 * class names
 */
export const useClassNames = () => {
  const { prefix } = useContext(Context);

  return useMemo(
    () => ({
      description: withPrefix(prefix, ClassName.Description),
    }),
    [prefix]
  );
};
