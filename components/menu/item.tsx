import React from "react";
import type { ItemRenderProps } from "./types";

const Item = (props: ItemRenderProps) => {
  return <li className={props.className}>{props.children}</li>;
};

export default Item;
