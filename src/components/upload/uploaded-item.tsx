import React, { useContext, type Key, useMemo } from "react";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import type { UploadedItem as UploadedItemType } from "../../types/upload";
import { isFunction, useEvent } from "@aiszlab/relax";
import { AttachFile, Delete, Loading } from "../icon/icons";
import { leaf } from "@aiszlab/fuzzy/path";
import { Context } from "./context";
import { Image } from "../image";
import { stringify } from "@aiszlab/relax/class-name";
import { $body } from "../theme/theme";
import { type ThemeColorVariable, useThemeColorVars } from "../../hooks/use-theme-color-vars";

const styles = {
  item: $create({
    default: {
      display: "flex",
      alignItems: "center",
      gap: spacing.xxsmall,
    },

    picture: {
      borderWidth: sizes.smallest,
      borderStyle: "solid",
      borderColor: "var(--color-outline-variant)" satisfies ThemeColorVariable,
      padding: spacing.medium,
      borderRadius: sizes.xxxxxxxxxsmall,
      height: sizes.xxxxxlarge,
    },
  }),

  leading: $create({
    picture: {
      width: sizes.xxxlarge,
      height: sizes.xxxlarge,
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
  onRemove: _onRemove,
}: {
  item: UploadedItemType;
  onRemove: (key: Key) => void;
}) => {
  const { renderItem, classNames } = useContext(Context);
  const _themeColorVars = useThemeColorVars(["outline-variant"]);

  const isPicture = renderItem === "picture";
  const isRender = isFunction(renderItem);
  const isLoading = item.status === "loading";

  const styled = {
    item: $props(styles.item.default, $body.small, isPicture && styles.item.picture),
    filename: $props(styles.filename.default),
  };

  const onRemove = useEvent(() => {
    _onRemove(item.key);
  });

  // render leading
  const leading = useMemo(() => {
    if (isRender) return null;

    if (isPicture) {
      if (item.url) {
        return (
          <Image
            src={item.url}
            {...$props(styles.leading.picture)}
            crossOrigin="anonymous"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        );
      }

      return <AttachFile {...$props(styles.leading.picture)} />;
    }

    if (isLoading) {
      return <Loading />;
    }
    return <AttachFile />;
  }, [isLoading, isPicture, isRender, item.url]);

  // render item function
  const _renderItem = useEvent(() => {
    if (isFunction(renderItem)) return renderItem(item);

    return (
      <>
        {leading}
        <span
          className={styled.filename.className}
          style={{ ...styled.filename.style, ..._themeColorVars }}
        >
          {item.file?.name ?? leaf(item.url ?? "")}
        </span>
        <Delete onClick={onRemove} />
      </>
    );
  });

  return (
    <div
      key={item.key}
      className={stringify(
        classNames.uploadedItem,
        isPicture && classNames.uploadedPictureItem,
        styled.item.className,
      )}
      style={styled.item.style}
    >
      {_renderItem()}
    </div>
  );
};

export default UploadedItem;
