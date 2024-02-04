import React from "react";
import { type PaginationItemProps, PaginationItemType } from "./types";
import { Button } from "../button";
import { KeyboardArrowLeft, KeyboardArrowRight } from "../icon";
import { useEvent } from "@aiszlab/relax";

const Item = ({ value, onPageChange, next, prev }: PaginationItemProps) => {
  const change = useEvent(() => {
    onPageChange(value as number);
  });

  if (value === PaginationItemType.Prev) {
    return (
      <Button onClick={prev}>
        <KeyboardArrowLeft />
      </Button>
    );
  }

  if (value === PaginationItemType.Next) {
    return (
      <Button onClick={next}>
        <KeyboardArrowRight />
      </Button>
    );
  }

  if (value === PaginationItemType.Dots) {
    return <Button>{PaginationItemType.Dots}</Button>;
  }

  return <Button onClick={change}>{value}</Button>;
};

export default Item;
