import React from "react";
import type { ColProps } from "musae/types/grid";
import { useClassNames } from "../../hooks/use-class-names";
import { GridClassToken } from "../../utils/class-name";
import { stringify } from "@aiszlab/relax/class-name";
import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  col: (props: { span: number }) => ({
    gridColumnStart: "auto",
    gridColumnEnd: `span ${props.span}`,
  }),
});

const Col = ({ children, className, span = 8, as: As = "div", style }: ColProps) => {
  const styled = stylex.props(styles.col({ span }));
  const classNames = useClassNames("grid");

  return (
    <As
      className={stringify(classNames[GridClassToken.Col], className, styled.className)}
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
