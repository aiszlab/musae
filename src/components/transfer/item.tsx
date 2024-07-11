import React from "react";
import { TransferItemProps } from "./types";


const Item = ({ value, label }: TransferItemProps) => {
  return (
    <li>
      {label}
    </li>
  );
};

export default Item;