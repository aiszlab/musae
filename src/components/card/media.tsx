import type { CSSProperties, ImgHTMLAttributes, ReactNode } from "react";
import React, { forwardRef } from "react";
import { stringify } from "@aiszlab/relax/class-name";
import { props as $props } from "@stylexjs/stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { CLASS_NAMES, useCardContext } from "./context";
import styles from "./styles";

/**
 * @zh 卡片媒体区属性
 * @en Card media props
 */
interface CardMediaProps extends ImgHTMLAttributes<HTMLImageElement> {
  /**
   * @zh 自定义类名
   * @en Custom class name
   */
  className?: string;
  /**
   * @zh 自定义样式
   * @en Custom style
   */
  style?: CSSProperties;
  /**
   * @zh 图片地址
   * @en Image source
   */
  src?: string;
  /**
   * @zh 图片替代文本
   * @en Image alt text
   */
  alt?: string;
  /**
   * @zh 自定义内容(覆盖默认图片渲染)
   * @en Custom content (overrides default image)
   */
  children?: ReactNode;
}

/**
 * @zh 卡片媒体区,用于展示图片或自定义内容。Horizontal 布局下宽度固定 80px 并带三边 border。
 *
 * @en Card media area for displaying images or custom content. In horizontal
 * layout, it is fixed 80px wide with a 3-side border.
 */
const CardMedia = forwardRef<HTMLDivElement, CardMediaProps>(
  ({ className, style, src, alt, children, ...imgProps }, ref) => {
    const classNames = useClassNames(CLASS_NAMES);
    const { layout } = useCardContext();
    const mediaStyled = $props(styles.media.default, styles.media[layout]);

    return (
      <div
        ref={ref}
        className={stringify(classNames.media, className, mediaStyled.className)}
        style={{ ...mediaStyled.style, ...style }}
      >
        {children ||
          (src && (
            <img
              alt={alt}
              src={src}
              {...imgProps}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ))}
      </div>
    );
  },
);

export default CardMedia;
export type { CardMediaProps };
