import { MessageWrapper } from "./wrappers";
import React, { type FC } from "react";
import type { Props } from "./types";
import { useTimeout } from "@aiszlab/relax";

const Message: FC<Props> = ({ duration, type, onHidden, id }) => {
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
