import { useContext, useMemo } from "react";
import Context from "../config/context";
import { withPrefix } from "../../utils/class-name";

enum ClassName {
  ItemExplainError = "form-item-explain-error",
}

/**
 * @description
 * class names
 */
export const useClassNames = () => {
  const { prefix } = useContext(Context);

  return useMemo(
    () => ({
      itemExplainError: withPrefix(prefix, ClassName.ItemExplainError),
    }),
    [prefix]
  );
};
