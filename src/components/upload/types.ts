/**
 * @description
 * `Upload` props
 */
export type UploadProps = {
  /**
   * @description
   * on upload wrapper click handler
   */
  onClick: () => void;

  /**
   * @description
   * disabled
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * @description
   * multiple
   *
   * @default false
   */
  multiple?: boolean;
};
