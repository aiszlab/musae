import type { ReactNode } from "react";

export type UploadProgressEvent = ProgressEvent<EventTarget> & {
  percent?: number;
};

export class UploadRequestError extends Error {
  readonly status: number;
  readonly method: UploadRequestOptions["method"];
  readonly action: string;

  constructor(options: { status: number; method: UploadRequestOptions["method"]; action: string }) {
    super(`cannot ${options.method} ${options.action} ${options.status}'`);

    this.status = options.status;
    this.method = options.method;
    this.action = options.action;
  }
}

type UploadRequestMethod = "POST" | "PUT" | "PATCH" | "post" | "put" | "patch";

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
   * method
   */
  method?: UploadRequestMethod;

  /**
   * @description
   * action
   */
  action: string;

  /**
   * @description
   * progress event
   */
  onProgress?: (event: UploadProgressEvent) => void;

  /**
   * @description
   * data
   */
  data?: unknown;

  /**
   * @description
   * error
   */
  onError?: (event: UploadRequestError) => void;
};

/**
 * @description
 * upload request options
 */
export type UploadRequestOptions = Required<
  Pick<UploadProps, "data" | "onProgress" | "method" | "action" | "onError">
> & {
  /**
   * @description
   * file
   */
  file: Blob;
};
