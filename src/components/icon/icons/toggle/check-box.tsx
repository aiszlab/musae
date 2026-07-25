import React from "react";
import { withIcon } from "../../hoc";

const CheckBox = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 19.778 2 L 4.222 2 C 3 2 2 3 2 4.222 L 2 19.778 C 2 21 3 22 4.222 22 L 19.778 22 C 21 22 22 21 22 19.778 L 22 4.222 C 22 3 21 2 19.778 2 Z M 19.778 19.778 L 4.222 19.778 L 4.222 4.222 L 19.778 4.222 L 19.778 19.778 Z M 18.656 8.667 L 17.089 7.089 L 9.767 14.411 L 6.9 11.556 L 5.322 13.122 L 9.767 17.556 L 18.656 8.667 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default CheckBox;
