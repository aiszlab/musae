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
      error: (config) =>
        notifier.error({
          ...config,
          closable: false,
        }),
      info: (config) =>
        notifier.info({
          ...config,
          closable: false,
        }),
      loading: (config) =>
        notifier.loading({
          ...config,
          closable: false,
        }),
      success: (config) =>
        notifier.success({
          ...config,
          closable: false,
        }),
      warning: (config) =>
        notifier.warning({
          ...config,
          closable: false,
        }),
    },
    holder,
  ];
};
