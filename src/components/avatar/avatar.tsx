import React, { type CSSProperties, useContext, forwardRef } from "react";
import type { AvatarProps } from "./types";
import * as stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { Context } from "./context";
import { useTheme } from "../theme";
import { ColorToken } from "../../utils/colors";
import { useClassNames } from "../../hooks/use-class-names";
import { AvatarClassToken, ComponentToken } from "../../utils/class-name";
import clsx from "clsx";
import { typography } from "../theme/theme";

const styles = stylex.create({
  avatar: (props: { backgroundColor: CSSProperties["backgroundColor"]; color: CSSProperties["color"] }) => ({
    borderWidth: sizes.smallest,
    borderStyle: "solid",
    borderColor: "transparent",
    boxSizing: "border-box",
    display: "inline-flex",
    backgroundColor: props.backgroundColor,
    color: props.color,
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
  }),

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

/**
 * @description
 * `Avatar`
 *
 * component
 */
const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ src, alt, shape: _shape = "circular", size: _size = "medium", fallback, ...props }, ref) => {
    const theme = useTheme();
    const group = useContext(Context);
    const isInGroup = !!group;
    const size = group?.size ?? _size;
    const shape = group?.shape ?? _shape;
    const classNames = useClassNames(ComponentToken.Avatar);

    const styled = {
      avatar: stylex.props(
        typography.label[size],
        styles.avatar({
          backgroundColor: theme.colors[ColorToken.PrimaryContainer],
          color: theme.colors[ColorToken.Primary],
        }),
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
      <span
        {...props}
        className={clsx(classNames[AvatarClassToken.Avatar], styled.avatar.className)}
        style={styled.avatar.style}
        ref={ref}
      >
        {!!src ? (
          <img draggable={false} src={src} alt={alt} className={styled.image.className} style={styled.image.style} />
        ) : (
          fallback
        )}
      </span>
    );
  }
);

export default Avatar;
