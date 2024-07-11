import React from "react";
import type { TransferListProps } from "./types";
import stylex from "@stylexjs/stylex";
import { sizes } from "../theme/tokens.stylex";

const styles = stylex.create({
  list: {
    width: sizes.xxxxxlarge,
    height: sizes.xxxxxxlarge,
  },
});

const List = ({ options }: TransferListProps) => {
  const styled = {
    list: stylex.props(styles.list),
  };

  return (
    <div className={styled.list.className} style={styled.list.style}>
      <ul>
        {options.map((option) => {
          return <li key={option.value}>{option.label}</li>;
        })}
      </ul>
    </div>
  );
};

export default List;
