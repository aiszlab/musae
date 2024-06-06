import type { ReactNode } from "react";

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

  /**
   * @description
   * children
   */
  children?: ReactNode;

  /**
   * @description
   * uploader
   */
  uploader: (file: File) => Promise<string>;

  /**
   * @description
   * error
   */
  onError?: (event: any) => void;
};

/**
 * @description
 * Uploadeds Ref
 */
export type UploadedsRef = {
  /**
   * @description
   * add
   */
  add: (file: File) => void;
};

/**
 * @description
 * uploaded list props
 */
export type UploadedsProps = Pick<UploadProps, "uploader">;

/**
 * @description
 * status
 */
export type UploadStatus = "success" | "error" | "loading";

/**
 * @description
 * uploaded item
 */
export type UploadedItem = {
  /**
   * @description
   * file
   */
  file: File;

  /**
   * {@link UploadStatus}
   */
  status: UploadStatus;
};
