import styles from "./styles";
import React, { useContext, forwardRef } from "react";
import type { AvatarProps } from "../../types/avatar";
import { props as $props } from "@stylexjs/stylex";
import Context, { CLASS_NAMES } from "./context";
import { useTheme } from "../theme";
import { $label } from "../theme/theme";
import { useImageLoader } from "@aiszlab/relax";
import { stringify } from "@aiszlab/relax/class-name";
import { Skeleton } from "../skeleton";
import { useClassNames } from "../../hooks/use-class-names";

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
        styles.avatar.default,
        styles.avatar[size],
        styles.avatar[shape],
        isInGroup && styles.avatar.overlapping,
      ),
      loading: $props(
        $label[size],
        styles.loading.default,
        styles.avatar[size],
        styles.avatar[shape],
        isInGroup && styles.avatar.overlapping,
      ),
      image: $props(styles.image.default, styles.avatar[size]),
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
