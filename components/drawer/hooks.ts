import { useContext, useMemo } from "react";
import Context from "../config/context";
import { withPrefix } from "../../utils/class-name";
import type { Placement } from "./types";

enum ClassName {
  Drawer = "drawer",
  Mask = "drawer-mask",
  Panel = "drawer-panel",
  Header = "drawer-header",
  Body = "drawer-body",
}

const PLACEMENT = new Map<Placement, [initialPlacement: string, animatedPlacement: string]>([
  ["right", ["translateX(100%)", "translateX(0%)"]],
  ["left", ["translateX(-100%)", "translateX(0%)"]],
  ["bottom", ["translateY(100%)", "translateY(0%)"]],
  ["top", ["translateY(-100%)", "translateY(0%)"]],
]);

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

/**
 * @description
 * placement
 */
export const usePlacements = ([placement]: [placement: Placement]) => {
  return useMemo(() => {
    return PLACEMENT.get(placement) || PLACEMENT.get("right")!;
  }, [placement]);
};
