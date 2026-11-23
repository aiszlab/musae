import { isDomUsable, isFunction, isUndefined } from "@aiszlab/relax";
import type { PortalProps } from "../types/portal";
import { useContext, useMemo } from "react";

import { PortalContainerContext } from "../contexts/portal-container.context";

/**
 * @zh 解析显式容器、主题容器或文档容器
 * @en Resolves an explicit, theme, or document container
 */
export const useContainer = ({
  container,
  useBody = true,
}: {
  container: PortalProps["container"];
  useBody?: boolean;
}) => {
  const themeContainer = useContext(PortalContainerContext);
  const defaultContainer = isUndefined(themeContainer)
    ? isDomUsable()
      ? document.body
      : null
    : themeContainer;
  const _container =
    (isFunction(container) ? container() : container) ?? (useBody ? defaultContainer : null);

  const isDocumentBody = useMemo(() => {
    return isDomUsable() && _container === document.body;
  }, [_container]);

  return {
    container: _container,
    isDocumentBody,
  };
};
