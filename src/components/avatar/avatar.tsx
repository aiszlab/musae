import React, { CSSProperties, useContext } from "react";
import type { AvatarProps } from "./types";
import * as stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { Context } from "./context";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";

const styles = stylex.create({
  avatar: {
    borderWidth: sizes.smallest,
    borderStyle: "solid",
    borderColor: "transparent",
    boxSizing: "border-box",
  },

  image: {
    width: sizes.full,
    height: sizes.full,
    objectFit: "cover",
    borderRadius: "inherit",
  },

  overlapping: (props: { outlineColor: CSSProperties["borderColor"] }) => ({
    marginLeft: `calc(${spacing.small} * -1)`,
    borderColor: props.outlineColor,
  }),

  circle: {
    borderRadius: sizes.infinity,
  },

  square: {
    borderRadius: sizes.xxxsmall,
  },

  small: {
    width: sizes.small,
    height: sizes.small,
  },

  medium: {
    width: sizes.medium,
    height: sizes.medium,
  },

  large: {
    width: sizes.large,
    height: sizes.large,
  },
});

const Avatar = ({ src, alt, ...props }: AvatarProps) => {
  const theme = useTheme();
  const group = useContext(Context);
  const isInGroup = !!group;
  const size = group?.size ?? props.size ?? "medium";
  const shape = group?.shape ?? props.shape ?? "circle";

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
    <span {...styled.avatar}>
      <img {...styled.image} src={src} alt={alt} />
    </span>
  );
};

export default Avatar;
