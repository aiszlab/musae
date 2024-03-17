import * as stylex from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";
import type { WaterfallProps } from "./types";
import React from "react";
import { useRenderable } from "./hooks";
import clsx from "clsx";
import { type Gutters, useGutters } from "../../hooks/use-gutters";

const styles = stylex.create({
  waterfall: (props: { maxHeight: number; gutters: Gutters }) => ({
    width: sizes.full,
    display: "flex",
    flexFlow: "column wrap",
    alignContent: "flex-start",
    maxHeight: props.maxHeight,
    columnGap: props.gutters[0],
    rowGap: props.gutters[1],
  }),
});

const Waterfall = ({ children, columns = 4, gutter, ...props }: WaterfallProps) => {
  const gutters = useGutters({ gutter });
  const { ref, maxHeight } = useRenderable({ columns, gutters });
  const styled = stylex.props(styles.waterfall({ maxHeight: maxHeight.current, gutters }));

  return (
    <div
      ref={ref}
      className={clsx(props.className, styled.className)}
      style={{
        ...props.style,
        ...styled.style,
      }}
    >
      {children}
    </div>
  );
};

export default Waterfall;
