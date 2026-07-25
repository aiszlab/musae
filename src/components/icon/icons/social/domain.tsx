import React from "react";
import { withIcon } from "../../hoc";

const Domain = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 12 7 L 12 3 L 2 3 L 2 21 L 22 21 L 22 7 L 12 7 Z M 6 19 L 4 19 L 4 17 L 6 17 L 6 19 Z M 6 15 L 4 15 L 4 13 L 6 13 L 6 15 Z M 6 11 L 4 11 L 4 9 L 6 9 L 6 11 Z M 6 7 L 4 7 L 4 5 L 6 5 L 6 7 Z M 10 19 L 8 19 L 8 17 L 10 17 L 10 19 Z M 10 15 L 8 15 L 8 13 L 10 13 L 10 15 Z M 10 11 L 8 11 L 8 9 L 10 9 L 10 11 Z M 10 7 L 8 7 L 8 5 L 10 5 L 10 7 Z M 20 19 L 12 19 L 12 17 L 14 17 L 14 15 L 12 15 L 12 13 L 14 13 L 14 11 L 12 11 L 12 9 L 20 9 L 20 19 Z M 18 11 L 16 11 L 16 13 L 18 13 L 18 11 Z M 18 15 L 16 15 L 16 17 L 18 17 L 18 15 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Domain;
