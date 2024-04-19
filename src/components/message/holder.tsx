import React, { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import { MessageRef, MessageConfig } from "./types";
import Message from "./message";
import * as stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import type { RequiredIn } from "@aiszlab/relax/types";
import { AnimatePresence } from "framer-motion";
import { Portal } from "../portal";

const styles = stylex.create({
  holder: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    pointerEvents: "none",
    rowGap: spacing.medium,
    padding: spacing.medium,
  },
});

const Holder = forwardRef<MessageRef>((_, ref) => {
  const [messages, setMessages] = useState<Map<string, RequiredIn<MessageConfig, "key">>>(new Map());

  useImperativeHandle(ref, () => ({
    add: (configuration) => {
      if (messages.has(configuration.key)) return;
      setMessages((shown) => new Map([...shown, [configuration.key, configuration]]));
    },
  }));

  /// remove message
  const hidden = useCallback(
    (id: string) =>
      setMessages((shown) => {
        const next = new Map(shown);
        next.delete(id);
        return next;
      }),
    []
  );

  return (
    <Portal destroyable open={messages.size > 0}>
      <div {...stylex.props(styles.holder)}>
        <AnimatePresence>
          {Array.from(messages.values()).map(({ content, ...item }) => (
            <Message
              onClose={() => {
                hidden(item.key);
              }}
              {...item}
            >
              {content}
            </Message>
          ))}
        </AnimatePresence>
      </div>
    </Portal>
  );
});

export default Holder;
