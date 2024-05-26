import React, { useRef, type ReactNode, useMemo } from "react";
import Holder from "./holder";
import type { NotificationConfig, Notifier, NotifierRef } from "./types";
import { isDomUsable, useEvent } from "@aiszlab/relax";
import { useConfiguration } from "../config/hooks";

/**
 * @author murukal
 *
 * @description
 * hook for notification
 */
export const useNotification = (): [Notifier, ReactNode] => {
  const ref = useRef<NotifierRef>(null);
  const { notifier } = useConfiguration();

  const holder = useMemo<ReactNode>(() => {
    if (!isDomUsable()) return null;
    if (notifier) return null;
    return <Holder ref={ref} />;
  }, [notifier]);

  const open = useEvent(async (config: NotificationConfig) => {
    // use global notifier first, if not valid, use current holder
    // if u trigger open failed, must check holder is mounted into react dom tree
    const _notifier = notifier?.current ?? ref.current;

    _notifier?.add({
      key: config.key ?? crypto.randomUUID(),
      type: config.type,
      duration: config.duration,
      description: config.description,
    });
  });

  return [
    {
      success: (config) =>
        open({
          type: "success",
          ...config,
        }),
      error: (config) =>
        open({
          type: "error",
          ...config,
        }),
      info: (config) =>
        open({
          type: "info",
          ...config,
        }),
      loading: (config) =>
        open({
          type: "loading",
          ...config,
        }),
      warning: (config) =>
        open({
          type: "warning",
          ...config,
        }),
    },
    holder,
  ];
};
