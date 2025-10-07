import React, { useContext } from "react";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import type { UploadedListProps } from "../../types/upload";
import UploadedItem from "./uploaded-item";
import { Context } from "./context";
import { stringify } from "@aiszlab/relax/class-name";
import { $body } from "../theme/theme";

const styles = $create({
  list: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.xxsmall,
  },

  item: {
    display: "flex",
    alignItems: "center",
    gap: spacing.xxsmall,
  },

  filename: {
    flex: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

const UploadedList = ({ value, onRemove }: UploadedListProps) => {
  const { renderItem, classNames } = useContext(Context);

  // no uploaded file, no render!
  // no item render, no render!
  if (value.length === 0 || !renderItem) {
    return null;
  }

  const styled = {
    list: $props(styles.list),
    item: $props(styles.item, $body.small),
    filename: $props(styles.filename),
  };

  return (
    <div
      className={stringify(classNames.uploadedList, styled.list.className)}
      style={styled.list.style}
    >
      {value.map((item, index) => {
        return <UploadedItem key={index} item={item} onRemove={onRemove} index={index} />;
      })}
    </div>
  );
};

export default UploadedList;
