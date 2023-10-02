import React, { type ReactPortal, useCallback, useRef, useContext } from "react";
import { createPortal } from "react-dom";
import Holder from "./holder";
import { MessageRef } from "./types";
import { useOnceState } from "@aiszlab/relax";
import ConfigContext from "../config/context";

/**
 * @author murukal
 *
 * @description
 * hook for message
 */
export const useMessage = (): [any, ReactPortal] => {
  const ref = useRef<MessageRef>(null);
  const configuredMessageHolder = useContext(ConfigContext)?.messageHolder;

  const holder = useOnceState<ReactPortal>(() => {
    return configuredMessageHolder || createPortal(<Holder ref={ref} />, document.body);
  });

  const error = useCallback(() => {
    return ref.current?.add({
      id: crypto.randomUUID(),
      type: "error",
      duration: 3000,
    });
  }, []);

  return [
    {
      error,
    },
    holder,
  ];
};
