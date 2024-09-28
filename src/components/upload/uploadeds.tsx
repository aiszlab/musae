import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import type { UploadStatus, UploadedItem, UploadedsProps, UploadedsRef } from "musae/types/upload";
import { Loading, Delete, AttachFile } from "musae/icons";
import { useEvent } from "@aiszlab/relax";
import { typography } from "../theme/theme";

const styles = stylex.create({
  uploadeds: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.xsmall,
  },

  item: {
    display: "flex",
    alignItems: "center",
    gap: spacing.small,
  },

  filename: {
    flex: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

const Uploadeds = forwardRef<UploadedsRef, UploadedsProps>(({ uploader, onError }, ref) => {
  const [items, setItems] = useState(new Map<number, UploadedItem>());
  const _counter = useRef(0);

  const loaded = useEvent((id, status: "success" | "error") => {
    // update uploaded list status
    setItems((_items) => {
      const current = _items.get(id);
      if (!current) return _items;
      return new Map(_items).set(id, { ...current, status });
    });
  });

  useImperativeHandle(ref, () => {
    return {
      add: async (file: File) => {
        const hasUploader = !!uploader;
        const status: UploadStatus = hasUploader ? "loading" : "success";

        // push current file
        const id = _counter.current++;
        setItems((items) => {
          return new Map(items).set(id, { file, status });
        });

        // call request by user provided
        if (!hasUploader) return;

        const url = await uploader(file).catch((error) => {
          loaded(id, "error");
          onError?.(error);
          return null;
        });

        if (!url) return;
        loaded(id, "success");
      },
    };
  });

  const remove = useEvent((id: number) => {
    setItems((_items) => {
      const next = new Map(_items);
      next.delete(id);
      return next;
    });
  });

  const styled = {
    uploadeds: stylex.props(styles.uploadeds),
    item: stylex.props(styles.item, typography.body.small),
    filename: stylex.props(styles.filename),
  };

  return (
    <div className={styled.uploadeds.className} style={styled.uploadeds.style}>
      {Array.from(items.entries()).map(([key, item]) => {
        return (
          <div key={key} className={styled.item.className} style={styled.item.style}>
            {item.status === "loading" && <Loading />}
            {item.status !== "loading" && <AttachFile />}

            <span className={styled.filename.className} style={styled.filename.style}>
              {item.file.name}
            </span>

            <Delete onClick={() => remove(key)} />
          </div>
        );
      })}
    </div>
  );
});

export default Uploadeds;
