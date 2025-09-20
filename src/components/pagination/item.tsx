import React, { createElement } from "react";
import type { PaginationItemProps } from "../../types/pagination";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  MoreHoriz,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "../icon/icons";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { IconButton } from "../icon-button";

const styles = $create({
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
      <IconButton
        onClick={() => subtract()}
        variant="text"
        color="secondary"
        disabled={!hasPrev}
        size="small"
      >
        <KeyboardArrowLeft />
      </IconButton>
    );
  }

  if (value === "next") {
    return (
      <IconButton
        onClick={() => add()}
        variant="text"
        color="secondary"
        disabled={!hasNext}
        size="small"
      >
        <KeyboardArrowRight />
      </IconButton>
    );
  }

  const isMorePrev = value === "more-prev";
  const isMoreNext = value === "more-next";

  if (isMorePrev || isMoreNext) {
    const styled = {
      more: $props(styles.more),
    };

    return (
      <IconButton
        variant="text"
        color="secondary"
        className={styled.more.className}
        style={styled.more.style}
        onClick={() => {
          if (isMorePrev) {
            subtract(5);
            return;
          }

          add(5);
        }}
        size="small"
      >
        <MoreHoriz role="separator" />

        {/* hovered icon */}
        {createElement(isMorePrev ? KeyboardDoubleArrowLeft : KeyboardDoubleArrowRight, {
          role: "button",
        })}
      </IconButton>
    );
  }

  return (
    <IconButton
      color={checked ? "primary" : "secondary"}
      variant={checked ? "filled" : "text"}
      onClick={() => {
        onClick(value);
      }}
      size="small"
    >
      {value}
    </IconButton>
  );
};

export default Item;
