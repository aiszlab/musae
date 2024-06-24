import type { ReactNode } from "react";

/**
 * @description
 * `Upload` props
 */
export type UploadProps = {
  /**
   * @description
   * on upload wrapper click handler
   * @default void 0
   */
  onClick?: () => void;

  /**
   * @description
   * disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * @description
   * multiple
   * @default false
   */
  multiple?: boolean;

  /**
   * @description
   * children
   * @default void 0
   */
  children?: ReactNode;

  /**
   * @description
   * uploader
   * @default void 0
   */
  uploader?: (file: File) => Promise<string>;

  /**
   * @description
   * error
   * @default void 0
   */
  onError?: (error: unknown) => void;
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
