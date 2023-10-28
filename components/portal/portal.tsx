import { createPortal } from "react-dom";
import type { PortalProps } from "./types";
import { useEffect, useState } from "react";

const Portal = ({ children, isVisible = false, destroyable = false }: PortalProps) => {
  const [shouldRender, setShouldRender] = useState(false);

  /// if render once, and is not destroyable
  /// anyway render
  useEffect(() => {
    if (destroyable || isVisible) {
      setShouldRender(isVisible);
    }
  }, [destroyable, isVisible]);

  if (!shouldRender) return null;
  return createPortal(children, document.body);
};

export default Portal;
