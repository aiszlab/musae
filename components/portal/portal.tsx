import { createPortal } from "react-dom";
import type { PortalProps } from "./types";
import { useEffect, useState } from "react";
import { isDomUsable, useScrollLocker } from "@aiszlab/relax";

const Portal = ({ children, isVisible = false, destroyable = false, lockable = true }: PortalProps) => {
  const [shouldRender, setShouldRender] = useState(false);

  /// if render once, and is not destroyable
  /// anyway render
  useEffect(() => {
    if (destroyable || isVisible) {
      setShouldRender(isVisible);
    }
  }, [destroyable, isVisible]);

  useScrollLocker(isDomUsable() && isVisible && lockable);

  if (!shouldRender) return null;

  return createPortal(children, document.body);
};

export default Portal;
