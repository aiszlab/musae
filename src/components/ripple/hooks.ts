import { type MouseEvent, type Key, useCallback, useState, useMemo } from "react";
import type { Ripple } from "musae/types/ripple";
import { useIdentity } from "@aiszlab/relax";

type Ripples = Map<Key, Omit<Ripple, "key">>;

export function useRipple({ isDisabled = false }: { isDisabled?: boolean } = {}) {
  const [_ripples, _setRipples] = useState<Ripples>(new Map());
  const [, unique] = useIdentity();

  const add = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (isDisabled) return;

      const trigger = event.currentTarget;
      const size = Math.max(trigger.clientWidth, trigger.clientHeight);
      const { x, y } = trigger.getBoundingClientRect();

      _setRipples((prev) => {
        return new Map(prev).set(unique(), {
          size,
          x: event.clientX - x - size / 2,
          y: event.clientY - y - size / 2,
        });
      });
    },
    [isDisabled],
  );

  const clear = useCallback((key: Key) => {
    _setRipples((prev) => {
      const next = new Map(prev);
      next.delete(key);
      return next;
    });
  }, []);

  const ripples = useMemo<Ripple[]>(() => {
    return Array.from(_ripples.entries()).map(([key, value]) => ({
      ...value,
      key,
    }));
  }, [_ripples]);

  return { ripples, add, clear };
}
