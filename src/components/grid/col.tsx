import React, { useContext } from "react";
import type { ColProps } from "musae/types/grid";
import { stringify } from "@aiszlab/relax/class-name";
import stylex from "@stylexjs/stylex";
import { Context } from "./context";

const styles = stylex.create({
  col: (props: { span: number }) => ({
    gridColumnStart: "auto",
    gridColumnEnd: `span ${props.span}`,
  }),
});

const Col = ({ children, className, span = 8, as: As = "div", style }: ColProps) => {
  const styled = stylex.props(styles.col({ span }));
  const { classNames } = useContext(Context);

  return (
    <As
      className={stringify(classNames.col, className, styled.className)}
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
