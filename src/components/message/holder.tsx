import React, { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import { MessageRef, MessageProps } from "./types";
import Message from "./message";
import { stylex } from "@stylexjs/stylex";

const styles = stylex.create({
  holder: {
    position: "fixed",
    top: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100vw",
    pointerEvents: "none",
  },
});

const Holder = forwardRef<MessageRef>((props, ref) => {
  const [messages, setMessages] = useState<MessageProps[]>([]);

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
    <div {...stylex.props(styles.holder)}>
      {messages.map((item) => (
        <Message onHidden={hidden} key={item.id} {...item} />
      ))}
    </div>
  );
});

export default Holder;
