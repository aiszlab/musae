import { FocusEventHandler, MouseEventHandler, useCallback } from "react";

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
