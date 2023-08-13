import React, { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import { HolderWrapper } from "./wrappers";
import { MessageRef, Props } from "./types";
import Message from "./message";

const Holder = forwardRef<MessageRef>((props, ref) => {
  const [messages, setMessages] = useState<Props[]>([]);

  useImperativeHandle(ref, () => ({
    add: (props) => {
      setMessages([...messages, props]);
    },
  }));

  /// remove message
  const hidden = useCallback(
    (id: string) => setMessages((messages) => messages.filter((message) => message.id !== id)),
    []
  );

  if (messages.length === 0) {
    return null;
  }

  return (
    <HolderWrapper>
      {messages.map((item) => (
        <Message onHidden={hidden} key={item.id} {...item} />
      ))}
    </HolderWrapper>
  );
});

export default Holder;
