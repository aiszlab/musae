import { useContext, useMemo } from "react";
import Context from "../config/context";
import { withPrefix } from "../../utils/class-name";

enum ClassName {
  Drawer = "drawer",
  Mask = "drawer-mask",
  Panel = "drawer-panel",
  Header = "drawer-header",
  Body = "drawer-body",
}

/**
 * @description
 * class names
 */
export const useClassNames = () => {
  const { prefix } = useContext(Context);

  return useMemo(
    () => ({
      drawer: withPrefix(prefix, ClassName.Drawer),
      mask: withPrefix(prefix, ClassName.Mask),
      panel: withPrefix(prefix, ClassName.Panel),
      header: withPrefix(prefix, ClassName.Header),
      body: withPrefix(prefix, ClassName.Body),
    }),
    [prefix]
  );
};
