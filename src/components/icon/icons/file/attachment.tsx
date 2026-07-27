import React from "react";
import { withIcon } from "../../hoc";

const IconAttachment = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18 16H6.5C4.29 16 2.5 14.21 2.5 12C2.5 9.79 4.29 8 6.5 8H19C20.38 8 21.5 9.12 21.5 10.5C21.5 11.88 20.38 13 19 13H8.5C7.95 13 7.5 12.55 7.5 12C7.5 11.45 7.95 11 8.5 11H18V9.5H8.5C7.12 9.5 6 10.62 6 12C6 13.38 7.12 14.5 8.5 14.5H19C21.21 14.5 23 12.71 23 10.5C23 8.29 21.21 6.5 19 6.5H6.5C3.46 6.5 1 8.96 1 12C1 15.04 3.46 17.5 6.5 17.5H18V16Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconAttachment;
