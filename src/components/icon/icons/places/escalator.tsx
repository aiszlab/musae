import React from "react";
import { withIcon } from "../../hoc";

const Escalator = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 19.778 4.222 L 19.778 19.778 L 4.222 19.778 L 4.222 4.222 L 19.778 4.222 Z M 19.778 2 L 4.222 2 C 3 2 2 3 2 4.222 L 2 19.778 C 2 21 3 22 4.222 22 L 19.778 22 C 21 22 22 21 22 19.778 L 22 4.222 C 22 3 21 2 19.778 2 Z M 17.556 5.333 L 13.889 5.333 L 8.333 15.333 L 6.444 15.333 C 5.522 15.333 4.778 16.078 4.778 17 C 4.778 17.922 5.522 18.667 6.444 18.667 L 10.111 18.667 L 15.667 8.667 L 17.556 8.667 C 18.478 8.667 19.222 7.922 19.222 7 C 19.222 6.078 18.478 5.333 17.556 5.333 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Escalator;
