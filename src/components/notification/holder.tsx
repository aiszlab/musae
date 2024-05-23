import React, { forwardRef, useImperativeHandle, useState } from "react";
import { NotificationConfig, NotifierRef, Placement } from "./types";
import { Portal } from "../portal";
import { AnimatePresence } from "framer-motion";
import Notification from "./notification";
import * as stylex from "@stylexjs/stylex";
import { positions, spacing } from "../theme/tokens.stylex";
import { useEvent } from "@aiszlab/relax";

const styles = stylex.create({
  holder: {
    position: "fixed",
    insetBlockStart: 0,
    insetInline: 0,
    zIndex: positions.message,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    pointerEvents: "none",
    rowGap: spacing.medium,
    padding: spacing.medium,
  },
});

const Holder = forwardRef<NotifierRef>((_, ref) => {
  const [placements, setPlacements] = useState(
    new Map<Placement, Map<string, Omit<NotificationConfig, "key" | "placement">>>(new Map())
  );

  useImperativeHandle(ref, () => {
    return {
      add: ({ placement = "topRight", key, ...configuration }) => {
        // search with `placement` + `key`, already exitst, do nothing
        if (!!placements.get(placement)?.has(key)) return;

        setPlacements((prev) => {
          const next = new Map(prev);
          const placed = new Map(next.get(placement));

          placed.set(key, configuration);
          next.set(placement, placed);

          return next;
        });
      },
    };
  });

  const hidden = useEvent((placement: Placement, key: string) => {
    // search with `placement` + `key`, already remove, do nothing
    if (!placements.get(placement)?.has(key)) return;

    setPlacements((prev) => {
      const next = new Map(prev);
      const placed = new Map(next.get(placement));

      placed.delete(key);
      placed.size === 0 && next.delete(placement);

      return next;
    });
  });

  return Array.from(placements.entries()).map(([placement, notifications]) => {
    return (
      <Portal destroyable open={notifications.size > 0} key={placement}>
        <div {...stylex.props(styles.holder)}>
          <AnimatePresence>
            {Array.from(notifications.entries()).map(([key, { content, ...item }]) => (
              <Notification
                {...item}
                placement={placement}
                key={key}
                onClose={() => {
                  hidden(placement, key);
                }}
              >
                {content}
              </Notification>
            ))}
          </AnimatePresence>
        </div>
      </Portal>
    );
  });
});

export default Holder;
