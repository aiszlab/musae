import React from "react";
import { TimelineItemProps } from "./types";
import stylex from "@stylexjs/stylex";

const styles = {
  item: stylex.create({
    default: {
      display: "grid",
    },

    labeled: {},
  }),
};

const Item = ({ children, label }: TimelineItemProps) => {
  return (
    <li>
      <div>label</div>
      <div>dots</div>
      <div>children</div>
    </li>
  );
};

export default Item;
