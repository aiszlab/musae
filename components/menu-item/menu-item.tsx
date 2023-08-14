import React from "react";
import { Props } from "./types";
import clsx from "clsx";

const MenuItem = (props: Props) => {
  return <li className={clsx([props.className])}>{props.children}</li>;
};

export default MenuItem;
