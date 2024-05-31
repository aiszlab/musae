import React, { ChangeEvent, DragEvent, KeyboardEvent, forwardRef, useRef } from "react";
import { UploadProps } from "./types";
import stylex from "@stylexjs/stylex";
import { useEvent } from "@aiszlab/relax";
import request from "./request";
import { Keyboard } from "../../utils/keyboard";

const styles = stylex.create({
  input: {
    display: "none",
  },
});

const Upload = forwardRef(
  ({
    onClick: _onClick,
    disabled,
    multiple,
    children,
    action,
    method = "POST",
    data,
    onError,
    onProgress,
  }: UploadProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    // file upload
    const upload = useEvent((files: File[]) => {
      Promise.all(
        Array.from(files ?? []).map((file) =>
          request({
            action,
            data,
            file,
            method,
            onError: (error) => {
              onError?.(error);
            },
            onProgress: (e) => {
              onProgress?.(e);
            },
          })
        )
      );
    });

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { files } = e.target;
      if (!files) return;
      upload(Array.from(files));
    };

    const onClick = useEvent(() => {
      inputRef.current?.click();
      _onClick();
    });

    const onKeyDown = useEvent((e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key !== Keyboard.Enter) return;
      onClick();
    });

    const onDrop = (e: DragEvent<HTMLDivElement>) => {
      const files = Array.from(e.dataTransfer.files).filter((file, index) => {
        // only one file when not multiple
        if (!multiple && index > 0) return false;
        return true;
      });

      upload(files);
    };

    const styled = {
      input: stylex.props(styles.input),
    };

    return (
      <div {...(!disabled && { onClick, onKeyDown, onDrop, onDragOver: onDrop })}>
        <input
          ref={inputRef}
          type="file"
          onClick={(e) => e.stopPropagation()}
          className={styled.input.className}
          style={styled.input.style}
          multiple={multiple}
          onChange={onChange}
        />
        {children}
      </div>
    );
  }
);

export default Upload;
