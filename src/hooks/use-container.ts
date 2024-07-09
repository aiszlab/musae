import { toFunction } from "@aiszlab/relax";
import { PortalProps } from "../components/portal/types";

/**
 * @description
 * container
 */
export const useContainer = ({ container }: { container: PortalProps["container"] }) => {
  const _container = toFunction(container)();

  return {
    isBody: _container === document.body,
    container: _container,
  };
};
