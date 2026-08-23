import styles from "../styles";
import React, { useContext, type CSSProperties } from "react";
import type { UploadedItem } from "../../../types/upload";
import ImageContext from "../../image/context";
import { Image } from "../../image";
import { IconAttachFile } from "../../icon/icons";
import { props as $props } from "@stylexjs/stylex";
import { useThemeColorVars } from "../../../hooks/use-theme-color-vars";
import { stringify } from "@aiszlab/relax/class-name";
import { Context } from "../context";

interface Props {
  item: UploadedItem;
  onRemove: () => void;
  className?: string;
  style?: CSSProperties;
}

const UploadedPicture = ({ item, onRemove, className, style }: Props) => {
  const themeColorVars = useThemeColorVars(["outline-variant"]);
  const { classNames } = useContext(Context);

  const styled = {
    wrapper: $props(styles.picture.wrapper),
    image: $props(styles.picture.default),
  };

  return (
    <ImageContext
      value={{
        onRemove,
      }}
    >
      <div
        className={stringify(classNames.uploadedItemPicture, className, styled.wrapper.className)}
        style={{
          ...styled.wrapper.style,
          ...style,
          ...themeColorVars,
        }}
      >
        <Image
          src={item.url}
          fallback={<IconAttachFile size={48} />}
          referrerPolicy="strict-origin-when-cross-origin"
          className={styled.image.className}
          style={styled.image.style}
        />
      </div>
    </ImageContext>
  );
};

export default UploadedPicture;
