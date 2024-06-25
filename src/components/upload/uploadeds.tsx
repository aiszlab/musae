import React, { forwardRef, useImperativeHandle, useRef, useState } from "react";
import stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import type { UploadStatus, UploadedItem, UploadedsProps, UploadedsRef } from "./types";
import { Loading, Clear } from "../icon/icons";
import { useEvent } from "@aiszlab/relax";

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
    item: stylex.props(styles.item),
  };

  return (
    <div className={styled.uploadeds.className} style={styled.uploadeds.style}>
      {Array.from(items.entries()).map(([key, item]) => {
        return (
          <div key={key} className={styled.item.className} style={styled.item.style}>
            <Loading />

            {item.file.name}

            <Clear onClick={() => remove(key)} />
          </div>
        );
      })}
    </div>
  );
});

export default Uploadeds;
