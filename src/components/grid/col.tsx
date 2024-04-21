import React from "react";
import type { ColProps } from "./types";
import { useClassNames } from "../config";
import { ComponentToken, GridClassToken } from "../../utils/class-name";
import clsx from "clsx";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  col: (props: { span: number }) => ({
    gridColumnStart: "auto",
    gridColumnEnd: `span ${props.span}`,
    maxWidth: "1fr",
  }),
});

const Col = ({ children, className, span = 8, as: As = "div", ...props }: ColProps) => {
  const styled = stylex.props(styles.col({ span }));
  const classNames = useClassNames(ComponentToken.Grid);

  return (
    <As
      className={clsx(classNames[GridClassToken.Col], className, styled.className)}
      style={{
        ...styled.style,
        ...props.style,
      }}
    >
      {children}
    </As>
  );
};

export default Col;
