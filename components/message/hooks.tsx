import React, { ReactPortal, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import Message from "./message";

/**
 * @author murukal
 * @description hook for message
 */
export const useMessage = () => {
  const [holder, setHolder] = useState<ReactPortal | null>(null);

  const error = useCallback(() => {
    console.log("1111");

    setHolder(createPortal(<Message />, document.body));
  }, []);

  return [
    {
      error,
    },
    holder,
  ];
};
