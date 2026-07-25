import React from "react";
import { withIcon } from "../../hoc";

const KingBed = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 22 12 C 22 10.9 21.1 10 20 10 L 20 7 C 20 5.9 19.1 5 18 5 L 6 5 C 4.9 5 4 5.9 4 7 L 4 10 C 2.9 10 2 10.9 2 12 L 2 17 L 3.33 17 L 4 19 L 5 19 L 5.67 17 L 18.34 17 L 19 19 L 20 19 L 20.67 17 L 22 17 L 22 12 Z M 18 10 L 13 10 L 13 7 L 18 7 L 18 10 Z M 6 7 L 11 7 L 11 10 L 6 10 L 6 7 Z M 4 12 L 20 12 L 20 15 L 4 15 L 4 12 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default KingBed;
