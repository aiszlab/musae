import React from "react";
import { type PaginationItemProps, PaginationItemType } from "./types";
import { Button } from "../button";
import { KeyboardArrowLeft, KeyboardArrowRight, MoreHoriz } from "../icon";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  more: {
    ":hover > span:first-child": {
      display: "none",
    },

    ":hover > span:last-child": {
      display: "inline-flex",
    },
  },

  hidden: {
    display: "none",
  },
});

const Item = ({ value, onPageChange, next, prev, checked, hasNext, hasPrev }: PaginationItemProps) => {
  if (value === PaginationItemType.Prev) {
    return (
      <Button onClick={prev} shape="circle" variant="text" color="secondary" disabled={!hasPrev}>
        <KeyboardArrowLeft />
      </Button>
    );
  }

  if (value === PaginationItemType.Next) {
    return (
      <Button onClick={next} shape="circle" variant="text" color="secondary" disabled={!hasNext}>
        <KeyboardArrowRight />
      </Button>
    );
  }

  if (value === PaginationItemType.MorePrev || value === PaginationItemType.MoreNext) {
    const styled = {
      more: stylex.props(styles.more),
      hidden: stylex.props(styles.hidden),
    };

    return (
      <Button
        disabled
        shape="circle"
        variant="text"
        color="secondary"
        className={styled.more.className}
        style={styled.more.style}
      >
        <MoreHoriz />
        <KeyboardArrowRight className={styled.hidden.className} style={styled.hidden.style} />
      </Button>
    );
  }

  return (
    <Button
      shape="circle"
      color={checked ? "primary" : "secondary"}
      variant={checked ? "filled" : "text"}
      onClick={() => {
        onPageChange(value);
      }}
    >
      {value}
    </Button>
  );
};

export default Item;
