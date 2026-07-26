import React from "react";
import { withIcon } from "../../hoc";

const IconRadio = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 6.5H8.3L16.56 3.16L15.88 1.5L3.24 6.65C2.51 6.93 2 7.67 2 8.5V20.5C2 21.6 2.89 22.5 4 22.5H20C21.11 22.5 22 21.6 22 20.5V8.5C22 7.39 21.11 6.5 20 6.5ZM20 8.5V11.5H18V9.5H16V11.5H4V8.5H20ZM4 20.5V13.5H20V20.5H4Z"
        fill="currentColor"
      />
      <path
        d="M8 19.48C9.38071 19.48 10.5 18.3607 10.5 16.98C10.5 15.5993 9.38071 14.48 8 14.48C6.61929 14.48 5.5 15.5993 5.5 16.98C5.5 18.3607 6.61929 19.48 8 19.48Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconRadio;
