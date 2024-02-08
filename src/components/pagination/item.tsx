import React from "react";
import { type PaginationItemProps, PaginationItemType } from "./types";
import { Button } from "../button";
import { KeyboardArrowLeft, KeyboardArrowRight, MoreHoriz } from "../icon";

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
    return (
      <Button disabled shape="circle" variant="text" color="secondary">
        <MoreHoriz />
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
