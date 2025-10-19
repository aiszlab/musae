import React, { useContext, type CSSProperties } from "react";
import type { UploadedItem } from "../../../types/upload";
import ImageContext from "../../image/context";
import { Image } from "../../image";
import { AttachFile } from "../../icon/icons";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { sizes, spacing } from "../../../components/theme/tokens.stylex";
import { useThemeColorVars, type ThemeColorVariable } from "../../../hooks/use-theme-color-vars";
import { stringify } from "@aiszlab/relax/class-name";
import { Context } from "../context";

interface Props {
  item: UploadedItem;
  onRemove: () => void;
  className?: string;
  style?: CSSProperties;
}

const styles = $create({
  default: {
    width: sizes.xxxxxxxxlarge,
    height: sizes.xxxxxxxxlarge,
  },

  wrapper: {
    borderWidth: sizes.smallest,
    borderStyle: "solid",
    borderColor: "var(--color-outline-variant)" satisfies ThemeColorVariable,
    borderRadius: sizes.xxxxxxxxxsmall,
    padding: spacing.xxsmall,
  },
});

const UploadedPicture = ({ item, onRemove, className, style }: Props) => {
  const themeColorVars = useThemeColorVars(["outline-variant"]);
  const { classNames } = useContext(Context);

  const styled = {
    wrapper: $props(styles.wrapper),
    image: $props(styles.default),
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
          fallback={<AttachFile size={48} />}
          referrerPolicy="strict-origin-when-cross-origin"
          className={styled.image.className}
          style={styled.image.style}
        />
      </div>
    </ImageContext>
  );
};

export default UploadedPicture;
