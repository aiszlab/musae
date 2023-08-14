import { MessageWrapper } from "./wrappers";
import React, { type FC } from "react";
import type { Props } from "./types";
import { useTimeout } from "@aiszlab/relax";

const Message = ({ duration, type, onHidden, id }: Props) => {
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
