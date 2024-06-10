import React, { type CSSProperties, useContext } from "react";
import type { AvatarProps } from "./types";
import * as stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { Context } from "./context";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { useClassNames } from "../../hooks/use-class-names";
import { AvatarClassToken, ComponentToken } from "../../utils/class-name";
import clsx from "clsx";

const styles = stylex.create({
  avatar: {
    borderWidth: sizes.smallest,
    borderStyle: "solid",
    borderColor: "transparent",
    boxSizing: "border-box",
    display: "inline-flex",
  },

  image: {
    width: sizes.full,
    height: sizes.full,
    objectFit: "cover",
    borderRadius: "inherit",
  },

  overlapping: (props: { outlineColor: CSSProperties["borderColor"] }) => ({
    ":not(:first-child)": {
      marginInlineStart: `calc(${spacing.small} * -1)`,
    },
    borderColor: props.outlineColor,
  }),

  circular: {
    borderRadius: sizes.infinity,
  },

  squared: {
    borderRadius: sizes.xxxxxsmall,
  },

  small: {
    width: sizes.xsmall,
    height: sizes.xsmall,
  },

  medium: {
    width: sizes.medium,
    height: sizes.medium,
  },

  large: {
    width: sizes.xlarge,
    height: sizes.xlarge,
  },
});

const Avatar = ({ src, alt, shape: _shape = "circular", size: _size = "medium" }: AvatarProps) => {
  const theme = useTheme();
  const group = useContext(Context);
  const isInGroup = !!group;
  const size = group?.size ?? _size;
  const shape = group?.shape ?? _shape;
  const classNames = useClassNames(ComponentToken.Avatar);

  const styled = {
    avatar: stylex.props(
      styles.avatar,
      styles[size],
      styles[shape],
      isInGroup &&
        styles.overlapping({
          outlineColor: theme.colors[ColorToken.OnPrimary],
        })
    ),
    image: stylex.props(styles.image),
  };

  return (
    <span className={clsx(classNames[AvatarClassToken.Avatar], styled.avatar.className)} style={styled.avatar.style}>
      <img src={src} alt={alt} className={styled.image.className} style={styled.image.style} />
    </span>
  );
};

export default Avatar;
