import React from "react";
import { withIcon } from "../../hoc";

const IndeterminateCheckBox = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 19.778 2 L 4.222 2 C 3 2 2 3 2 4.222 L 2 19.778 C 2 21 3 22 4.222 22 L 19.778 22 C 21 22 22 21 22 19.778 L 22 4.222 C 22 3 21 2 19.778 2 Z M 19.778 19.778 L 4.222 19.778 L 4.222 4.222 L 19.778 4.222 L 19.778 19.778 Z M 6.444 10.889 L 17.556 10.889 L 17.556 13.111 L 6.444 13.111 L 6.444 10.889 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IndeterminateCheckBox;
