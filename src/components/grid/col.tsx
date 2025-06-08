import { createElement, type ReactNode, useContext } from "react";
import type { ColProps } from "../../types/grid";
import { stringify } from "@aiszlab/relax/class-name";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { Context, SPANS } from "./context";

const styles = $create({
  col: {
    flex: "0 0 var(--span)",
    maxWidth: "var(--span)",
  },
});

const Col = <E extends "aside" | "div" = "div">({
  children,
  className,
  span = 8,
  as: As = "div" as E,
  style,
  onClick,
}: ColProps<E>): ReactNode => {
  const styled = $props(styles.col);
  const { classNames } = useContext(Context);
  const isFull = span >= SPANS;

  return createElement(
    As,
    {
      className: stringify(classNames.col, className, styled.className),
      style: {
        ...styled.style,
        ...style,
        ...(isFull && {
          "--column-gap": "0px",
        }),
        "--span": `calc(${(span / SPANS) * 100}% - var(--column-gap) / 2)`,
      },
      onClick,
    },
    children,
  );
};

export default Col;
