import { type FocusEventHandler, type MouseEventHandler, useCallback } from "react";

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
