import React from "react";
import { withIcon } from "../../hoc";

const Kitchen = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 8 5 L 10 5 L 10 8 L 8 8 L 8 5 Z M 8 12 L 10 12 L 10 17 L 8 17 L 8 12 Z M 18 2.01 L 6 2 C 5.47 6.441e -12 2.961 4.211 2.586 4.586 C 4.211 2.961 5.776e -11 3.47 4 4 L 4 20 C 4 21.1 4.9 22 6 22 L 18 22 C 19.1 22 20 21.1 20 20 L 20 4 C 20 2.89 19.1 2.01 18 2.01 Z M 18 20 L 6 20 L 6 10.98 L 18 10.98 L 18 20 Z M 18 9 L 6 9 L 6 4 L 18 4 L 18 9 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Kitchen;
