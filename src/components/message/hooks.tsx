import { type ReactNode } from "react";
import type { Messager } from "./types";
import { useNotification } from "../notification";

/**
 * @author murukal
 *
 * @description
 * hook for message
 */
export const useMessage = (): [Messager, ReactNode] => {
  const [notifier, holder] = useNotification({ placement: "top" });

  return [
    {
      error: (config) => notifier.error(config),
      info: (config) => notifier.info(config),
      loading: (config) => notifier.loading(config),
      success: (config) => notifier.success(config),
      warning: (config) => notifier.warning(config),
    },
    holder,
  ];
};
