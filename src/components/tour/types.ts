/**
 * @description
 * tour step
 */
export type TourStep = {
  /**
   * @description
   * title
   */
  title: string;

  /**
   * @description
   * description
   */
  description: string;

  /**
   * @description
   * target
   */
  target: Element | (() => Element);
};

/**
 * @description
 * tour props
 */
export type TourProps = {
  /**
   * @description
   * open
   */
  open: boolean;

  /**
   * @description
   * steps
   */
  steps: TourStep[];

  /**
   * @description
   * close handler
   */
  onClose?: () => void;
};
