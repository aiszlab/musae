import React from "react";
import { withIcon } from "../../hoc";

const IconRoundaboutRight = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 14.304 7.2 C 13.728 3.792 10.764 1.2 7.2 1.2 C 3.228 1.2 0 4.428 0 8.4 C 0 11.964 2.592 14.928 6 15.504 V 22.8 H 8.4 V 15.492 C 8.4 14.316 7.548 13.332 6.396 13.128 C 4.128 12.756 2.4 10.776 2.4 8.4 C 2.4 5.748 4.548 3.6 7.2 3.6 C 9.576 3.6 11.556 5.328 11.928 7.596 C 12.132 8.748 13.116 9.6 14.292 9.6 H 19.404 L 17.496 11.508 L 19.2 13.2 L 24 8.4 L 19.2 3.6 L 17.508 5.292 L 19.404 7.2 H 14.304Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconRoundaboutRight;
