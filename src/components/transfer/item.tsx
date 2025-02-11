import React, { useContext } from "react";
import type { TransferItemProps } from "../../types/transfer";
import { Checkbox } from "../checkbox";
import stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { Context } from "./context";

const styles = stylex.create({
  item: {
    display: "flex",
    alignItems: "center",
    paddingInline: spacing.medium,
    paddingBlock: spacing.xxxxxsmall,
    gap: spacing.xxsmall,
  },
});

const Item = ({ value, label }: TransferItemProps) => {
  const { classNames } = useContext(Context);

  const styled = {
    item: stylex.props(styles.item),
  };

  return (
    <li className={stringify(classNames.item, styled.item.className)} style={styled.item.style}>
      <Checkbox value={value} />
      {label}
    </li>
  );
};

export default Item;
