import React, { createElement } from "react";
import { type PaginationItemProps, PaginationItemType } from "./types";
import { Button } from "../button";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  MoreHoriz,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "../icon/icons";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  more: {
    ":hover > [data-role='leading']": {
      display: "none",
    },

    ":hover > [data-role='trailing']": {
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
      <Button onClick={() => subtract()} shape="circular" variant="text" color="secondary" disabled={!hasPrev}>
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
          isNegative ? subtract(5) : add(5);
        }}
      >
        <MoreHoriz data-role="leading" />

        {/* hovered icon */}
        {createElement(isNegative ? KeyboardDoubleArrowLeft : KeyboardDoubleArrowRight, {
          className: styled.hidden.className,
          style: styled.hidden.style,
          "data-role": "trailing",
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
