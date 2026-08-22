import type { ReactNode } from "react";
import React from "react";
import type { TypographyProps } from "../../types/typography";
import { useClassNames } from "../../hooks/use-class-names";
import { props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { $headline } from "../theme/theme";
import { CLASS_NAMES } from "./context";

/**
 * @zh Headline 排版组件。使用 `<h2>` 语义元素，适用于页面次级标题。
 * @en Headline typography component. Uses `<h2>` semantic element for secondary page headings.
 */
const Headline = ({ size = "medium", children, className, style }: TypographyProps): ReactNode => {
  const classNames = useClassNames(CLASS_NAMES);
  const styled = $props($headline[size]);

  return (
    <h2
      className={stringify(classNames.headline, className, styled.className)}
      style={{ ...styled.style, ...style }}
    >
      {children}
    </h2>
  );
};

export default Headline;
