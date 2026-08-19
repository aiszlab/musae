import styles from "./styles";
import React, { useContext } from "react";
import { props as $props } from "@stylexjs/stylex";
import type { UploadedListProps } from "../../types/upload";
import UploadedItem from "./uploaded-item";
import { Context } from "./context";
import { stringify } from "@aiszlab/relax/class-name";
import { $body } from "../theme/theme";

const UploadedList = ({ value, onRemove }: UploadedListProps) => {
  const { renderItem, classNames } = useContext(Context);

  // no uploaded file, no render!
  // no item render, no render!
  if (value.length === 0 || !renderItem) {
    return null;
  }

  const styled = {
    list: $props(styles.uploadedList.list),
    item: $props(styles.uploadedList.item, $body.small),
    filename: $props(styles.uploadedList.filename),
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
