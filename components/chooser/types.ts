import type { ReactNode } from "react";

/**
 * @description
 * chooser props
 */
export interface ChooserProps {
  /**
   * @description
   * selection
   */
  selections: ReactNode;

  /**
   * @description
   * options
   */
  options: ReactNode;
}

/**
 * @description
 * options render props
 */
export interface OptionsRenderProps {
  /**
   * @description
   * width
   */
  width?: number;
}
