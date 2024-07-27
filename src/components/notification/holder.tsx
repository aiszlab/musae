import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import type { HolderProps, NotificationWithoutKeyAndPlacement, HolderRef, Placement } from "./types";
import { Portal } from "../portal";
import { AnimatePresence } from "framer-motion";
import Notification from "./notification";
import * as stylex from "@stylexjs/stylex";
import { positions, spacing } from "../theme/tokens.stylex";
import { useEvent, useIdentity } from "@aiszlab/relax";

const styles = stylex.create({
  holder: {
    position: "fixed",
    zIndex: positions.notification,
    display: "flex",
    flexDirection: "column",
    pointerEvents: "none",
    rowGap: spacing.medium,
    padding: spacing.medium,
  },

  top: {
    insetBlockStart: 0,
    insetInline: 0,
    alignItems: "center",
  },

  "top-right": {
    insetBlockStart: 0,
    insetInlineEnd: 0,
  },

  "top-left": {
    insetBlockStart: 0,
    insetInlineStart: 0,
  },

  bottom: {
    insetBlockEnd: 0,
    insetInline: 0,
    alignItems: "center",
  },

  "bottom-left": {
    insetBlockEnd: 0,
    insetInlineStart: 0,
  },

  "bottom-right": {
    insetBlockEnd: 0,
    insetInlineEnd: 0,
  },
});

const Holder = forwardRef<HolderRef, HolderProps>(({ defaultNotifications }, ref) => {
  const [, unique] = useIdentity();
  const [placements, setPlacements] = useState(
    () => new Map<Placement, Map<string, NotificationWithoutKeyAndPlacement>>(),
  );

  const hidden = useEvent((placement: Placement, key: string) => {
    // search with `placement` + `key`, already remove, do nothing
    if (!placements.get(placement)?.has(key)) return;

    setPlacements((prev) => {
      const next = new Map(prev);
      const placed = new Map(next.get(placement));

      placed.delete(key);

      if (placed.size === 0) {
        next.delete(placement);
      } else {
        next.set(placement, placed);
      }

      return next;
    });
  });

  const add = useEvent<HolderRef["add"]>(({ placement = "top-right", key = unique(), ...configuration }) => {
    // search with `placement` + `key`, already exitst, do nothing
    if (!!placements.get(placement)?.has(key)) return;

    setPlacements((prev) => {
      const next = new Map(prev);
      const placed = new Map(next.get(placement));

      placed.set(key, configuration);
      next.set(placement, placed);

      return next;
    });
  });

  useEffect(() => {
    defaultNotifications?.forEach((notification) => {
      add(notification);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useImperativeHandle(
    ref,
    () => {
      return {
        add,
      };
    },
    [add],
  );

  return Array.from(placements.entries()).map(([placement, notifications]) => {
    const styled = stylex.props(styles.holder, styles[placement]);

    return (
      <Portal destroyable open={notifications.size > 0} key={placement}>
        <div className={styled.className} style={styled.style}>
          <AnimatePresence mode="popLayout">
            {Array.from(notifications.entries()).map(([key, { description, ...item }]) => (
              <Notification
                {...item}
                placement={placement}
                key={key}
                description={description}
                onClose={() => {
                  hidden(placement, key);
                }}
              />
            ))}
          </AnimatePresence>
        </div>
      </Portal>
    );
  });
});

export default Holder;
