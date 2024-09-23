import React, { createElement } from "react";
import type { PaginationItemProps } from "musae/types/pagination";
import { Button } from "../button";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  MoreHoriz,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "musae/icons";
import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  more: {
    ":hover > [role='separator']": {
      display: "none",
    },

    ":not(:hover) > [role='button']": {
      display: "none",
    },
  },
});

const Item = ({
  value,
  onClick,
  add,
  subtract,
  checked,
  hasNext,
  hasPrev,
}: PaginationItemProps) => {
  if (value === "prev") {
    return (
      <Button
        onClick={() => subtract()}
        shape="circular"
        variant="text"
        color="secondary"
        disabled={!hasPrev}
      >
        <KeyboardArrowLeft />
      </Button>
    );
  }

  if (value === "next") {
    return (
      <Button
        onClick={() => add()}
        shape="circular"
        variant="text"
        color="secondary"
        disabled={!hasNext}
      >
        <KeyboardArrowRight />
      </Button>
    );
  }

  const isMorePrev = value === "more-prev";
  const isMoreNext = value === "more-next";

  if (isMorePrev || isMoreNext) {
    const styled = {
      more: stylex.props(styles.more),
    };

    return (
      <Button
        shape="circular"
        variant="text"
        color="secondary"
        className={styled.more.className}
        style={styled.more.style}
        onClick={() => {
          isMorePrev ? subtract(5) : add(5);
        }}
      >
        <MoreHoriz role="separator" />

        {/* hovered icon */}
        {createElement(isMorePrev ? KeyboardDoubleArrowLeft : KeyboardDoubleArrowRight, {
          role: "button",
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
        onClick(value);
      }}
    >
      {value}
    </Button>
  );
};

export default Item;
