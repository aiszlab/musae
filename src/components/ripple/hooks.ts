import { type MouseEvent, type Key, useCallback, useState, useMemo } from "react";
import type { Ripple } from "./types";

export function useRipple() {
  const [_ripples, _setRipples] = useState<Map<Key, Omit<Ripple, "key">>>(new Map());

  const add = useCallback((event: MouseEvent<HTMLElement>) => {
    const trigger = event.currentTarget;
    const size = Math.max(trigger.clientWidth, trigger.clientHeight);
    const { x, y } = trigger.getBoundingClientRect();

    _setRipples((prev) => {
      return new Map(prev).set(crypto.randomUUID(), {
        size,
        x: event.clientX - x - size / 2,
        y: event.clientY - y - size / 2,
      });
    });
  }, []);

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

  console.log("ripples====", ripples);

  return { ripples, add, clear };
}
