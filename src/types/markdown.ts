import { ComponentProps } from "./element";

/**
 * @description
 * markdown props
 */
export type MarkdownProps = ComponentProps & {
  /**
   * @description
   * value
   */
  value: string;

  /**
   * @description
   * is in client, render html
   */
  isInClient: boolean;
};
