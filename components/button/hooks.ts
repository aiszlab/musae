import { useContext, useMemo } from "react";
import Context from "../config/context";
import { withPrefix } from "../../utils/class-name";

/**
 * @description
 * class name
 */
enum ClassName {
  Button = "button",
}

/**
 * @description
 * class names
 */
export const useClassNames = () => {
  const { prefix } = useContext(Context);

  return useMemo(
    () => ({
      button: withPrefix(prefix, ClassName.Button),
    }),
    [prefix]
  );
};
