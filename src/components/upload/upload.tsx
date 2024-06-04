import React, { ChangeEvent, DragEvent, KeyboardEvent, useRef } from "react";
import { UploadProps, UploadedsRef } from "./types";
import stylex from "@stylexjs/stylex";
import { useEvent } from "@aiszlab/relax";
import { Keyboard } from "../../utils/keyboard";
import Uploadeds from "./uploadeds";

const styles = stylex.create({
  input: {
    display: "none",
  },
});

const Upload = ({ onClick: _onClick, disabled, multiple, children, uploader, onError }: UploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const uploadedsRef = useRef<UploadedsRef>(null);

  // file upload
  const upload = useEvent((files: File[]) => {
    files.forEach((file) => {
      uploadedsRef.current?.add(file);
    });
  });

  const onChange = useEvent((e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;
    upload(Array.from(files));
  });

  const onClick = useEvent(() => {
    inputRef.current?.click();
    _onClick();
  });

  const onKeyDown = useEvent((e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== Keyboard.Enter) return;
    onClick();
  });

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    const files = Array.from(e.dataTransfer.files).filter((_, index) => {
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
    <div>
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

      <Uploadeds ref={uploadedsRef} />
    </div>
  );
};

export default Upload;
