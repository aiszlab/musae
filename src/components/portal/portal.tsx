import { createPortal } from "react-dom";
import type { PortalProps } from "./types";
import { type FC, useEffect, useState } from "react";
import { isDomUsable, toFunction, useScrollLocker } from "@aiszlab/relax";

const Portal: FC<PortalProps> = ({ children, open = true, destroyable = false, lockable = false, container }) => {
  const [shouldRender, setShouldRender] = useState(false);

  /// if render once, and is not destroyable
  /// anyway render
  useEffect(() => {
    if (destroyable || open) {
      setShouldRender(open);
    }
  }, [destroyable, open]);

  useScrollLocker(isDomUsable() && lockable && open);

  if (!shouldRender) return null;

  return createPortal(children, toFunction(container)() ?? document.body);
};

export default Portal;
