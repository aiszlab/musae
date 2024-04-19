import { type FocusEventHandler, type MouseEventHandler, useCallback, useMemo } from "react";
import { isFunction, useEvent } from "@aiszlab/relax";
import { useAnimate } from "framer-motion";
import type { PickerProps } from "./types";

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

/**
 * @description
 * common animations for picker dropdown
 */
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

/**
 * @description
 * children render
 */
export const useChildren = ({ children, isFocused }: Pick<PickerProps, "children"> & { isFocused: boolean }) => {
  return useMemo(() => {
    if (isFunction(children)) {
      return children({ isFocused });
    }
    return children;
  }, [children, isFocused]);
};
