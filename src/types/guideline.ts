import { ComponentProps } from "./element";

/**
 * @description
 * guideline props
 */
export type GuidelineProps = ComponentProps & {
  /**
   * @description
   * figure
   */
  figure: string;

  /**
   * @description
   * recommend
   */
  recommend?: boolean;

  /**
   * @description
   * caption
   */
  caption?: string;
};
