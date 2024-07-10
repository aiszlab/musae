import { isDomUsable, isFunction } from "@aiszlab/relax";
import { PortalProps } from "../components/portal/types";
import { useMemo } from "react";

/**
 * @description
 * container
 */
export const useContainer = ({ container }: { container: PortalProps["container"] }) => {
  const _container = useMemo(() => {
    if (!isFunction(container)) return container ?? (isDomUsable() ? document.body : null);
    return container();
  }, [container]);

  const isDocumentBody = useMemo(() => {
    return isDomUsable() && _container === document.body;
  }, [_container]);

  return {
    container: _container,
    isDocumentBody,
  };
};
