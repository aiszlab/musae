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
  const [notifier, holder] = useNotification();

  return [
    {
      error: (config) =>
        notifier.error({
          placement: "top",
          ...config,
        }),
      info: (config) =>
        notifier.info({
          placement: "top",
          ...config,
        }),
      loading: (config) =>
        notifier.loading({
          placement: "top",
          ...config,
        }),
      success: (config) =>
        notifier.success({
          placement: "top",
          ...config,
        }),
      warning: (config) =>
        notifier.warning({
          placement: "top",
          ...config,
        }),
    },
    holder,
  ];
};
