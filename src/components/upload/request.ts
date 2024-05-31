import { toFormData } from "@aiszlab/relax";
import { UploadRequestError, type UploadProgressEvent, type UploadRequestOptions } from "./types";

export default function request(options: UploadRequestOptions) {
  const xhr = new XMLHttpRequest();

  if (options.onProgress && xhr.upload) {
    xhr.upload.onprogress = (e: UploadProgressEvent) => {
      if (e.total > 0) {
        e.percent = (e.loaded / e.total) * 100;
      }
      options.onProgress(e);
    };
  }

  const formData = toFormData(options.data);
  formData.append("file", options.file);

  xhr.onerror = () => {
    options.onError(
      new UploadRequestError({
        action: options.action,
        status: xhr.status,
        method: options.method,
      })
    );
  };

  xhr.onload = function onload() {
    if (xhr.status < 200 || xhr.status >= 300) {
      return options.onError(
        new UploadRequestError({
          action: options.action,
          status: xhr.status,
          method: options.method,
        })
      );
    }
  };

  xhr.open(options.method, options.action, true);

  xhr.send(formData);

  return {
    abort() {
      xhr.abort();
    },
  };
}
