import React, { ReactPortal, useCallback, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Message from "./message";
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
        type: "error",
        duration: 200,
      });
    }
    setHolder(createPortal(<Message ref={ref} />, document.body));
  }, []);

  return [
    {
      error,
    },
    holder,
  ];
};
