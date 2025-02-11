import { type MouseEvent } from "react";
import { useRipple } from "../ripple";
import type { ButtonProps } from "../../types/button";
import { useEvent } from "@aiszlab/relax";

/**
 * @description
 * hooks for button component
 */
export const useButton = ({ onClick: click }: Pick<ButtonProps, "onClick">) => {
  const { ripples, add, clear } = useRipple();

  const onClick = useEvent((event: MouseEvent<HTMLButtonElement>) => {
    click?.(event);
    add(event);
  });

  return {
    ripples,
    onClick,
    clear,
  };
};
