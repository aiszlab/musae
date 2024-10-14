import type { Key, ReactNode } from "react";

/**
 * @description
 * status
 */
export type UploadStatus = "success" | "error" | "loading";

export type ControlledValue = {
  url: string;
  key?: Key;
};

/**
 * @description
 * uploaded item
 */
export type UploadedItem = {
  /**
   * @description
   * unique key
   */
  key: Key;

  /**
   * @description
   * file
   */
  file?: File;

  /**
   * {@link UploadStatus}
   */
  status: UploadStatus;

  /**
   * @description
   * url
   */
  url?: string;

  /**
   * @description
   * error
   */
  error?: Error;
};

export type Value = UploadedItem | ControlledValue;

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

  /**
   * @description
   * value
   * @default void 0
   */
  value?: Value[];

  /**
   * @description
   * value change handler
   * @default void 0
   */
  onChange?: (value: Value[]) => void;

  /**
   * @description
   * limit
   * @default Infinity
   */
  limit?: number;
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
export type UploadedsProps = Pick<
  UploadProps,
  "uploader" | "onError" | "value" | "onChange" | "limit"
>;
