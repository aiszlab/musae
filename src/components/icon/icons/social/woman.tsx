import React from "react";
import { withIcon } from "../../hoc";

const Woman = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 13.94 8.31 C 13.62 7.52 12.85 7 12 7 C 11.15 7 10.38 7.52 10.06 8.31 L 7 16 L 10 16 L 10 22 L 14 22 L 14 16 L 17 16 L 13.94 8.31 Z"
        fill="currentColor"
      />
      <path
        d="M 12 6 C 13.105 6 14 5.105 14 4 C 14 2.895 13.105 2 12 2 C 10.895 2 10 2.895 10 4 C 10 5.105 10.895 6 12 6 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Woman;
