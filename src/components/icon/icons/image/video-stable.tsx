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
        d="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM4 16V4H6.95L4.62 12.73L16.82 16H4ZM15.62 13.61L7.07 11.32L8.38 6.4L16.94 8.69L15.62 13.61ZM20 16H17.05L19.39 7.27L7.18 4H20V16Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconVideoStable;
