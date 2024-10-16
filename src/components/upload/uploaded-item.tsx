import React, { type CSSProperties, useContext, type Key, useMemo } from "react";
import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import type { UploadedItem as UploadedItemType } from "musae/types/upload";
import { useClassNames } from "../../hooks/use-class-names";
import { ComponentToken } from "../../utils/component-token";
import { UploadClassToken } from "../../utils/class-name";
import { clsx, isFunction, useEvent } from "@aiszlab/relax";
import { AttachFile, Delete, Loading } from "../icon/icons";
import { leaf } from "@aiszlab/fuzzy/path";
import { Context } from "./context";
import { Image } from "../image";
import { typography } from "../theme/theme";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";

const styles = {
  item: stylex.create({
    default: {
      display: "flex",
      alignItems: "center",
      gap: spacing.small,
    },

    picture: (props: { borderColor: CSSProperties["borderColor"] }) => ({
      borderWidth: sizes.smallest,
      borderStyle: "solid",
      borderColor: props.borderColor,
      padding: spacing.medium,
      borderRadius: sizes.xxxxxsmall,
      height: sizes.xxxlarge,
    }),
  }),

  leading: stylex.create({
    picture: {
      width: sizes.xxlarge,
      height: sizes.xxlarge,
    },
  }),

  filename: stylex.create({
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
  const classNames = useClassNames(ComponentToken.Upload);
  const { renderItem } = useContext(Context);
  const theme = useTheme();

  const isPicture = renderItem === "picture";
  const isRender = isFunction(renderItem);
  const isLoading = item.status === "loading";

  const styled = {
    item: stylex.props(
      styles.item.default,
      typography.body.small,
      isPicture && styles.item.picture({ borderColor: theme.colors[ColorToken.Outline] }),
    ),
    leading: stylex.props(isPicture && styles.leading.picture),
    filename: stylex.props(styles.filename.default),
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
          <Image src={item.url} className={styled.leading.className} style={styled.leading.style} />
        );
      }
      return <AttachFile className={styled.leading.className} style={styled.leading.style} />;
    }
    if (isLoading) {
      return <Loading />;
    }
    return <AttachFile />;
  }, [isLoading, isPicture, isRender, item.url, styled.leading.className, styled.leading.style]);

  // render item function
  const _renderItem = useEvent(() => {
    if (isFunction(renderItem)) return renderItem(item);

    return (
      <>
        {leading}
        <span className={styled.filename.className} style={styled.filename.style}>
          {item.file?.name ?? leaf(item.url ?? "")}
        </span>
        <Delete onClick={onRemove} />
      </>
    );
  });

  return (
    <div
      key={item.key}
      className={clsx(
        classNames[UploadClassToken.UploadedItem],
        {
          [classNames[UploadClassToken.UploadedPictureItem]]: isPicture,
        },
        styled.item.className,
      )}
      style={styled.item.style}
    >
      {_renderItem()}
    </div>
  );
};

export default UploadedItem;
