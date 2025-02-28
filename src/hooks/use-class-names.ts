import { useMemo } from "react";
import { useConfiguration } from "../components/config/hooks";

/**
 * @description
 * in component, inject prefix class names
 */
export const useClassNames = <C extends Record<string, string>>(classNames: C) => {
  const { prefix } = useConfiguration();

  return useMemo(() => {
    return Object.fromEntries(
      Object.entries(classNames).map(([key, value]) => [key, `${prefix}-${value}`]),
    ) as C;
  }, [classNames, prefix]);
};
