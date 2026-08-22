import type { ReactNode } from "react";
import React from "react";
import type { TypographyProps } from "../../types/typography";
import { useClassNames } from "../../hooks/use-class-names";
import { props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { $display } from "../theme/theme";
import { CLASS_NAMES } from "./context";

/**
 * @zh Display 排版组件。使用 `<h1>` 语义元素，适用于页面最大的标题。
 * @en Display typography component. Uses `<h1>` semantic element for the largest page headings.
 */
const Display = ({ size = "medium", children, className, style }: TypographyProps): ReactNode => {
  const classNames = useClassNames(CLASS_NAMES);
  const styled = $props($display[size]);

  return (
    <h1
      className={stringify(classNames.display, className, styled.className)}
      style={{ ...styled.style, ...style }}
    >
      {children}
    </h1>
  );
};

export default Display;
