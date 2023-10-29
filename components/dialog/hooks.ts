import { useContext, useMemo } from "react";
import Context from "../config/context";
import { withPrefix } from "../../utils/class-name";

enum ClassName {
  Dialog = "dialog",
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
      dialog: withPrefix(prefix, ClassName.Dialog),
      mask: withPrefix(prefix, ClassName.Mask),
      panel: withPrefix(prefix, ClassName.Panel),
      header: withPrefix(prefix, ClassName.Header),
      body: withPrefix(prefix, ClassName.Body),
    }),
    [prefix]
  );
};
