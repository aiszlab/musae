import React from "react";
import type { MenuItemRenderProps } from "./types";
import { StyledMenuItem } from "./styled";

const Item = ({ level, label }: MenuItemRenderProps) => {
  return <StyledMenuItem level={level}>{label}</StyledMenuItem>;
};

export default Item;
