import React, { createElement } from "react";
import { type PaginationItemProps, PaginationItemType } from "./types";
import { Button } from "../button";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  MoreHoriz,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "../icon";
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

const Item = ({ value, onPageChange, add, subtract, checked, hasNext, hasPrev }: PaginationItemProps) => {
  if (value === PaginationItemType.Prev) {
    return (
      <Button onClick={() => add()} shape="circular" variant="text" color="secondary" disabled={!hasPrev}>
        <KeyboardArrowLeft />
      </Button>
    );
  }

  if (value === PaginationItemType.Next) {
    return (
      <Button onClick={() => add()} shape="circular" variant="text" color="secondary" disabled={!hasNext}>
        <KeyboardArrowRight />
      </Button>
    );
  }

  if (value === PaginationItemType.MorePrev || value === PaginationItemType.MoreNext) {
    const styled = {
      more: stylex.props(styles.more),
      hidden: stylex.props(styles.hidden),
    };
    const isNegative = value === PaginationItemType.MorePrev;

    return (
      <Button
        shape="circular"
        variant="text"
        color="secondary"
        className={styled.more.className}
        style={styled.more.style}
        onClick={() => {
          isNegative ? add(5) : subtract(5);
        }}
      >
        <MoreHoriz />

        {/* hovered icon */}
        {createElement(isNegative ? KeyboardDoubleArrowLeft : KeyboardDoubleArrowRight, {
          className: styled.hidden.className,
          style: styled.hidden.style,
        })}
      </Button>
    );
  }

  return (
    <Button
      shape="circular"
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
