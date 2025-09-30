import { type MouseEvent } from "react";
import { useRipple } from "../ripple";
import type { ButtonProps } from "../../types/button";
import { useControlledState, useEvent } from "@aiszlab/relax";

/**
 * @description
 * hooks for button component
 */
export const useButton = ({ onClick, loading }: Pick<ButtonProps, "onClick" | "loading">) => {
  const [isLoading, setIsLoading] = useControlledState(loading);
  const { ripples, add, clear } = useRipple();

  const click = useEvent(async (event: MouseEvent<HTMLButtonElement>) => {
    add(event);

    setIsLoading(true);
    await Promise.try(() => onClick?.(event)).finally(() => {
      setIsLoading(false);
    });
  });

  return {
    ripples,
    click,
    clear,
    isLoading,
  };
};
