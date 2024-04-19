import React, { useRef, type ReactNode, useMemo } from "react";
import Holder from "./holder";
import type { MessageConfig, MessageRef, Messager } from "./types";
import { isDomUsable, useEvent } from "@aiszlab/relax";
import { useConfiguration } from "../config/hooks";

/**
 * @author murukal
 *
 * @description
 * hook for message
 */
export const useMessage = (): [Messager, ReactNode] => {
  const ref = useRef<MessageRef>(null);
  const { messager } = useConfiguration();

  const holder = useMemo<ReactNode>(() => {
    if (!isDomUsable()) return null;
    if (messager) return null;
    return <Holder ref={ref} />;
  }, [messager]);

  const open = useEvent(async (config: MessageConfig) => {
    // use global messager first, if not valid, use current holder
    // if u trigger open failed, must check holder is mounted into react dom tree
    const usableMessager = messager?.current ?? ref.current;

    usableMessager?.add({
      key: config.key ?? crypto.randomUUID(),
      type: config.type,
      duration: config.duration,
      content: config.content,
    });
  });

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
