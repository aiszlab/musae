import { FocusEventHandler, MouseEventHandler, useCallback } from "react";

/**
 * @description
 * use events for input
 */
export const useEvents = ([[_blur], [onBlur, onClick]]: [
  [_blur: VoidFunction],
  [FocusEventHandler<HTMLDivElement>, MouseEventHandler<HTMLInputElement>]
]) => {
  const blur = useCallback<FocusEventHandler<HTMLInputElement>>(
    (e) => {
      _blur();
      onBlur?.(e);
      e.stopPropagation();
    },
    [_blur, onBlur]
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
