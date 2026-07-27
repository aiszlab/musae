import React from "react";
import { withIcon } from "../../hoc";

const IconWindow = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 19.778 2 L 4.222 2 C 3 2 2 3 2 4.222 L 2 19.778 C 2 21 3 22 4.222 22 L 19.778 22 C 21 22 22 21 22 19.778 L 22 4.222 C 22 3 21 2 19.778 2 Z M 19.778 10.889 L 13.111 10.889 L 13.111 4.222 L 19.778 4.222 L 19.778 10.889 Z M 10.889 4.222 L 10.889 10.889 L 4.222 10.889 L 4.222 4.222 L 10.889 4.222 Z M 4.222 13.111 L 10.889 13.111 L 10.889 19.778 L 4.222 19.778 L 4.222 13.111 Z M 13.111 19.778 L 13.111 13.111 L 19.778 13.111 L 19.778 19.778 L 13.111 19.778 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconWindow;
