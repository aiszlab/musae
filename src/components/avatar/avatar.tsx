import React, { useContext, forwardRef } from "react";
import type { AvatarProps } from "../../types/avatar";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { sizes, spacing } from "../theme/tokens.stylex";
import Context, { CLASS_NAMES } from "./context";
import { useTheme } from "../theme";
import { $label } from "../theme/theme";
import { useImageLoader } from "@aiszlab/relax";
import { stringify } from "@aiszlab/relax/class-name";
import { Skeleton } from "../skeleton";
import { useClassNames } from "../../hooks/use-class-names";

const styles = $create({
  avatar: {
    borderWidth: sizes.smallest,
    borderStyle: "solid",
    borderColor: "transparent",
    boxSizing: "border-box",
    backgroundColor: "var(--color-primary-container)",
    color: "var(--color-primary)",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",

    display: "inline-flex",
    verticalAlign: "middle",
  },

  loading: {
    display: "inline-block",
    verticalAlign: "middle",
  },

  image: {
    objectFit: "cover",
    objectPosition: "center center",
    borderRadius: "inherit",
  },

  overlapping: {
    ":not(:first-child)": {
      marginInlineStart: `calc(${spacing.xxsmall} * -1)`,
    },

    borderColor: "var(--color-on-primary)",
  },

  circular: {
    borderRadius: sizes.infinity,
  },

  squared: {
    borderRadius: sizes.xxxxxxxxsmall,
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
      avatar: $props(
        $label[size],
        styles.avatar,
        styles[size],
        styles[shape],
        isInGroup && styles.overlapping,
      ),
      loading: $props(
        $label[size],
        styles.loading,
        styles[size],
        styles[shape],
        isInGroup && styles.overlapping,
      ),
      image: $props(styles.image, styles[size]),
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
          // @ts-expect-error style vars
          "--color-primary": theme.colors.primary,
          "--color-on-primary": theme.colors["on-primary"],
          "--color-primary-container": theme.colors["primary-container"],
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
