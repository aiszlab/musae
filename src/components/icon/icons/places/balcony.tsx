import React from "react";
import { withIcon } from "../../hoc";

const Balcony = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 10 10 L 10 12 L 8 12 L 8 10 L 10 10 Z M 16 12 L 16 10 L 14 10 L 14 12 L 16 12 Z M 21 14 L 21 22 L 3 22 L 3 14 L 4 14 L 4 10 C 4 5.58 7.58 2 12 2 C 16.42 2 20 5.58 20 10 L 20 14 L 21 14 Z M 7 16 L 5 16 L 5 20 L 7 20 L 7 16 Z M 11 16 L 9 16 L 9 20 L 11 20 L 11 16 Z M 11 4.08 C 8.16 4.56 6 7.03 6 10 L 6 14 L 11 14 L 11 4.08 Z M 13 14 L 18 14 L 18 10 C 18 7.03 15.84 4.56 13 4.08 L 13 14 Z M 15 16 L 13 16 L 13 20 L 15 20 L 15 16 Z M 19 16 L 17 16 L 17 20 L 19 20 L 19 16 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Balcony;
