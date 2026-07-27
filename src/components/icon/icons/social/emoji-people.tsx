import React from "react";
import { withIcon } from "../../hoc";

const IconEmojiPeople = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 11.82 6 C 12.925 6 13.82 5.105 13.82 4 C 13.82 2.895 12.925 2 11.82 2 C 10.715 2 9.82 2.895 9.82 4 C 9.82 5.105 10.715 6 11.82 6 Z"
        fill="currentColor"
      />
      <path
        d="M 15.71 8.11 C 15.32 7.72 14.65 7 13.35 7 C 13.14 7 11.93 7 10.81 7 C 8.06 6.99 5.82 4.75 5.82 2 L 3.82 2 C 3.82 5.16 5.93 7.84 8.82 8.71 L 8.82 22 L 10.82 22 L 10.82 16 L 12.82 16 L 12.82 22 L 14.82 22 L 14.82 10.05 L 18.77 14 L 20.18 12.59 L 15.71 8.11 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconEmojiPeople;
