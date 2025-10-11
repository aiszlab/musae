import React, { forwardRef, useContext, useImperativeHandle, useMemo, useRef } from "react";
import type { ImageProps, ImageRef } from "../../types/image";
import Preview from "./preview/preview";
import PreviewGroupContext from "./preview/context";
import { isUndefined, useBoolean, useEvent, useHover, useImageLoader } from "@aiszlab/relax";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { Skeleton } from "../skeleton";
import { useClassNames } from "../../hooks/use-class-names";
import { stringify } from "@aiszlab/relax/class-name";
import ImageContex, { CLASS_NAMES } from "./context";
import { Empty } from "../empty";
import { Delete, Visibility } from "../icon/icons";
import { type ThemeColorVariable, useThemeColorVars } from "../../hooks/use-theme-color-vars";
import { duration, OPACITY, spacing } from "../theme/tokens.stylex";

type ImageAction = "preview" | "remove";

const styles = {
  image: $create({
    default: {
      display: "inline-flex",
      position: "relative",
      width: "var(--width)",
      height: "var(--height)",
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
      width: "var(--width)",
      height: "var(--height)",
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
        ...((previewable && src ? ["preview"] : []) satisfies Array<ImageAction>),
        ...((onRemove ? ["remove"] : []) satisfies Array<ImageAction>),
      ]);
    }, [previewable, src, onRemove]);

    const preview = useEvent(() => {
      if (!src) return;

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
      loading: $props(styles.img.default),
      image: $props(styles.image.default),
      overlay: $props(
        styles.overlay.default,
        !isHovered && styles.overlay.hidden,
        actions.size === 1 && actions.has("preview") && styles.overlay.previewable,
      ),
      img: $props(styles.img.default),
    };

    useImperativeHandle(ref, () => {
      if (!imageRef.current) return {};

      return {
        ...imageRef.current,
        preview,
      };
    });

    if (status === "loading") {
      return (
        <Skeleton
          className={stringify(className, styled.loading.className)}
          style={{
            ...styled.loading.style,
            "--width": width,
            "--height": height,
          }}
        />
      );
    }

    if (status !== "loaded") {
      if (isUndefined(fallback)) return <Empty className={className} />;
      return fallback;
    }

    return (
      <div
        className={stringify(classNames.image, styled.image.className)}
        style={{
          ...styled.image.style,
          ...themeColorVars,
          "--width": width,
          "--height": height,
        }}
        ref={imageRef}
        {...hoverProps}
      >
        <img
          ref={imgRef}
          className={stringify(classNames.img, className, styled.img.className)}
          style={{
            ...styled.img.style,
            ...style,
          }}
          src={src}
          alt={alt}
          width={width}
          height={height}
          draggable={false}
          crossOrigin={crossOrigin}
          referrerPolicy={referrerPolicy}
        />

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
