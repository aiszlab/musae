import type { FileItem, RemoteFileItem, UploadedItem } from "musae/types/upload";

/**
 * @description
 * check current value is provided by user
 */
export const isRemoteFile = (file: FileItem): file is RemoteFileItem => {
  return !file.key || !(file as UploadedItem).file;
};
