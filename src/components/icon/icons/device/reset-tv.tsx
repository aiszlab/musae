import React from "react";
import { withIcon } from "../../hoc";

const IconResetTv = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M22 8V5C22 3.9 21.1 3 20 3H4C2.9 3 2 3.9 2 5V17C2 18.1 2.9 19 4 19H8V21H16V19H20C21.1 19 21.99 18.1 21.99 17V12H22C22 10.9 21.1 10 20 10H12.83L14.66 8.17L13.25 6.76C9.69 10.31 10.88 9.12 9 11C11.06 13.06 9.9 11.9 13.24 15.24L14.65 13.83L12.83 12H20V17H4V5H20V8H22Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconResetTv;
