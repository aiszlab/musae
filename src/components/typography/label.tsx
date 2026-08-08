import type { ReactNode } from "react";
import React from "react";
import type { TypographyProps } from "../../types/typography";
import { useClassNames } from "../../hooks/use-class-names";
import { props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { $label } from "../theme/theme";
import { CLASS_NAMES } from "./context";

/**
 * @zh Label 排版组件。使用 `<span>` 语义元素，适用于标签、说明等文本。
 * @en Label typography component. Uses `<span>` semantic element for labels and captions.
 */
const Label = ({ size = "medium", children, className, style }: TypographyProps): ReactNode => {
  const classNames = useClassNames(CLASS_NAMES);
  const styled = $props($label[size]);

  return (
    <span
      className={stringify(classNames.label, className, styled.className)}
      style={{ ...styled.style, ...style }}
    >
      {children}
    </span>
  );
};

export default Label;
