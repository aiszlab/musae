import React from "react";
import type { UploadedItem } from "../../../types/upload";
import ImageContext from "../../image/context";
import { Image } from "../../image";
import { AttachFile } from "../../icon/icons";

interface Props {
  item: UploadedItem;
  onRemove: () => void;
}

const UploadedPicture = ({ item, onRemove }: Props) => {
  return (
    <ImageContext
      value={{
        onRemove,
      }}
    >
      <Image
        src={item.url}
        fallback={<AttachFile />}
        referrerPolicy="strict-origin-when-cross-origin"
        width="100%"
        height="100%"
      />
    </ImageContext>
  );
};

export default UploadedPicture;
