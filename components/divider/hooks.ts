import { useContext, useMemo } from "react";
import Context from "../config/context";
import { withPrefix } from "../../utils/class-name";
import { Align } from "./types";

enum ClassName {
  Divider = "divider",
  Context = "content",
}

const OFFSET = new Map<Align, 5 | 50 | 95>([
  ["center", 50],
  ["left", 5],
  ["right", 95],
]);

/**
 * @description
 * class name with prefix
 */
export const useClassNames = () => {
  const { prefix } = useContext(Context);

  return useMemo(
    () => ({
      divider: withPrefix(prefix, ClassName.Divider),
      content: withPrefix(prefix, ClassName.Context),
    }),
    [prefix]
  );
};

/**
 * @description
 * offset for children
 */
export const useOffset = ([align]: [align: Align | undefined]) => {
  return useMemo(() => {
    return OFFSET.get(align ?? "center") ?? 50;
  }, [align]);
};
