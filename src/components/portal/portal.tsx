import { createPortal } from "react-dom";
import type { PortalProps } from "musae/types/portal";
import { type FC, useEffect, useState } from "react";
import { isDomUsable, useScrollLocker } from "@aiszlab/relax";
import { useContainer } from "../../hooks/use-container";

const Portal: FC<PortalProps> = ({
  children,
  open = true,
  destroyable = false,
  lockable = false,
  container,
}) => {
  const [shouldRender, setShouldRender] = useState(false);
  const { container: _container } = useContainer({ container });

  /// if render once, and is not destroyable
  /// anyway render
  useEffect(() => {
    if (destroyable || open) {
      setShouldRender(open);
    }
  }, [destroyable, open]);

  useScrollLocker(isDomUsable() && lockable && open);

  if (!(shouldRender || open)) return null;
  if (!_container) return null;

  return createPortal(children, _container);
};

export default Portal;
