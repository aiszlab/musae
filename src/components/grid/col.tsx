import { createElement, type ReactNode, useContext } from "react";
import type { ColProps } from "../../types/grid";
import { stringify } from "@aiszlab/relax/class-name";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { Context } from "./context";

const styles = $create({
  col: (props: { span: number }) => ({
    gridColumnStart: "auto",
    gridColumnEnd: `span ${props.span}`,
  }),
});

const Col = <E extends "aside" | "div" = "div">({
  children,
  className,
  span = 8,
  as: As = "div" as E,
  style,
  onClick,
}: ColProps<E>): ReactNode => {
  const styled = $props(styles.col({ span }));
  const { classNames } = useContext(Context);

  return createElement(
    As,
    {
      className: stringify(classNames.col, className, styled.className),
      style: {
        ...styled.style,
        ...style,
      },
      onClick,
    },
    children,
  );
};

export default Col;
