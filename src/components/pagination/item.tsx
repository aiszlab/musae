import React, { createElement } from "react";
import type { PaginationItemProps } from "../../types/pagination";
import {
  IconKeyboardArrowLeft,
  IconKeyboardArrowRight,
  IconMoreHoriz,
  IconKeyboardDoubleArrowLeft,
  IconKeyboardDoubleArrowRight,
} from "../icon/icons";
import { create as $create, props as $props } from "@stylexjs/stylex";
import { IconButton } from "../icon-button";

const styles = $create({
  more: {
    "@media (hover: hover)": {
      ":hover > [role='separator']": {
        display: "none",
      },

      ":not(:hover) > [role='button']": {
        display: "none",
      },
    },

    "@media (hover: none)": {
      ":active > [role='separator']": {
        display: "none",
      },

      ":not(:active) > [role='button']": {
        display: "none",
      },
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
        <IconKeyboardArrowLeft />
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
        <IconKeyboardArrowRight />
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
        <IconMoreHoriz role="separator" />

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
