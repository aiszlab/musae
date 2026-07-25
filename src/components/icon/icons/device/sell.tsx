import React from "react";
import { withIcon } from "../../hoc";

const Sell = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <g transform="translate(0, 0.0053) scale(1.1998)">
        <path
          d="M19.41 9.41L10.58 0.58C10.21 0.21 9.7 0 9.17 0H2C0.9 0 0 0.9 0 2V9.17C0 9.7 0.21 10.21 0.59 10.58L9.42 19.41C10.2 20.19 11.47 20.19 12.25 19.41L19.42 12.24C20.2 11.46 20.2 10.2 19.41 9.41ZM10.83 18L2 9.17V2H9.17L18 10.83L10.83 18Z"
          fill="currentColor"
        />
        <path
          d="M4.5 6C5.32843 6 6 5.32843 6 4.5C6 3.67157 5.32843 3 4.5 3C3.67157 3 3 3.67157 3 4.5C3 5.32843 3.67157 6 4.5 6Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
});

export default Sell;
