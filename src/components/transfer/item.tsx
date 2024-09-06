import React from "react";
import type { TransferItemProps } from "./types";
import { Checkbox } from "../checkbox";
import stylex from "@stylexjs/stylex";
import { spacing } from "../theme/tokens.stylex";
import { useClassNames } from "../../hooks/use-class-names";
import { TransferClassToken } from "../../utils/class-name";
import { clsx } from "@aiszlab/relax";
import { ComponentToken } from "../../utils/component-token";

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
  const classNames = useClassNames(ComponentToken.Transfer);
  const styled = {
    item: stylex.props(styles.item),
  };

  return (
    <li
      className={clsx(classNames[TransferClassToken.Item], styled.item.className)}
      style={styled.item.style}
    >
      <Checkbox value={value} />
      {label}
    </li>
  );
};

export default Item;
