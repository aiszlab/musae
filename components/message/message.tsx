import React, { forwardRef, useImperativeHandle, useState } from "react";
import Wrapper from "./wrapper";
import { MessageRef } from "./types";

const Message = forwardRef<MessageRef, {}>((props, ref) => {
  const [messages, setMessages] = useState<string[]>([]);

  useImperativeHandle(ref, () => ({
    add: () => {
      setMessages([...messages, "12321321"]);
    },
  }));

  if (messages.length === 0) {
    return null;
  }

  return (
    <Wrapper>
      {messages.map((item) => (
        <div>{item}</div>
      ))}
    </Wrapper>
  );
});

export default Message;
