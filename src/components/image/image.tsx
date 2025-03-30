import React, { useContext } from "react";
import type { ImageProps } from "../../types/image";
import Preview from "./preview/preview";
import PreviewGroupContext from "./preview/context";
import { useBoolean, useEvent, useImageLoader } from "@aiszlab/relax";
import { $create, $props } from "../../utils/styles";
import { Skeleton } from "../skeleton";
import { useClassNames } from "../../hooks/use-class-names";
import { stringify } from "@aiszlab/relax/class-name";
import { CLASS_NAMES } from "./context";
import { Empty } from "../empty";

const styles = $create({
  size: (props: { width?: number | string; height?: number | string }) => ({
    width: props.width,
    height: props.height,
  }),
});

const Image = ({
  src,
  alt,
  width,
  height,
  previewable = true,
  className,
  style,
  crossOrigin,
  referrerPolicy,
}: ImageProps) => {
  const [isOpen, { turnOn, turnOff }] = useBoolean(false);
  const contextValue = useContext(PreviewGroupContext);
  const classNames = useClassNames(CLASS_NAMES);

  const status = useImageLoader({ src, crossOrigin, referrerPolicy });

  const click = useEvent(() => {
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
    loading: $props(styles.size({ width, height })),
    image: $props(styles.size({ width, height })),
  };

  if (status === "loading") {
    return (
      <Skeleton
        className={stringify(className, styled.loading.className)}
        style={{
          ...styled.loading.style,
          ...style,
        }}
      />
    );
  }

  if (status === "error") {
    return (
      <Empty
        className={stringify(className, styled.image.className)}
        style={{
          ...styled.image.style,
          ...style,
        }}
      />
    );
  }

  return (
    <>
      {status === "loaded" && (
        <img
          className={stringify(classNames.image, className, styled.image.className)}
          style={{
            ...styled.image.style,
            ...style,
          }}
          src={src}
          alt={alt}
          onClick={click}
          width={width}
          height={height}
          draggable={false}
          crossOrigin={crossOrigin}
          referrerPolicy={referrerPolicy}
        />
      )}
      {isOpen && !contextValue && <Preview src={src} onClose={turnOff} alt={alt} />}
    </>
  );
};

export default Image;
