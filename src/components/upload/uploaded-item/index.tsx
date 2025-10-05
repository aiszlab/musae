import React, { useContext, type Key } from "react";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { sizes, spacing } from "../../theme/tokens.stylex";
import type { UploadedItem as UploadedItemType } from "../../../types/upload";
import { useEvent } from "@aiszlab/relax";
import { AttachFile, Delete, Loading } from "../../icon/icons";
import { leaf } from "@aiszlab/fuzzy/path";
import { Context } from "../context";
import { stringify } from "@aiszlab/relax/class-name";
import { $body } from "../../theme/theme";
import { type ThemeColorVariable, useThemeColorVars } from "../../../hooks/use-theme-color-vars";
import UploadedPicture from "./picture";

const styles = {
  item: $create({
    default: {
      display: "flex",
      alignItems: "center",
      gap: spacing.xxsmall,
      height: sizes.xxxxxxxlarge,
    },

    picture: {
      borderWidth: sizes.smallest,
      borderStyle: "solid",
      borderColor: "var(--color-outline-variant)" satisfies ThemeColorVariable,
      padding: spacing.xxsmall,
      borderRadius: sizes.xxxxxxxxxsmall,
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
}: {
  item: UploadedItemType;
  onRemove: (key: Key) => void;
}) => {
  const { renderItem, classNames } = useContext(Context);
  const themeColorVars = useThemeColorVars(["outline-variant"]);

  const isPicture = renderItem === "picture";
  const isLoading = item.status === "loading";

  const styled = {
    item: $props(styles.item.default, $body.small, isPicture && styles.item.picture),
    filename: $props(styles.filename.default),
  };

  const remove = useEvent(() => {
    onRemove(item.key);
  });

  // 加载状态
  if (isLoading) {
    return (
      <div
        className={stringify(
          classNames.uploadedItem,
          classNames.uploadedItemPicture,
          styled.item.className,
        )}
        style={{
          ...styled.item.style,
          ...themeColorVars,
        }}
      >
        <Loading />
      </div>
    );
  }

  // 图片
  if (isPicture) {
    return (
      <div
        className={stringify(
          classNames.uploadedItem,
          classNames.uploadedItemPicture,
          styled.item.className,
        )}
        style={{
          ...styled.item.style,
          ...themeColorVars,
        }}
      >
        <UploadedPicture item={item} onRemove={remove} />
      </div>
    );
  }

  return (
    <div
      className={stringify(classNames.uploadedItem, styled.item.className)}
      style={{
        ...styled.item.style,
        ...themeColorVars,
      }}
    >
      <AttachFile />

      <span className={styled.filename.className} style={styled.filename.style}>
        {item.file?.name ?? leaf(item.url ?? "")}
      </span>

      <Delete onClick={remove} />
    </div>
  );
};

export default UploadedItem;
