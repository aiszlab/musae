import React from "react";
import { withIcon } from "../../hoc";

const IconStairs = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 19.778 4.222 L 19.778 19.778 L 4.222 19.778 L 4.222 4.222 L 19.778 4.222 Z M 19.778 2 L 4.222 2 C 3 2 2 3 2 4.222 L 2 19.778 C 2 21 3 22 4.222 22 L 19.778 22 C 21 22 22 21 22 19.778 L 22 4.222 C 22 3 21 2 19.778 2 Z M 18.667 5.333 L 13.756 5.333 L 13.756 9.033 L 10.889 9.033 L 10.889 12.733 L 8.022 12.733 L 8.022 16.444 L 5.333 16.444 L 5.333 18.667 L 10.244 18.667 L 10.244 14.967 L 13.111 14.967 L 13.111 11.267 L 15.978 11.267 L 15.978 7.556 L 18.667 7.556 L 18.667 5.333 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconStairs;
