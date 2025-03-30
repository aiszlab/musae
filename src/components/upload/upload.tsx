import React, {
  ChangeEvent,
  DragEvent,
  KeyboardEvent,
  cloneElement,
  isValidElement,
  useMemo,
  useRef,
} from "react";
import type { UploadProps, UploadedListRef } from "../../types/upload";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { useEvent } from "@aiszlab/relax";
import { Keyboard } from "../../utils/keyboard";
import UploadedList from "./uploaded-list";
import { Button } from "../button";
import { useLocale } from "../../locale";
import { spacing } from "../theme/tokens.stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { CLASS_NAMES, Context } from "./context";
import { stringify } from "@aiszlab/relax/class-name";

const styles = $create({
  input: {
    display: "none",
  },

  upload: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.xxsmall,
  },
});

const Upload = ({
  onClick: _onClick,
  disabled,
  multiple,
  children: _children,
  uploader,
  onError,
  value,
  onChange,
  limit,
  renderItem,
  className,
  style,
}: UploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const uploadedListRef = useRef<UploadedListRef>(null);
  const [_locale] = useLocale("upload");
  const classNames = useClassNames(CLASS_NAMES);

  // file upload
  const upload = useEvent((files: File[]) => {
    files.forEach((file) => {
      uploadedListRef.current?.add(file);
    });
  });

  const _onChange = useEvent((e: ChangeEvent<HTMLInputElement>) => {
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
    upload: $props(styles.upload),
    input: $props(styles.input),
  };

  const children = useMemo(() => {
    if (!_children) {
      return <Button disabled={disabled}>{_locale.upload}</Button>;
    }

    if (!isValidElement<{ disabled?: boolean }>(_children)) return _children;

    return cloneElement(_children, { disabled });
  }, [_children, disabled, _locale]);

  return (
    <Context.Provider value={{ renderItem, classNames }}>
      <div
        className={stringify(classNames.upload, className, styled.upload.className)}
        style={{
          ...styled.upload.style,
          ...style,
        }}
      >
        <div {...(!disabled && { onClick, onKeyDown, onDrop, onDragOver: onDrop })}>
          <input
            ref={inputRef}
            type="file"
            value=""
            onClick={(e) => e.stopPropagation()}
            className={styled.input.className}
            style={styled.input.style}
            multiple={multiple}
            onChange={_onChange}
          />
          {children}
        </div>

        <UploadedList
          ref={uploadedListRef}
          value={value}
          uploader={uploader}
          onError={onError}
          onChange={onChange}
          limit={limit}
        />
      </div>
    </Context.Provider>
  );
};

export default Upload;
