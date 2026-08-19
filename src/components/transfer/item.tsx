import styles from "./styles";
import React, { useContext } from "react";
import type { TransferItemProps } from "../../types/transfer";
import { Checkbox } from "../checkbox";
import { props as $props } from "@stylexjs/stylex";
import { stringify } from "@aiszlab/relax/class-name";
import { Context } from "./context";

const Item = ({ value, label }: TransferItemProps) => {
  const { classNames } = useContext(Context);

  const styled = {
    item: $props(styles.item.default),
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
