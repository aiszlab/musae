import React, { ChangeEvent, forwardRef, useRef } from "react";
import { UploadProps } from "./types";
import stylex from "@stylexjs/stylex";
import { useEvent } from "@aiszlab/relax";

const styles = stylex.create({
  input: {
    display: "none",
  },
});

const Upload = forwardRef(({ onClick, disabled, multiple, children }: UploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const styled = {
    input: stylex.props(styles.input),
  };

  // file upload
  const upload = useEvent((file: File) => {
    console.log("file====", file);
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    Promise.all(Array.from(files ?? []).map((file) => upload(file)));
  };

  const click = useEvent(() => {
    inputRef.current?.click();
    onClick();
  });

  return (
    <div onClick={click}>
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
});

export default Upload;
