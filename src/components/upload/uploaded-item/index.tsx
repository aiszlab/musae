import React, { useContext, useMemo } from "react";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { spacing } from "../../theme/tokens.stylex";
import type { FileItem, UploadedItem as UploadedItemType } from "../../../types/upload";
import { useEvent } from "@aiszlab/relax";
import { AttachFile, Delete, Loading } from "../../icon/icons";
import { leaf } from "@aiszlab/fuzzy/path";
import { Context } from "../context";
import { stringify } from "@aiszlab/relax/class-name";
import { $body } from "../../theme/theme";
import UploadedPicture from "./picture";
import { isRemoteFile } from "../utils";

const styles = {
  item: $create({
    default: {
      display: "flex",
      alignItems: "center",
      gap: spacing.xxsmall,
    },
  }),

  filename: $create({
    default: {
      flex: 1,
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  }),
};

const UploadedItem = ({
  item,
  onRemove,
  index,
}: {
  item: FileItem;
  onRemove: (index: number) => void;
  index: number;
}) => {
  const { renderItem, classNames } = useContext(Context);

  const fileItem = useMemo<UploadedItemType>(() => {
    if (isRemoteFile(item)) {
      return {
        key: item.key ?? index,
        url: item.url,
        status: "success",
      };
    }

    return item;
  }, [index, item]);

  const isPicture = renderItem === "picture";
  const isLoading = fileItem.status === "loading";

  const styled = {
    item: $props(styles.item.default, $body.small),
    filename: $props(styles.filename.default),
  };

  const remove = useEvent(() => {
    onRemove(index);
  });

  // 加载状态
  if (isLoading) {
    return (
      <div
        className={stringify(classNames.uploadedItem, styled.item.className)}
        style={styled.item.style}
      >
        <Loading />
      </div>
    );
  }

  // 图片
  if (isPicture) {
    return (
      <UploadedPicture
        item={fileItem}
        onRemove={remove}
        className={stringify(classNames.uploadedItem, styled.item.className)}
        style={styled.item.style}
      />
    );
  }

  return (
    <div
      className={stringify(classNames.uploadedItem, styled.item.className)}
      style={styled.item.style}
    >
      <AttachFile />

      <span className={styled.filename.className} style={styled.filename.style}>
        {fileItem.file?.name ?? leaf(item.url ?? "")}
      </span>

      <Delete onClick={remove} />
    </div>
  );
};

export default UploadedItem;
