import type { ReactNode, CSSProperties } from "react";
import React, { forwardRef } from "react";
import { stringify } from "@aiszlab/relax/class-name";
import { props as $props } from "@stylexjs/stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { CLASS_NAMES, useCardContext } from "./context";
import styles from "./styles";
import { IconMoreVert } from "../icon/icons";
import { IconButton } from "../icon-button";

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
   * @zh 尾部操作区,例如 IconButton(会自动包 48x48 容器)
   * @en Trailing action area, e.g. IconButton (auto-wrapped in 48x48 container)
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
 * @zh 卡片头部,包含字母头像、标题、副标题和可选的操作区。Horizontal 布局下自动应用
 * 全 16px padding,Stacked 布局下应用 12/4/12/16 padding。
 *
 * @en Card header with monogram, title, subhead, and optional action area.
 * Applies 16px padding on all sides in horizontal layout, and 12/4/12/16 in stacked.
 */
const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, style, children, monogram, monogramText, title, subhead }, ref) => {
    const classNames = useClassNames(CLASS_NAMES);
    const { layout } = useCardContext();

    const headerStyled = $props(styles.header.default, styles.header[layout]);
    const contentStyled = $props(styles.headerContent.default);
    const textStyled = $props(styles.headerText.default);
    const titleStyled = $props(styles.headerTitle.default);
    const subheadStyled = $props(styles.headerSubhead.default);
    const actionStyled = $props(styles.headerAction.default);

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

        <IconButton variant="text">
          <IconMoreVert size="large" />
        </IconButton>
      </div>
    );
  },
);

export default CardHeader;
export type { CardHeaderProps };
