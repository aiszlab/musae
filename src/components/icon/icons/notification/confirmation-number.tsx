import React from "react";
import { withIcon } from "../../hoc";

const IconConfirmationNumber = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 22 10 L 22 6 C 22 4.89 21.1 4 20 4 L 4 4 C 2.9 4 2.01 4.89 2.01 6 L 2.01 10 C 3.11 10 4 10.9 4 12 C 4 13.1 3.11 14 2 14 L 2 18 C 2 19.1 2.9 20 4 20 L 20 20 C 21.1 20 22 19.1 22 18 L 22 14 C 20.9 14 20 13.1 20 12 C 20 10.9 20.9 10 22 10 Z M 20 8.54 C 18.81 9.23 18 10.53 18 12 C 18 13.47 18.81 14.77 20 15.46 L 20 18 L 4 18 L 4 15.46 C 5.19 14.77 6 13.47 6 12 C 6 10.52 5.2 9.23 4.01 8.54 L 4 6 L 20 6 L 20 8.54 Z M 11 15 L 13 15 L 13 17 L 11 17 L 11 15 Z M 11 11 L 13 11 L 13 13 L 11 13 L 11 11 Z M 11 7 L 13 7 L 13 9 L 11 9 L 11 7 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconConfirmationNumber;
