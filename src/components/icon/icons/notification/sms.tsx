import React from "react";
import { withIcon } from "../../hoc";

const Sms = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 20 2 L 4 2 C 2.9 2 2 2.9 2 4 L 2 22 L 6 18 L 20 18 C 21.1 18 22 17.1 22 16 L 22 4 C 22 2.9 21.1 2 20 2 Z M 20 16 L 5.17 16 L 4 17.17 L 4 4 L 20 4 L 20 16 Z M 7 9 L 9 9 L 9 11 L 7 11 L 7 9 Z M 15 9 L 17 9 L 17 11 L 15 11 L 15 9 Z M 11 9 L 13 9 L 13 11 L 11 11 L 11 9 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default Sms;
