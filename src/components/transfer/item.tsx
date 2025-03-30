import React, { useContext } from "react";
import type { TransferItemProps } from "../../types/transfer";
import { Checkbox } from "../checkbox";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { Context } from "./context";

const styles = $create({
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
    item: $props(styles.item),
  };

  return (
    <li className={stringify(classNames.item, styled.item.className)} style={styled.item.style}>
      <Checkbox value={value} ripple={false}>
        {label}
      </Checkbox>
    </li>
  );
};

export default Item;
