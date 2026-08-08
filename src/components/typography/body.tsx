import type { ReactNode } from "react";
import React from "react";
import type { TypographyProps } from "../../types/typography";
import { useClassNames } from "../../hooks/use-class-names";
import { props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { $body } from "../theme/theme";
import { CLASS_NAMES } from "./context";

/**
 * @zh Body 排版组件。使用 `<p>` 语义元素，适用于正文段落。
 * @en Body typography component. Uses `<p>` semantic element for body text paragraphs.
 */
const Body = ({ size = "medium", children, className, style }: TypographyProps): ReactNode => {
  const classNames = useClassNames(CLASS_NAMES);
  const styled = $props($body[size]);

  return (
    <p
      className={stringify(classNames.body, className, styled.className)}
      style={{ ...styled.style, ...style }}
    >
      {children}
    </p>
  );
};

export default Body;
