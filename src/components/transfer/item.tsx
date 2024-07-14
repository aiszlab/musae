import React from "react";
import { TransferItemProps } from "./types";
import { Checkbox } from "../checkbox";
import stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";

const styles = stylex.create({
  item: {
    display: "flex",
    alignItems: "center",
    paddingInline: spacing.medium,
    paddingBlock: spacing.xxsmall,
    gap: spacing.small,
  },
});

const Item = ({ value, label }: TransferItemProps) => {
  const styled = {
    item: stylex.props(styles.item),
  };

  return (
    <li className={styled.item.className} style={styled.item.style}>
      <Checkbox value={value} />
      {label}
    </li>
  );
};

export default Item;
