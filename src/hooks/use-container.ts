import { isDomUsable, isFunction } from "@aiszlab/relax";
import type { PortalProps } from "../types/portal";
import { useMemo } from "react";

/**
 * @description
 * container
 */
export const useContainer = ({
  container,
  useBody = true,
}: {
  container: PortalProps["container"];
  useBody?: boolean;
}) => {
  const _container =
    (isFunction(container) ? container() : container) ??
    (isDomUsable() && useBody ? document.body : null);

  const isDocumentBody = useMemo(() => {
    return isDomUsable() && _container === document.body;
  }, [_container]);

  return {
    container: _container,
    isDocumentBody,
  };
};
