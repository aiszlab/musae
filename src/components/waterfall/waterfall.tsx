import * as stylex from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";
import type { WaterfallProps } from "./types";
import React from "react";
import { useRepaint } from "./hooks";
import clsx from "clsx";
import { type Gutters, useGutters } from "../../hooks/use-gutters";

const styles = stylex.create({
  waterfall: (props: { gutters: Gutters }) => ({
    width: sizes.full,
    display: "flex",
    flexFlow: "row wrap",
    // alignContent: "flex-start",

    height: "fit-content",
    columnGap: props.gutters[0],
    rowGap: props.gutters[1],
  }),

  repainted: (props: { maxHeight: number }) => ({
    // flexFlow: "column wrap",
    // height: props.maxHeight,
  }),

  item: (props: { columns: number; colGutter: number; order: number | null }) => ({
    order: props.order,
    width: `calc((100% - ${props.columns - 1} * ${props.colGutter}px) / ${props.columns})`,
  }),
});

const Waterfall = ({ columns = 4, gutter, items = [], ...props }: WaterfallProps) => {
  const gutters = useGutters({ gutter });
  const { collect, maxHeight, getOrder } = useRepaint({ columns, gutters });

  const styled = stylex.props(
    styles.waterfall({ gutters }),
    maxHeight.current > 0 && styles.repainted({ maxHeight: maxHeight.current })
  );

  if (items.length === 0) return null;

  return (
    <div
      className={clsx(props.className, styled.className)}
      style={{
        ...props.style,
        ...styled.style,
      }}
    >
      {items.map((item, index) => {
        const { className, style } = stylex.props(
          styles.item({ colGutter: gutters[0], columns, order: getOrder(index) })
        );

        return (
          <div
            key={index}
            className={className}
            style={style}
            ref={(_ref) => {
              collect(index, _ref);
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Waterfall;
