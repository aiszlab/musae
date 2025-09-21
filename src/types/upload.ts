import type { Key, ReactNode } from "react";
import { ComponentProps } from "./element";

/**
 * @description
 * status
 */
export type UploadStatus = "success" | "error" | "loading";

export type RemoteFileItem = {
  /**
   * @description
   * unique key
   */
  key?: Key;

  /**
   * @description
   * file url
   */
  url: string;
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

export type FileItem = UploadedItem | RemoteFileItem;

/**
 * @description
 * `Upload` props
 */
export type UploadProps = ComponentProps & {
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
  value?: FileItem[] | FileItem;

  /**
   * @description
   * value change handler
   * @default void 0
   */
  onChange?: (files: FileItem[]) => void;

  /**
   * @description
   * limit
   * @default Infinity
   */
  limit?: number;

  /**
   * @description
   * item render
   */
  renderItem?: "picture" | ((item: FileItem) => ReactNode) | boolean;
};

/**
 * @description
 * Uploaded List Ref
 */
export type UploadedListRef = {
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
export interface UploadedListProps
  extends Pick<UploadProps, "uploader" | "onError" | "onChange" | "limit"> {
  /**
   * 文件列表
   */
  value: FileItem[];
}

/**
 * @description
 * context value
 */
export type ContextValue = {
  /**
   * @link {UploadProps.renderItem}
   */
  renderItem?: UploadProps["renderItem"];
};
