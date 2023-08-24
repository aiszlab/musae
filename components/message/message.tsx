import { MessageWrapper } from "./styled";
import React, { type FC } from "react";
import type { MessageProps } from "./types";
import { useTimeout } from "@aiszlab/relax";

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
