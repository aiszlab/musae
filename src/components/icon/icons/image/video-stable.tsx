import React from "react";
import { withIcon } from "../../hoc";

const IconVideoStable = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM4 18V6H6.95L4.62 14.73L16.82 18H4ZM15.62 15.61L7.07 13.32L8.38 8.4L16.94 10.69L15.62 15.61ZM20 18H17.05L19.39 9.27L7.18 6H20V18Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconVideoStable;
