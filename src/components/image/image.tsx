import React, { forwardRef, useContext, useImperativeHandle, useRef } from "react";
import type { ImageProps, ImageRef } from "../../types/image";
import Preview from "./preview/preview";
import PreviewGroupContext from "./preview/context";
import { useBoolean, useEvent, useHover, useImageLoader } from "@aiszlab/relax";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { Skeleton } from "../skeleton";
import { useClassNames } from "../../hooks/use-class-names";
import { stringify } from "@aiszlab/relax/class-name";
import { CLASS_NAMES } from "./context";
import { Empty } from "../empty";
import { Visibility } from "../icon/icons";
import { type ThemeColorVariable, useThemeColorVars } from "../../hooks/use-theme-color-vars";
import { duration, OPACITY, sizes } from "../theme/tokens.stylex";

const styles = {
  image: $create({
    default: {
      position: "relative",
      width: sizes.fit,
      height: sizes.fit,
    },
  }),

  overlay: $create({
    default: {
      position: "absolute",
      inset: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
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
    { src, alt, width, height, previewable = true, className, style, crossOrigin, referrerPolicy },
    ref,
  ) => {
    const [isOpen, { turnOn, turnOff }] = useBoolean(false);
    const contextValue = useContext(PreviewGroupContext);
    const classNames = useClassNames(CLASS_NAMES);

    const themeColorVars = useThemeColorVars([["surface-dim", OPACITY.heaviest], "on-primary"]);

    const imageRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const [isHovered, hoverProps] = useHover({ ref: imageRef });

    const status = useImageLoader({ src, crossOrigin, referrerPolicy });

    const preview = useEvent(() => {
      if (!previewable) return;

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
      overlay: $props(styles.overlay.default, !isHovered && styles.overlay.hidden),
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

    if (status === "error" || status === "none") {
      return <Empty className={className} />;
    }

    return (
      <div
        className={stringify(classNames.image, styled.image.className)}
        style={{
          ...styled.image.style,
          ...themeColorVars,
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
            "--width": width,
            "--height": height,
          }}
          src={src}
          alt={alt}
          width={width}
          height={height}
          draggable={false}
          crossOrigin={crossOrigin}
          referrerPolicy={referrerPolicy}
        />

        <div className={stringify(classNames.overlay, styled.overlay.className)} onClick={preview}>
          <Visibility />
        </div>

        {isOpen && !contextValue && <Preview src={src} onClose={turnOff} alt={alt} />}
      </div>
    );
  },
);

export default Image;
