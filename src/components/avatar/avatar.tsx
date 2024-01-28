import React from "react";
import type { AvatarProps } from "./types";
import * as stylex from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";

const styles = stylex.create({
  avatar: {},

  image: {
    width: sizes.full,
    height: sizes.full,
    objectFit: "cover",
    borderRadius: "inherit",
  },

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

const Avatar = ({ src, alt, size = "medium", shape = "circle" }: AvatarProps) => {
  const styled = {
    avatar: stylex.props(styles.avatar, styles[size], styles[shape]),
    image: stylex.props(styles.image),
  };

  return (
    <span {...styled.avatar}>
      <img {...styled.image} src={src} alt={alt} />
    </span>
  );
};

export default Avatar;
