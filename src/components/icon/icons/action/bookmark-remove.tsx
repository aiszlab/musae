import React from "react";
import { withIcon } from "../../hoc";

const BookmarkRemove = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16 11V17.97L11 15.83L6 17.97V5H12V3H6C4.9 3 4 3.9 4 5V21L11 18L18 21V11H16ZM20 7H14V5H20V7Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default BookmarkRemove;
