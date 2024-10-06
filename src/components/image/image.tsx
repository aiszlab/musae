import React, { useContext } from "react";
import type { ImageProps } from "musae/types/image";
import Preview from "./preview/preview";
import PreviewGroupContext from "./preview/context";
import { useBoolean, useEvent, useImageLoader, clsx } from "@aiszlab/relax";
import stylex from "@stylexjs/stylex";
import { Skeleton } from "../skeleton";
import { useClassNames } from "../../hooks/use-class-names";
import { ComponentToken } from "../../utils/component-token";
import { ImageClassToken } from "../../utils/class-name";

const styles = stylex.create({
  size: (props: { width?: number | string; height?: number | string }) => ({
    width: props.width,
    height: props.height,
  }),
});

const Image = ({ src, alt, width, height, previewable = true, className, style }: ImageProps) => {
  const [isOpen, { turnOn, turnOff }] = useBoolean(false);
  const contextValue = useContext(PreviewGroupContext);
  const classNames = useClassNames(ComponentToken.Image);

  const status = useImageLoader({ src });

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
    loading: stylex.props(styles.size({ width, height })),
    image: stylex.props(styles.size({ width, height })),
  };

  if (status === "loading") {
    return <Skeleton className={styled.loading.className} style={styled.loading.style} />;
  }

  return (
    <>
      {status === "loaded" && (
        <img
          className={clsx(classNames[ImageClassToken.Image], className, styled.image.className)}
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
        />
      )}
      {isOpen && !contextValue && <Preview src={src} onClose={turnOff} alt={alt} />}
    </>
  );
};

export default Image;
