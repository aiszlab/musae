import React from "react";
import { withIcon } from "../../hoc";

const IconDirectionsRailwayFilled = withIcon(({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 2.5C8 2.5 4 3 4 6.5V16C4 17.93 5.57 19.5 7.5 19.5L6 20.5V21.5H18V20.5L16.5 19.5C18.43 19.5 20 17.93 20 16V6.5C20 3 16.42 2.5 12 2.5ZM12 4.5C15.71 4.5 17.13 4.96 17.67 5.5H6.43C7.03 4.98 8.48 4.5 12 4.5ZM18 16C18 16.83 17.33 17.5 16.5 17.5H7.5C6.67 17.5 6 16.83 6 16V12.5H18V16ZM18 10.5H6V7.5H18V10.5Z"
        fill="currentColor"
      />
      <path
        d="M12 16.5C12.8284 16.5 13.5 15.8284 13.5 15C13.5 14.1716 12.8284 13.5 12 13.5C11.1716 13.5 10.5 14.1716 10.5 15C10.5 15.8284 11.1716 16.5 12 16.5Z"
        fill="currentColor"
      />
    </svg>
  );
});

export default IconDirectionsRailwayFilled;
