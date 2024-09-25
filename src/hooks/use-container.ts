import { isDomUsable, isFunction } from "@aiszlab/relax";
import type { PortalProps } from "musae/types/portal";
import { useMemo } from "react";

/**
 * @description
 * container
 */
export const useContainer = (
  {
    container: _container,
    useBody = true,
  }: {
    container: PortalProps["container"];
    useBody?: boolean;
  },
  deps: unknown[] = [],
) => {
  const container = useMemo(() => {
    if (isFunction(_container)) return _container();
    return _container ?? (isDomUsable() && useBody ? document.body : null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_container, useBody, ...deps]);

  const isDocumentBody = useMemo(() => {
    return isDomUsable() && _container === document.body;
  }, [_container]);

  return {
    container,
    isDocumentBody,
  };
};
