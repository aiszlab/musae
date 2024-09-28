import React, { ChangeEvent, DragEvent, KeyboardEvent, cloneElement, useMemo, useRef } from "react";
import type { UploadProps, UploadedsRef } from "musae/types/upload";
import stylex from "@stylexjs/stylex";
import { useEvent } from "@aiszlab/relax";
import { Keyboard } from "../../utils/keyboard";
import Uploadeds from "./uploadeds";
import { Button } from "../button";
import { useLocale } from "../../locale";
import { ComponentToken } from "../../utils/component-token";
import { spacing } from "../theme/tokens.stylex";

const styles = stylex.create({
  input: {
    display: "none",
  },

  upload: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.xsmall,
  },
});

const Upload = ({
  onClick: _onClick,
  disabled,
  multiple,
  children: _children,
  uploader,
  onError,
}: UploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const uploadedsRef = useRef<UploadedsRef>(null);
  const [_locale] = useLocale(ComponentToken.Upload);

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
    _onClick?.();
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
    upload: stylex.props(styles.upload),
    input: stylex.props(styles.input),
  };

  const children = useMemo(() => {
    if (!_children) {
      return <Button disabled={disabled}>{_locale.upload}</Button>;
    }

    // @ts-ignore
    return cloneElement(_children, { disabled });
  }, [_children, disabled, _locale]);

  return (
    <div className={styled.upload.className} style={styled.upload.style}>
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

      <Uploadeds ref={uploadedsRef} uploader={uploader} onError={onError} />
    </div>
  );
};

export default Upload;
