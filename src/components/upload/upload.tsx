import React, {
  type ChangeEvent,
  type DragEvent,
  type KeyboardEvent,
  cloneElement,
  isValidElement,
  useMemo,
  useRef,
} from "react";
import type { UploadProps } from "../../types/upload";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { useEvent } from "@aiszlab/relax";
import { Keyboard } from "../../utils/keyboard";
import UploadedList from "./uploaded-list";
import { Button } from "../button";
import { useLocale } from "../../locale";
import { sizes, spacing } from "../theme/tokens.stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { CLASS_NAMES, Context } from "./context";
import { stringify } from "@aiszlab/relax/class-name";
import { useUpload } from "./hooks/use-upload";

const styles = $create({
  uploader: {
    display: "inline-block",
  },

  input: {
    display: "none",
  },

  upload: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.xxsmall,
    width: sizes.fit,
  },
});

const Upload = ({
  onClick,
  disabled,
  multiple = true,
  children: _children,
  uploader,
  onError,
  value: _value,
  onChange,
  limit = Infinity,
  renderItem = true,
  className,
  style,
}: UploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [_locale] = useLocale("upload");
  const classNames = useClassNames(CLASS_NAMES);
  const { add, isMultiple, value, remove } = useUpload({
    limit,
    multiple,
    onError,
    value: _value,
    uploader,
    onChange,
  });

  const changeFiles = useEvent((e: ChangeEvent<HTMLInputElement>) => {
    add(Array.from(e.target.files ?? []));
  });

  const click = useEvent(() => {
    inputRef.current?.click();
    onClick?.();
  });

  const downKey = useEvent((e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== Keyboard.Enter) return;
    click();
  });

  const dropFiles = (e: DragEvent<HTMLDivElement>) => {
    const files = Array.from(e.dataTransfer.files);
    add(isMultiple ? files : files.slice(0, 1));
  };

  const styled = {
    upload: $props(styles.upload),
    input: $props(styles.input),
    uploader: $props(styles.uploader),
  };

  const children = useMemo(() => {
    if (!_children) {
      return <Button disabled={disabled}>+ {_locale.upload}</Button>;
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
        {(multiple || value.length === 0) && (
          <div
            {...(!disabled && {
              onClick: click,
              onKeyDown: downKey,
              onDrop: dropFiles,
              onDragOver: dropFiles,
            })}
            className={stringify(classNames.uploader, styled.uploader.className)}
            style={styled.uploader.style}
          >
            <input
              ref={inputRef}
              type="file"
              value=""
              onClick={(e) => e.stopPropagation()}
              className={styled.input.className}
              style={styled.input.style}
              multiple={multiple}
              onChange={changeFiles}
            />

            {children}
          </div>
        )}

        <UploadedList value={value} onRemove={remove} />
      </div>
    </Context.Provider>
  );
};

export default Upload;
