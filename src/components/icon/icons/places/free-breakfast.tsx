import React from "react";
import { withIcon } from "../../hoc";

const IconFreeBreakfast = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 2 19.778 L 19.778 19.778 L 19.778 22 L 2 22 L 2 19.778 Z M 19.778 2 L 2 2 L 2 13.111 C 2 15.567 3.989 17.556 6.444 17.556 L 13.111 17.556 C 15.567 17.556 17.556 15.567 17.556 13.111 L 17.556 9.778 L 19.778 9.778 C 21.011 9.778 22 8.778 22 7.556 L 22 4.222 C 22 2.989 21.011 2 19.778 2 Z M 15.333 13.111 C 15.333 14.333 14.333 15.333 13.111 15.333 L 6.444 15.333 C 5.222 15.333 4.222 14.333 4.222 13.111 L 4.222 4.222 L 15.333 4.222 L 15.333 13.111 Z M 19.778 7.556 L 17.556 7.556 L 17.556 4.222 L 19.778 4.222 L 19.778 7.556 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconFreeBreakfast;
