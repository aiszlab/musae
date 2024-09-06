import React from "react";
import type { ColProps } from "./types";
import { useClassNames } from "../../hooks/use-class-names";
import { GridClassToken } from "../../utils/class-name";
import { clsx } from "@aiszlab/relax";
import * as stylex from "@stylexjs/stylex";
import { ComponentToken } from "../../utils/component-token";

const styles = stylex.create({
  col: (props: { span: number }) => ({
    gridColumnStart: "auto",
    gridColumnEnd: `span ${props.span}`,
  }),
});

const Col = ({ children, className, span = 8, as: As = "div", style }: ColProps) => {
  const styled = stylex.props(styles.col({ span }));
  const classNames = useClassNames(ComponentToken.Grid);

  return (
    <As
      className={clsx(classNames[GridClassToken.Col], className, styled.className)}
      style={{
        ...styled.style,
        ...style,
      }}
    >
      {children}
    </As>
  );
};

export default Col;
