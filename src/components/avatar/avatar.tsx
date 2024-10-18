import React, { type CSSProperties, useContext, forwardRef } from "react";
import type { AvatarProps } from "musae/types/avatar";
import stylex from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import { Context } from "./context";
import { useTheme } from "../theme";
import { useClassNames } from "../../hooks/use-class-names";
import { AvatarClassToken } from "../../utils/class-name";
import { typography } from "../theme/theme";
import { useImageLoader, clsx } from "@aiszlab/relax";
import { Skeleton } from "../skeleton";

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
  }),

  image: {
    objectFit: "cover",
    objectPosition: "center center",
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
 */
const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  (
    { src, alt, shape: _shape = "circular", size: _size = "medium", className, style, ...props },
    ref,
  ) => {
    const theme = useTheme();
    const group = useContext(Context);
    const isInGroup = !!group;
    const size = group?.size ?? _size;
    const shape = group?.shape ?? _shape;
    const classNames = useClassNames("avatar");
    const loadStatus = useImageLoader({ src });

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
      loading: stylex.props(styles[shape], styles[size]),
      image: stylex.props(styles.image, styles[size]),
    };

    if (loadStatus === "loading") {
      return <Skeleton className={styled.loading.className} style={styled.loading.style} />;
    }

    return (
      <span
        {...props}
        className={clsx(classNames[AvatarClassToken.Avatar], className, styled.avatar.className)}
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
          />
        )}

        {loadStatus !== "loaded" && alt?.slice(0, 2).toUpperCase()}
      </span>
    );
  },
);

export default Avatar;
