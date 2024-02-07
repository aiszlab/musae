import type { Key } from "react";

/**
 * @description
 * ripple
 */
export type Ripple = {
  /**
   * @description
   * uuid,for list render
   */
  key: Key;

  /**
   * @description
   * trigger position x
   */
  x: number;

  /**
   * @description
   * trigger position y
   */
  y: number;

  /**
   * @description
   * ripple size
   */
  size: number;
};

/**
 * @description
 * ripple props
 */
export type RippleProps = {
  /**
   * @description
   * rendered ripples
   */
  ripples: Ripple[];

  /**
   * @description
   * clear ripple handler
   */
  onClear: (key: Key) => void;
};
