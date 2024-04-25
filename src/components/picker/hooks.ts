import { type FocusEventHandler, type MouseEventHandler, useCallback } from "react";
import { useEvent } from "@aiszlab/relax";
import { useAnimate } from "framer-motion";
import { PickerProps } from "./types";

/**
 * @description
 * use events for input
 */
export const useEvents = ({
  onBlur,
  onClick,
}: {
  onBlur: FocusEventHandler<HTMLDivElement>;
  onClick: MouseEventHandler<HTMLDivElement>;
}) => {
  const blur = useCallback<FocusEventHandler<HTMLDivElement>>(
    (e) => {
      onBlur?.(e);
      e.stopPropagation();
    },
    [onBlur]
  );

  /// click handler
  const click = useCallback<typeof onClick>(
    (e) => {
      onClick?.(e);
      e.stopPropagation();
    },
    [onClick]
  );

  return {
    blur,
    click,
  };
};

/**
 * @description
 * common animations for picker dropdown
 */
export const useFadeAnimate = ({ onPopperExite }: Pick<PickerProps, "onPopperExite">) => {
  const [scope, animate] = useAnimate<HTMLDivElement>();

  const fadeIn = useEvent(async () => {
    await animate(scope.current, { opacity: 1 }, { duration: 0.2 });
  });

  const exit = useEvent(async () => {
    await onPopperExite?.();
    await animate(scope.current, { opacity: 0 }, { duration: 0.2 });
  });

  return {
    scope,
    fadeIn,
    exit,
  };
};
