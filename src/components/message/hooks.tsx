import React, { type ReactPortal, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import Holder from "./holder";
import type { MessageConfig, MessageRef, Messager } from "./types";
import { Nullable } from "@aiszlab/relax/types";
import { useDefault, isDomUsable } from "@aiszlab/relax";
import { useConfiguration } from "../config/hooks";

/**
 * @author murukal
 *
 * @description
 * hook for message
 */
export const useMessage = (): [Messager, Nullable<ReactPortal>] => {
  const ref = useRef<MessageRef>(null);
  const configuredMessageHolder = useConfiguration().messageHolder;

  const holder = useDefault<Nullable<ReactPortal>>(() => {
    if (!isDomUsable()) return null;
    return configuredMessageHolder ?? createPortal(<Holder ref={ref} />, window.document.body);
  });

  const open = useCallback(async (config: MessageConfig) => {
    ref.current?.add({
      key: config.key ?? crypto.randomUUID(),
      type: config.type,
      duration: config.duration,
      content: config.content,
    });
  }, []);

  return [
    {
      success: (content, duration) =>
        open({
          type: "success",
          content,
          duration,
        }),
      error: (content, duration) =>
        open({
          type: "error",
          content,
          duration,
        }),
      info: (content, duration) =>
        open({
          type: "info",
          content,
          duration,
        }),
      loading: (content, duration) =>
        open({
          type: "loading",
          content,
          duration,
        }),
      warning: (content, duration) =>
        open({
          type: "warning",
          content,
          duration,
        }),
      open,
    },
    holder,
  ];
};
