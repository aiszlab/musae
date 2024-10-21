import { useMemo } from "react";
import { useConfiguration } from "../components/config";

/**
 * @description
 * in component, inject prefix class name
 */
export const useClassNames = <C extends Record<string, string>>(classNames: C): C => {
  const { prefix } = useConfiguration();

  return useMemo(() => {
    return Object.fromEntries(
      Object.entries(classNames).map(([key, value]) => [key, `${prefix}-${value}`]),
    ) as C;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefix]);
};