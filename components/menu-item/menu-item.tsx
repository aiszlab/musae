import React from "react";
import { Props } from "./types";
import clsx from "clsx";

const MenuItem = (props: Props) => {
  return (
    <li
      className={clsx([
        "flex justify-start items-center",
        "h-12 py-6 box-border",
        "whitespace-nowrap",
        "hover:bg-cyan-500",
        props.className,
      ])}
    >
      {props.children}
    </li>
  );
};

export default MenuItem;
