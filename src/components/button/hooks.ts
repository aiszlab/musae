import { type MouseEvent, useCallback } from "react";
import { useRipple } from "../ripple";
import type { ButtonProps } from "./types";
import { chain } from "@aiszlab/relax";

/**
 * @description
 * hooks for button component
 */
export const useButton = (props: Pick<ButtonProps, "onClick">) => {
  const { ripples, add, clear } = useRipple();

  const ripple = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      add(e);
    },
    [add]
  );

  return {
    ripples,
    onClick: chain(props.onClick, ripple),
    clear,
  };
};
