import type { CardProps } from "../../types/card";
import type { ReactNode, CSSProperties, ImgHTMLAttributes } from "react";
import React, { forwardRef } from "react";
import { stringify } from "@aiszlab/relax/class-name";
import { props as $props } from "@stylexjs/stylex";
import { OPACITY } from "../theme/tokens.stylex";
import { useTheme } from "../theme";
import { useClassNames } from "../../hooks/use-class-names";
import { useThemeColorVars } from "../../hooks/use-theme-color-vars";
import { CLASS_NAMES } from "./context";
import styles from "./styles";

/**
 * @zh 卡片头部属性
 * @en Card header props
 */
interface CardHeaderProps {
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
   * @zh 头部内容
   * @en Header content
   */
  children?: ReactNode;
  /**
   * @zh 尾部操作区，例如图标按钮
   * @en Trailing action area, e.g. icon button
   */
  action?: ReactNode;
  /**
   * @zh 头像/字母缩写图片地址
   * @en Monogram image source
   */
  monogram?: string;
  /**
   * @zh 字母缩写文本
   * @en Monogram text (e.g. initials)
   */
  monogramText?: string;
  /**
   * @zh 标题
   * @en Title
   */
  title?: ReactNode;
  /**
   * @zh 副标题
   * @en Subhead
   */
  subhead?: ReactNode;
}

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
   * @zh 自定义内容（覆盖默认图片渲染）
   * @en Custom content (overrides default image)
   */
  children?: ReactNode;
}

/**
 * @zh 卡片内容区属性
 * @en Card content props
 */
interface CardContentProps {
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
   * @zh 内容
   * @en Content
   */
  children?: ReactNode;
}

/**
 * @zh 卡片操作区属性
 * @en Card actions props
 */
interface CardActionsProps {
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
   * @zh 操作按钮等
   * @en Action buttons etc.
   */
  children?: ReactNode;
}

/**
 * @zh 卡片组件，用于在一个容器中展示内容和操作。卡片支持多种样式变体（描边、浮起、填充），
 * 并在悬停、聚焦、按下时展示交互状态层。
 *
 * @en Card component for displaying content and actions in a single container.
 * Cards support multiple style variants (outlined, elevated, filled) and show
 * interaction state layers on hover, focus, and press.
 */
const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, style, variant = "outlined", onClick, disabled, ...props }, ref) => {
    const theme = useTheme();
    const classNames = useClassNames(CLASS_NAMES);
    const themeColorVars = useThemeColorVars([
      "surface",
      "surface-container-low",
      "surface-container-highest",
      "outline-variant",
      "on-surface",
      ["on-surface", OPACITY.thin],
      ["on-surface", OPACITY.medium],
      ["on-surface", OPACITY.thick],
    ]);

    const interactive = !!onClick && !disabled;

    const styled = $props(
      styles.card.default,
      styles.card[variant],
      interactive && styles.card.interactive,
      interactive && styles.stateLayer.hover,
      interactive && styles.stateLayer.focus,
      interactive && styles.stateLayer.active,
    );

    return (
      <div
        ref={ref}
        className={stringify(classNames.card, className, styled.className)}
        style={{
          ...styled.style,
          ...style,
          ...themeColorVars,
          "--color-state-layer-hover": `color-mix(in srgb, var(--color-on-surface) 8%, transparent)`,
          "--color-state-layer-focus": `color-mix(in srgb, var(--color-on-surface) 12%, transparent)`,
          "--color-state-layer-press": `color-mix(in srgb, var(--color-on-surface) 12%, transparent)`,
        }}
        onClick={onClick}
        tabIndex={interactive ? 0 : undefined}
        role={interactive ? "button" : undefined}
        aria-disabled={disabled}
        {...props}
      >
        {children}
      </div>
    );
  },
);

/**
 * @zh 卡片头部，包含字母头像、标题、副标题和可选的操作区
 * @en Card header with monogram, title, subhead, and optional action area
 */
const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, style, children, action, monogram, monogramText, title, subhead }, ref) => {
    const classNames = useClassNames(CLASS_NAMES);

    const headerStyled = $props(styles.header.default);
    const contentStyled = $props(styles.headerContent.default);
    const textStyled = $props(styles.headerText.default);
    const titleStyled = $props(styles.headerTitle.default);
    const subheadStyled = $props(styles.headerSubhead.default);

    if (children) {
      return (
        <div
          ref={ref}
          className={stringify(classNames.header, className, headerStyled.className)}
          style={{ ...headerStyled.style, ...style }}
        >
          {children}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={stringify(classNames.header, className, headerStyled.className)}
        style={{ ...headerStyled.style, ...style }}
      >
        <div
          className={stringify(classNames.headerContent, contentStyled.className)}
          style={contentStyled.style}
        >
          {(monogram || monogramText) && (
            <div className={classNames.headerMonogram}>
              {monogram ? (
                <img
                  alt=""
                  src={monogram}
                  style={{ width: "100%", height: "100%", display: "block" }}
                />
              ) : (
                monogramText
              )}
            </div>
          )}
          <div
            className={stringify(classNames.headerText, textStyled.className)}
            style={textStyled.style}
          >
            {title && (
              <div
                className={stringify(classNames.headerTitle, titleStyled.className)}
                style={titleStyled.style}
              >
                {title}
              </div>
            )}
            {subhead && (
              <div
                className={stringify(classNames.headerSubhead, subheadStyled.className)}
                style={subheadStyled.style}
              >
                {subhead}
              </div>
            )}
          </div>
        </div>
        {action && <div className={classNames.headerAction}>{action}</div>}
      </div>
    );
  },
);

/**
 * @zh 卡片媒体区，用于展示图片或自定义内容
 * @en Card media area for displaying images or custom content
 */
const CardMedia = forwardRef<HTMLDivElement, CardMediaProps>(
  ({ className, style, src, alt, children, ...imgProps }, ref) => {
    const classNames = useClassNames(CLASS_NAMES);
    const mediaStyled = $props(styles.media.default);

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

/**
 * @zh 卡片内容区，用于展示文本内容
 * @en Card content area for displaying text content
 */
const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, style, children }, ref) => {
    const classNames = useClassNames(CLASS_NAMES);
    const contentStyled = $props(styles.content.default);

    return (
      <div
        ref={ref}
        className={stringify(classNames.content, className, contentStyled.className)}
        style={{ ...contentStyled.style, ...style }}
      >
        {children}
      </div>
    );
  },
);

/**
 * @zh 卡片操作区，通常包含按钮等交互元素
 * @en Card actions area, typically containing buttons and other interactive elements
 */
const CardActions = forwardRef<HTMLDivElement, CardActionsProps>(
  ({ className, style, children }, ref) => {
    const classNames = useClassNames(CLASS_NAMES);
    const actionsStyled = $props(styles.actions.default);

    return (
      <div
        ref={ref}
        className={stringify(classNames.actions, className, actionsStyled.className)}
        style={{ ...actionsStyled.style, ...style }}
      >
        {children}
      </div>
    );
  },
);

const _Card = Object.assign(Card, {
  Header: CardHeader,
  Media: CardMedia,
  Content: CardContent,
  Actions: CardActions,
});

export default _Card;
export { Card, CardHeader, CardMedia, CardContent, CardActions };
