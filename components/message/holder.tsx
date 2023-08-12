import React, { forwardRef, useImperativeHandle, useState } from "react";
import Wrapper from "./wrapper";
import { MessageRef, Props } from "./types";
import Message from "./message";

const Holder = forwardRef<MessageRef>((props, ref) => {
  const [messages, setMessages] = useState<Props[]>([]);

  useImperativeHandle(ref, () => ({
    add: (props) => {
      setMessages([...messages, props]);
    },
  }));

  if (messages.length === 0) {
    return null;
  }

  return (
    <Wrapper>
      {messages.map((item) => (
        <Message key={item.key}>{item.type}</Message>
      ))}
    </Wrapper>
  );
});

export default Holder;
