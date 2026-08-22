import type { ReactNode } from "react";
import React from "react";
import type { TypographyProps } from "../../types/typography";
import { useClassNames } from "../../hooks/use-class-names";
import { props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { $title } from "../theme/theme";
import { CLASS_NAMES } from "./context";

/**
 * @zh Title 排版组件。使用 `<h3>` 语义元素，适用于区块标题。
 * @en Title typography component. Uses `<h3>` semantic element for section titles.
 */
const Title = ({ size = "medium", children, className, style }: TypographyProps): ReactNode => {
  const classNames = useClassNames(CLASS_NAMES);
  const styled = $props($title[size]);

  return (
    <h3
      className={stringify(classNames.title, className, styled.className)}
      style={{ ...styled.style, ...style }}
    >
      {children}
    </h3>
  );
};

export default Title;
