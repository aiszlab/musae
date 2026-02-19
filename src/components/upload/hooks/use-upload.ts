import { useControlledState, useEvent, useIdentity } from "@aiszlab/relax";
import type { FileItem, UploadedItem } from "../../../types/upload";

interface Props {
  uploader: ((file: File) => Promise<string>) | undefined;
  limit: number;
  multiple: boolean;
  value?: FileItem[];
  onError: ((error: unknown) => void) | undefined;
  onChange: ((files: FileItem[]) => void) | undefined;
}

export function useUpload({ uploader, limit, multiple, value: _value, onError, onChange }: Props) {
  const [value, setValue] = useControlledState<FileItem[]>(_value, { defaultState: [] });
  const [, identity] = useIdentity();

  const isFull = value.length >= limit;
  const isMultiple = multiple && limit > 1;

  const resolveUploadItem = useEvent((fileItem: UploadedItem) => {
    const resolvedFileItems = value.map((item) => {
      return item.key === fileItem.key ? fileItem : item;
    });

    setValue(resolvedFileItems);
    onChange?.(resolvedFileItems);

    if (fileItem.status === "error") {
      onError?.(fileItem.error);
    }
  });

  const add = async (files: File[]) => {
    if (files.length === 0) return;
    if (isFull) return;

    const items = new Map(value.map((item) => [item.key, item]));

    files.forEach((file) => {
      const key = identity();
      const uploadingItem: FileItem = {
        key,
        file,
        status: uploader ? "loading" : "success",
      };

      items.set(key, uploadingItem);

      if (!uploader) return;

      Promise.resolve().then(async () => {
        // use custom uploader to upload file
        // get remote url path
        const url = await uploader(file).catch((error) => {
          return new Error(error.message);
        });

        resolveUploadItem({
          ...uploadingItem,
          ...(url instanceof Error ? { status: "error", error: url } : { status: "success", url }),
        });
      });
    });

    const fileItems = Array.from(items.values());
    setValue(fileItems);
    onChange?.(fileItems);
  };

  const remove = (index: number) => {
    const removedFileItems = value.toSpliced(index, 1);
    setValue(removedFileItems);
    onChange?.(removedFileItems);
  };

  return { add, isMultiple, value, remove };
}
