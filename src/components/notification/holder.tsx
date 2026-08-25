import styles from "./styles";
import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import type {
  HolderProps,
  NotificationWithoutKeyAndPlacement,
  HolderRef,
  Placement,
} from "../../types/notification";
import { Portal } from "../portal";
import { AnimatePresence } from "motion/react";
import Notification from "./notification";
import { props as $props } from "@stylexjs/stylex";
import { useEvent, useIdentity, useMounted } from "@aiszlab/relax";

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

  const add = useEvent<HolderRef["add"]>(
    ({ placement = "top-right", key = unique(), ...configuration }) => {
      // search with `placement` + `key`, already exitst, do nothing
      if (placements.get(placement)?.has(key)) return;

      setPlacements((prev) => {
        const next = new Map(prev);
        const placed = new Map(next.get(placement));

        placed.set(key, configuration);
        next.set(placement, placed);

        return next;
      });
    },
  );

  useMounted(() => {
    defaultNotifications?.forEach((notification) => {
      add(notification);
    });
  });

  useImperativeHandle(ref, () => {
    return {
      add,
    };
  }, [add]);

  return Array.from(placements.entries()).map(([placement, notifications]) => {
    const styled = $props(styles.holder.base, styles.holder[placement]);

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
