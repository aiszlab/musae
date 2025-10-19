import React, { forwardRef, useContext, useImperativeHandle, useMemo, useRef } from "react";
import type { ImageProps, ImageRef } from "../../types/image";
import Preview from "./preview/preview";
import PreviewGroupContext from "./preview/context";
import { useBoolean, useEvent, useHover, useImageLoader } from "@aiszlab/relax";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { Skeleton } from "../skeleton";
import { useClassNames } from "../../hooks/use-class-names";
import { stringify } from "@aiszlab/relax/class-name";
import ImageContex, { CLASS_NAMES } from "./context";
import { Empty } from "../empty";
import { Delete, Visibility } from "../icon/icons";
import { type ThemeColorVariable, useThemeColorVars } from "../../hooks/use-theme-color-vars";
import { duration, OPACITY, sizes, spacing } from "../theme/tokens.stylex";

type ImageAction = "preview" | "remove";

const styles = {
  image: $create({
    default: {
      display: "inline-flex",
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
    },
  }),

  overlay: $create({
    default: {
      position: "absolute",
      inset: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: spacing.xxsmall,
      backgroundColor: "var(--color-surface-dim-opacity-90)" satisfies ThemeColorVariable,
      color: "var(--color-on-primary)" satisfies ThemeColorVariable,
      userSelect: "none",
      opacity: 1,
      transitionProperty: "opacity",
      transitionDuration: duration.medium,
    },

    hidden: {
      opacity: 0,
    },

    previewable: {
      cursor: "pointer",
    },
  }),

  img: $create({
    default: {
      width: sizes.full,
      height: sizes.auto,
    },
  }),
};

const Image = forwardRef<ImageRef, ImageProps>(
  (
    {
      src,
      alt,
      width,
      height,
      previewable = true,
      className,
      style,
      crossOrigin,
      referrerPolicy,
      fallback,
    },
    ref,
  ) => {
    const [isOpen, { turnOn, turnOff }] = useBoolean(false);
    const contextValue = useContext(PreviewGroupContext);
    const classNames = useClassNames(CLASS_NAMES);
    const { onRemove } = useContext(ImageContex);

    const themeColorVars = useThemeColorVars([["surface-dim", OPACITY.heaviest], "on-primary"]);

    const imageRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const [isHovered, hoverProps] = useHover({ ref: imageRef });

    const status = useImageLoader({ src, crossOrigin, referrerPolicy });

    const actions = useMemo(() => {
      return new Set([
        ...((previewable && status === "loaded" ? ["preview"] : []) satisfies ImageAction[]),
        ...((onRemove ? ["remove"] : []) satisfies ImageAction[]),
      ]);
    }, [previewable, onRemove, status]);

    const preview = useEvent(() => {
      if (!src || status !== "loaded") return;

      // if current image is in preview group
      // just use preview group to preview image
      if (contextValue) {
        contextValue.onClick(src);
        return;
      }

      // not in preview group, render self
      turnOn();
    });

    const styled = {
      loading: $props(styles.image.default),
      image: $props(styles.image.default),
      overlay: $props(
        styles.overlay.default,
        !isHovered && styles.overlay.hidden,
        actions.size === 1 && actions.has("preview") && styles.overlay.previewable,
      ),
      img: $props(styles.img.default),
    };

    useImperativeHandle(ref, () => {
      return {
        ...(imageRef.current ?? {}),
        preview,
      };
    });

    if (status === "loading") {
      return (
        <Skeleton
          className={stringify(className, styled.loading.className)}
          style={{
            ...styled.loading.style,
            width: width,
            height: height,
          }}
        />
      );
    }

    return (
      <div
        className={stringify(classNames.image, className, styled.image.className)}
        style={{
          ...styled.image.style,
          ...style,
          ...themeColorVars,
          width: width,
          height: height,
        }}
        ref={imageRef}
        {...hoverProps}
      >
        {status === "loaded" && (
          <img
            ref={imgRef}
            className={stringify(classNames.img, styled.img.className)}
            style={styled.img.style}
            src={src}
            alt={alt}
            draggable={false}
            crossOrigin={crossOrigin}
            referrerPolicy={referrerPolicy}
          />
        )}

        {status !== "loaded" && (fallback ?? <Empty className={className} />)}

        {actions.size > 0 && (
          <div
            className={stringify(classNames.overlay, styled.overlay.className)}
            {...(actions.size === 1 && actions.has("preview") && { onClick: preview })}
          >
            {actions.has("preview") && <Visibility onClick={preview} />}
            {actions.has("remove") && <Delete onClick={onRemove} />}
          </div>
        )}

        {isOpen && !contextValue && <Preview src={src} onClose={turnOff} alt={alt} />}
      </div>
    );
  },
);

export default Image;
