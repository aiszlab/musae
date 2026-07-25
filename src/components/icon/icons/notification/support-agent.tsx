import React from "react";
import { withIcon } from "../../hoc";

const SupportAgent = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M 21 12.22 C 21 6.73 16.74 3 12 3 C 7.31 3 3 6.65 3 12.28 C 2.4 12.62 2 13.26 2 14 L 2 16 C 2 17.1 2.9 18 4 18 L 5 18 L 5 11.9 C 5 8.03 8.13 4.9 12 4.9 C 15.87 4.9 19 8.03 19 11.9 L 19 19 L 11 19 L 11 21 L 19 21 C 20.1 21 21 20.1 21 19 L 21 17.78 C 21.59 17.47 22 16.86 22 16.14 L 22 13.84 C 22 13.14 21.59 12.53 21 12.22 Z"
        fill="currentColor"
      />
      <path
        d="M 9 14 C 9.552 14 10 13.552 10 13 C 10 12.448 9.552 12 9 12 C 8.448 12 8 12.448 8 13 C 8 13.552 8.448 14 9 14 Z"
        fill="currentColor"
      />
      <path
        d="M 15 14 C 15.552 14 16 13.552 16 13 C 16 12.448 15.552 12 15 12 C 14.448 12 14 12.448 14 13 C 14 13.552 14.448 14 15 14 Z"
        fill="currentColor"
      />
      <path
        d="M 18 11.03 C 17.52 8.18 15.04 6 12.05 6 C 9.02 6 5.76 8.51 6.02 12.45 C 8.49 11.44 10.35 9.24 10.88 6.56 C 12.19 9.19 14.88 11 18 11.03 Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default SupportAgent;
