import { createPortal } from "react-dom";
import type { PortalProps } from "./types";
import { type FC, useEffect, useState } from "react";
import { isDomUsable, useScrollLocker } from "@aiszlab/relax";

const Portal: FC<PortalProps> = ({ children, open = false, destroyable = false, lockable = true }: PortalProps) => {
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

  return createPortal(children, document.body);
};

export default Portal;
