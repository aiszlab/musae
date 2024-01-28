import React, { type ReactPortal, useCallback, useRef, useContext } from "react";
import { createPortal } from "react-dom";
import Holder from "./holder";
import { MessageRef } from "./types";
import { useDefault, isDomUsable, Nullable } from "@aiszlab/relax";
import ConfigContext from "../config/context";

/**
 * @author murukal
 *
 * @description
 * hook for message
 */
export const useMessage = (): [any, Nullable<ReactPortal>] => {
  const ref = useRef<MessageRef>(null);
  const configuredMessageHolder = useContext(ConfigContext)?.messageHolder;

  const holder = useDefault<Nullable<ReactPortal>>(() => {
    if (!isDomUsable()) return null;
    return configuredMessageHolder ?? createPortal(<Holder ref={ref} />, document.body);
  });

  const error = useCallback(() => {
    ref.current?.add({
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
