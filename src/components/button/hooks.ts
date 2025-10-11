import { type MouseEvent } from "react";
import { useRipple } from "../ripple";
import type { ButtonProps } from "../../types/button";
import { useControlledState, useEvent } from "@aiszlab/relax";

/**
 * @description
 * hooks for button component
 */
export const useButton = ({
  onClick,
  loading,
  disabled = false,
  autoLoading = false,
}: Pick<ButtonProps, "onClick" | "loading" | "disabled" | "autoLoading">) => {
  const [isLoading, setIsLoading] = useControlledState(loading);
  const { ripples, add, clear } = useRipple();

  const click = useEvent(async (event: MouseEvent<HTMLButtonElement>) => {
    add(event);

    try {
      if (autoLoading) {
        setIsLoading(true);
      }

      await onClick?.(event);
    } finally {
      if (autoLoading) {
        setIsLoading(false);
      }
    }
  });

  return {
    ripples,
    click,
    clear,
    isLoading,
    isDisabled: disabled || isLoading,
  };
};
