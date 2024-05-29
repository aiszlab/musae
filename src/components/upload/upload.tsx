import React, { ChangeEvent, forwardRef } from "react";
import { UploadProps } from "./types";
import stylex from "@stylexjs/stylex";
import { useEvent } from "@aiszlab/relax";

const styles = stylex.create({
  input: {
    display: "none",
  },
});

const Upload = forwardRef(({ onClick, disabled, multiple }: UploadProps) => {
  const styled = {
    input: stylex.props(styles.input),
  };

  // file upload
  const upload = useEvent((file: File) => {});

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    Promise.all(Array.from(files ?? []).map((file) => upload(file)));
  };

  return (
    <div onClick={onClick}>
      <input
        type="file"
        onClick={(e) => e.stopPropagation()}
        className={styled.input.className}
        style={styled.input.style}
        multiple={multiple}
        onChange={onChange}
      />
    </div>
  );
});

export default Upload;
