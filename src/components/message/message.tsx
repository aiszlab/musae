import { MessageWrapper } from "./styled";
import React from "react";
import { useTimeout } from "@aiszlab/relax";
import type { MessageProps } from "./types";

const Message = ({ duration, type, onHidden, id }: MessageProps) => {
  useTimeout(
    () => {
      onHidden?.(id);
    },
    {
      duration,
    }
  );

  return <MessageWrapper>{type}</MessageWrapper>;
};

export default Message;
