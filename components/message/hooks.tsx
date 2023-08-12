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
  const [holder, setHolder] = useState<ReactPortal | null>(null);

  const error = useCallback(() => {
    if (ref.current) {
      return ref.current.add({
        key: crypto.randomUUID(),
        type: "error",
        duration: 200,
      });
    }
    setHolder(createPortal(<Holder ref={ref} />, document.body));
  }, []);

  return [
    {
      error,
    },
    holder,
  ];
};
