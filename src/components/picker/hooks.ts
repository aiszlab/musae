import { FocusEventHandler, MouseEventHandler, useCallback } from "react";
import { useEvent } from "@aiszlab/relax";
import { useAnimate } from "framer-motion";

/**
 * @description
 * use events for input
 */
export const useEvents = ({
  onBlur,
  onClick,
}: {
  onBlur: FocusEventHandler<HTMLDivElement>;
  onClick: MouseEventHandler<HTMLInputElement>;
}) => {
  const blur = useCallback<FocusEventHandler<HTMLInputElement>>(
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

export const useFadeAnimate = () => {
  const [scope, animate] = useAnimate<HTMLDivElement>();

  const fadeIn = useEvent(async () => {
    await animate(scope.current, { opacity: 1 }, { duration: 0.2 });
  });

  const fadeOut = useEvent(async () => {
    await animate(scope.current, { opacity: 0 }, { duration: 0.2 });
  });

  return {
    scope,
    fadeIn,
    fadeOut,
  };
};
