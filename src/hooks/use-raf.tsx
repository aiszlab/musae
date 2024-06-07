import { useEvent } from "@aiszlab/relax";
import { useRef } from "react";

/**
 * @description
 * raf
 */
export const useRaf = (
  _callback: Function,
  {
    timely = false,
  }: {
    timely?: boolean;
  } = {}
) => {
  const callback = useEvent(_callback);
  const timed = useRef<number | null>(null);
  const isTimed = useRef(false);

  return () => {
    if (isTimed.current) return;
    isTimed.current = true;

    timely && callback();

    timed.current = requestAnimationFrame(() => {
      !timely && callback();
    });
  };
};
