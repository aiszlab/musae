import React, { ReactPortal, useCallback, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Holder from "./holder";
import { MessageRef } from "./types";

/**
 * @author murukal
 * @description hook for message
 */
export const useMessage = () => {
  const ref = useRef<MessageRef>(null);

  const [holder] = useState<ReactPortal>(() => {
    return createPortal(<Holder ref={ref} />, document.body);
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
