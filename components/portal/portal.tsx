import { createPortal } from "react-dom";
import type { PortalProps } from "./types";
import { useEffect, useState } from "react";

const Portal = ({ children, isRender = false, destroyable = false }: PortalProps) => {
  const [isRenderable, setIsRenderable] = useState(false);

  /// if render once, and is not destroyable
  /// anyway render
  useEffect(() => {
    if (destroyable || isRender) {
      setIsRenderable(isRender);
    }
  }, [destroyable, isRender]);

  if (!isRenderable) return null;

  return createPortal(children, document.body);
};

export default Portal;
