import React, { type CSSProperties, useContext, forwardRef } from "react";
import type { AvatarProps } from "musae/types/avatar";
import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import Context, { CLASS_NAMES } from "./context";
import { useTheme } from "../theme";
import { typography } from "../theme/theme";
import { useImageLoader } from "@aiszlab/relax";
import { stringify } from "@aiszlab/relax/class-name";
import { Skeleton } from "../skeleton";
import { useClassNames } from "../../hooks/use-class-names.component";

const styles = stylex.create({
  avatar: (props: {
    backgroundColor: CSSProperties["backgroundColor"];
    color: CSSProperties["color"];
  }) => ({
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
    verticalAlign: "middle",
  }),

  loading: {
    boxSizing: "border-box",
  },

  image: {
    objectFit: "cover",
    objectPosition: "center center",
    borderRadius: "inherit",
  },

  overlapping: (props: { outlineColor: CSSProperties["borderColor"] }) => ({
    ":not(:first-child)": {
      marginInlineStart: `calc(${spacing.xsmall} * -1)`,
    },

    borderColor: props.outlineColor,
  }),

  circular: {
    borderRadius: sizes.infinity,
  },

  squared: {
    borderRadius: sizes.xxxxxxsmall,
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
 */
const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  (
    {
      src,
      alt,
      shape: _shape = "circular",
      size: _size = "medium",
      className,
      style,
      crossOrigin,
      referrerPolicy,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme();
    const group = useContext(Context);
    const isInGroup = !!group;
    const size = group?.size ?? _size;
    const shape = group?.shape ?? _shape;
    const classNames = useClassNames(CLASS_NAMES);
    const loadStatus = useImageLoader({ src, crossOrigin, referrerPolicy });

    const styled = {
      avatar: stylex.props(
        typography.label[size],
        styles.avatar({
          backgroundColor: theme.colors["primary-container"],
          color: theme.colors.primary,
        }),
        styles[size],
        styles[shape],
        isInGroup &&
          styles.overlapping({
            outlineColor: theme.colors["on-primary"],
          }),
      ),
      loading: stylex.props(
        typography.label[size],
        styles[size],
        styles[shape],
        isInGroup &&
          styles.overlapping({
            outlineColor: theme.colors["on-primary"],
          }),
      ),
      image: stylex.props(styles.image, styles[size]),
    };

    if (loadStatus === "loading") {
      return <Skeleton className={styled.loading.className} style={styled.loading.style} />;
    }

    return (
      <span
        {...props}
        className={stringify(classNames.avatar, className, styled.avatar.className)}
        style={{
          ...styled.avatar.style,
          ...style,
        }}
        ref={ref}
      >
        {loadStatus === "loaded" && (
          <img
            draggable={false}
            src={src}
            alt={alt}
            className={styled.image.className}
            style={styled.image.style}
            crossOrigin={crossOrigin}
            referrerPolicy={referrerPolicy}
          />
        )}

        {loadStatus !== "loaded" && alt?.slice(0, 2).toUpperCase()}
      </span>
    );
  },
);

export default Avatar;
